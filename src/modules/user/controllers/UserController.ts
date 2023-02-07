import { container } from "tsyringe";
import { CreateUserService } from "@modules/user/services/CreateUserService";
import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";

export class UserController {
	public async create(request: Request, response: Response): Promise<Response> {
		try {
			const {
				username,
				email,
				password
			} = request.body;

			const newUser = container.resolve(CreateUserService);

			const user = await newUser.execute({
				username,
				email,
				password
			});

			return response.status(201).json(instanceToPlain(user));
		} catch (error) {
			return response.status(500).json({ error: error.message });
		}
	}
}