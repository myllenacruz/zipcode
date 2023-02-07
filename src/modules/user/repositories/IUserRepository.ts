import { ICreateUserDTO } from "@modules/user/dtos/ICreateUserDTO";
import { User } from "@modules/user/entities/User";

export interface IUserRepository {
    create(data: ICreateUserDTO): Promise<User>;
    findByEmail(email: string): Promise<User | undefined>;
    findByUsername(username: string): Promise<User | undefined>;
}