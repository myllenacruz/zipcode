import { Router } from "express";
import { ZipCodeController } from "@modules/zipCode/controllers/ZipCodeController";
import { celebrate, Segments, Joi } from "celebrate";

const routes = Router();
const zipCodeController = new ZipCodeController();

routes.post("/",
	celebrate({
		[Segments.BODY]: {
			zipCode: Joi.string().required().min(8).max(8)
		}
	}),
	zipCodeController.consult
);

export default routes;