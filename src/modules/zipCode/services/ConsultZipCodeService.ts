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
		if (isNaN(parseInt(zipCode))) throw new AppError("Invalid zip code!");

		const cachedZipCode = await this.cacheProvider.get(zipCode);

		if (cachedZipCode) {
			if (this.isDateOnInterval(cachedZipCode.searchAt)) {
			    return {
					values: cachedZipCode.values,
					source: "Cache"
				};
			}

			await this.cacheProvider.delete(zipCode);
		}

		const viaCepResponse = await axios.get(`https://viacep.com.br/ws/${zipCode}/json/`);

		if (viaCepResponse.data.erro) throw new AppError(viaCepResponse.data.erro);

		const values = viaCepResponse.data;

		await this.cacheProvider.add({
			zipCode,
			searchAt: new Date(),
			values
		});

		return {
			values,
			source: "ViaCEP"
		};
	}

	private isDateOnInterval(searchDate: Date): boolean {
		const fiveMinInMs: number = 300000;
		const dateInMs = Math.abs(searchDate.getTime() - new Date().getTime());

		if (dateInMs <= fiveMinInMs) return true;
	}
}