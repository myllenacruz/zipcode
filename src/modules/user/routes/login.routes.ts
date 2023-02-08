import { Router } from "express";
import { LoginController } from "@modules/user/controllers/LoginController";
import { celebrate, Joi, Segments } from "celebrate";

const routes = Router();
const login = new LoginController();

routes.post("/",
	celebrate({
		[Segments.BODY]: {
			username: Joi.string().required(),
			password: Joi.string().required()
		}
	}),
	login.execute
);

export default routes;