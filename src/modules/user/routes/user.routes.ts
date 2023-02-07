import { Router } from "express";
import { UserController } from "@modules/user/controllers/UserController";
import { celebrate, Segments, Joi } from "celebrate";

const routes = Router();
const userController = new UserController();

routes.post("/",
	celebrate({
		[Segments.BODY]: {
			username: Joi.string().required().min(3),
			email: Joi.string().email().required(),
			password: Joi.string().required()
		}
	}),
	userController.create
);

export default routes;