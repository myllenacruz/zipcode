import { NextFunction, Request, Response } from "express";
import { AppError } from "@shared/errors/AppError";
import { verify } from "jsonwebtoken";
import auth from "config/auth";

interface ITokenPayload {
    iat: number;
    exp: number;
    sub: string;
}

export async function ensureAuthentication(
	request: Request,
	_response: Response,
	next: NextFunction
): Promise<void> {
	const authHeader = request.headers.authorization;

	if (!authHeader) throw new AppError("Token was not provided!", 401);

	const [, token] = authHeader.split(" ");

	try {
		const decoded = verify(token, auth.jwt.secret);

		const { sub } = decoded as ITokenPayload;

		const { id, username } = JSON.parse(sub);

		request.user = {
			id,
			username
		};
	} catch (error) {
		throw new AppError("Invalid Token!", 401);
	}

	next();
}