import { ICreateZipCodeDTO } from "@modules/zipCode/dtos/ICreateZipCodeDTO";
import { IViaCep } from "@modules/zipCode/interfaces/IViaCep";
import { Exclude } from "class-transformer";

export class ZipCode {
	@Exclude()
	public zipCode: string;
	@Exclude()
	public searchAt: Date;
	public values: IViaCep;
	public source: "Cache";

	constructor({
		zipCode,
		searchAt,
		values,
		source
	}: ICreateZipCodeDTO) {
		return Object.assign(this, {
			zipCode,
			searchAt,
			values,
			source
		});
	}
}