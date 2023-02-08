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
import basicAtuh from "express-basic-auth";
import swaggerUi from "swagger-ui-express";
import { docs } from "../../docs";

const app = express();
const server = new HttpServer(app);

app.use(express.json());
app.use(cors());

app.use("/api", routes);

app.use(errors());

app.use("/docs", basicAtuh({
	challenge: true,
	users: { dev: "@ZipCode2023#" }
}), swaggerUi.serve, swaggerUi.setup(docs), express.static("src/swagger.json"));

app.use((
	error: Error,
	_request: Request,
	response: Response,
	_next: NextFunction
) => {
	if (error instanceof AppError) {
		return response.status(error.statusCode).json({
			message: error.message
		});
	}

	console.error(error);
	return response.status(500).json({
		message: "Internal Server Error"
	});
});

export { server };