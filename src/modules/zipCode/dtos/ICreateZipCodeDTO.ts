import { IViaCep } from "@modules/zipCode/interfaces/IViaCep";
import { IZipCodeSource } from "@modules/zipCode/interfaces/IZipCodeSource";

export interface ICreateZipCodeDTO {
    zipCode: string;
    searchAt: Date;
    values: IViaCep;
    source?: IZipCodeSource;
}