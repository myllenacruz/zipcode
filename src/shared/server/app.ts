import "reflect-metadata";
import "dotenv/config";
import "@shared/container";
import "express-async-errors";

import express, { NextFunction, Request, Response } from "express";
import { routes } from "@shared/server/routes";
import { Server as HttpServer } from "http";
import cors from "cors";
import { errors } from "celebrate";
import { AppError } from "@shared/errors/AppError";

const app = express();
const server = new HttpServer(app);

app.use(express.json());
app.use(cors());

app.use(routes);

app.use(errors());

app.use((
	error: Error,
	_req: Request,
	res: Response,
	_next: NextFunction
) => {
	if (error instanceof AppError) {
		return res.status(error.statusCode).json({
			message: error.message
		});
	}

	console.error(error);
	return res.status(500).json({
		message: "Internal Server Error"
	});
});

export { server };