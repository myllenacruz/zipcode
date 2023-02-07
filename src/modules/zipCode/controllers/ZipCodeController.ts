import { Request, Response } from "express";
import { ConsultZipCodeService } from "@modules/zipCode/services/ConsultZipCodeService";
import { container } from "tsyringe";

export class ZipCodeController {
	public async consult(request: Request, response: Response): Promise<Response> {
		const { zipCode } = request.body;

		try {
			const consult = container.resolve(ConsultZipCodeService);

			const zipCodeConsult = await consult.execute(zipCode);

			return response.status(200).json(zipCodeConsult);
		} catch (error) {
			return response.status(500).json({ error: error.message });
		}
	}
}