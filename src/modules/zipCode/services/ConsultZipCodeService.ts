import { ICacheProvider } from "@shared/container/providers/CacheProvider/ICacheProvider";
import axios from "axios";
import { inject, injectable } from "tsyringe";
import { IViaCep } from "@modules/zipCode/interfaces/IViaCep";
import { AppError } from "@shared/errors/AppError";

interface IResponse {
	values: IViaCep;
	source: "Cache" | "ViaCEP";
}

@injectable()
export class ConsultZipCodeService {
	constructor(
		@inject("CacheProvider")
        private cacheProvider: ICacheProvider
	) {}

	public async execute(zipCode: string): Promise<IResponse> {
		if (this.hasLetters(zipCode)) throw new AppError("Letters is not allowed!");

		const cachedZipCode = await this.cacheProvider.get(zipCode);

		if (cachedZipCode) {
			if (this.isDateOnInterval(cachedZipCode.searchAt, 300000))
				return cachedZipCode;

			await this.cacheProvider.delete(zipCode);
		}

		const viaCep = await this.viaCepRequest(zipCode);

		await this.cacheProvider.add({
			zipCode,
			searchAt: new Date(),
			values: viaCep.values
		});

		return viaCep;
	}

	private isDateOnInterval(
		searchDate: Date,
		timeInMs: number
	): boolean {
		const dateInMs = Math.abs(searchDate.getTime() - new Date().getTime());

		if (dateInMs <= timeInMs) return true;
	}

	private hasLetters(zipCode: string): boolean {
		return /[a-z]/i.test(zipCode);
	}

	private async viaCepRequest(zipCode: string): Promise<IResponse> {
		const request = await axios.get(`https://viacep.com.br/ws/${zipCode}/json/`);

		if (request.data.erro) throw new AppError("Invalid zip code!");

		return {
			values: request.data,
			source: "ViaCEP"
		};
	}
}