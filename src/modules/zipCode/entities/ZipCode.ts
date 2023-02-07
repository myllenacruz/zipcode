import { ICreateZipCodeDTO } from "@modules/zipCode/dtos/ICreateZipCodeDTO";
import { IViaCep } from "@modules/zipCode/interfaces/IViaCep";

export class ZipCode {
	public zipCode: string;
	public searchAt: Date;
	public values: IViaCep;

	constructor({
		zipCode,
		searchAt,
		values
	}: ICreateZipCodeDTO) {
		return Object.assign(this, {
			zipCode,
			searchAt,
			values
		});
	}
}