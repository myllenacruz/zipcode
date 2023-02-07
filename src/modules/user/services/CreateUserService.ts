import { IUserRepository } from "@modules/user/repositories/IUserRepository";
import { User } from "@modules/user/entities/User";
import { inject, injectable } from "tsyringe";
import { AppError } from "@shared/errors/AppError";
import { IHashProvider } from "@shared/container/providers/HashProvider/IHashProvider";

interface IRequest {
    username: string;
    email: string;
    password: string;
}

@injectable()
export class CreateUserService {
	constructor(
		@inject("UserRepository")
        private userRepository: IUserRepository,

		@inject("HashProvider")
		private hashProvider: IHashProvider
	) {}

	public async execute(
		{
			username,
			email,
			password
		}: IRequest
	): Promise<User> {
		if (await this.userRepository.findByEmail(email))
			throw new AppError("Email already exists!", 409);

		if (await this.userRepository.findByUsername(username))
			throw new AppError("Username already exists!", 409);

		const user = await this.userRepository.create({
			username,
			email,
			password: await this.hashProvider.generate(password)
		});

		return user;
	}
}