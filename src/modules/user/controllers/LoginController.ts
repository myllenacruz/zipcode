import { Request, Response } from "express";
import { container } from "tsyringe";
import { LoginService } from "@modules/user/services/LoginService";
import { instanceToPlain } from "class-transformer";

export class LoginController {
	public async execute(request: Request, response: Response): Promise<Response> {
		try {
			const {
				username,
				password
			} = request.body;

			const login = container.resolve(LoginService);

			const { user, accessToken } = await login.execute({ username, password });

			return response.json({
				user: {
					...instanceToPlain(user)
				},
				accessToken
			});
		} catch (error) {
			return response.status(500).json({ error: error.message });
		}
	}
}