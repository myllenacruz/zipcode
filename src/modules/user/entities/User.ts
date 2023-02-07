import { ICreateUserDTO } from "@modules/user/dtos/ICreateUserDTO";
import { Exclude } from "class-transformer";

export class User {
	public readonly id: string;
	public username: string;
	@Exclude()
	public password: string;
	public email: string;

	constructor({
		username,
		password,
		email
	}: ICreateUserDTO) {
		return Object.assign(this, {
			username,
			password,
			email
		});
	}
}