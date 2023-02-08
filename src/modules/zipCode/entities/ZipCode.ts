import { ICreateZipCodeDTO } from "@modules/zipCode/dtos/ICreateZipCodeDTO";
import { IViaCep } from "@modules/zipCode/interfaces/IViaCep";
import { Exclude } from "class-transformer";
import { IZipCodeSource } from "@modules/zipCode/interfaces/IZipCodeSource";

export class ZipCode {
	@Exclude()
	public zipCode: string;
	@Exclude()
	public searchAt: Date;
	public values: IViaCep;
	public source: IZipCodeSource;

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