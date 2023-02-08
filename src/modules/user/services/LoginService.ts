import { User } from "@modules/user/entities/User";
import { injectable, inject } from "tsyringe";
import { IUserRepository } from "@modules/user/repositories/IUserRepository";
import { IHashProvider } from "@shared/container/providers/HashProvider/IHashProvider";
import { AppError } from "@shared/errors/AppError";
import auth from "config/auth";
import { sign } from "jsonwebtoken";

interface IRequest {
    username: string;
    password: string;
}

interface IResponse {
    user: User;
    accessToken: string;
}

@injectable()
export class LoginService {
	constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository,

        @inject("HashProvider")
        private hashProvider: IHashProvider
	) {}

	public async execute({ username, password }: IRequest): Promise<IResponse> {
		const user = await this.userRepository.findByUsername(username);

		if (!user) throw new AppError("Wrong username!", 401);

		const validPassword = await this.hashProvider.compare(password, user.password);

		if (!validPassword) throw new AppError("Wrong password!", 401);

		const { secret, expiresIn } = auth.jwt;

		const accessToken = sign({}, secret, {
			subject: JSON.stringify({
				id: user.id,
				username: user.username
			}),
			expiresIn
		});

		return {
			user,
			accessToken
		};
	}
}