import { IUserRepository } from "@modules/user/repositories/IUserRepository";
import { User } from "@modules/user/entities/User";
import { ICreateUserDTO } from "@modules/user/dtos/ICreateUserDTO";
import { v4 as uuidv4 } from "uuid";

export class FakeUserRepository implements IUserRepository {
	public users: User[] = [];

	public async create(data: ICreateUserDTO): Promise<User> {
		const user: User = new User(data);

		Object.assign(user, {
			id: uuidv4(),
			...data
		});

		this.users.push(user);

		return user;
	}

	public async findByEmail(email: string): Promise<User> {
		return this.users.find(user => user.email === email);
	}

	public async findByUsername(username: string): Promise<User> {
		return this.users.find(
			user => user.username.toLocaleLowerCase() === username.toLocaleLowerCase()
		);
	}
}