import { IViaCep } from "@modules/zipCode/interfaces/IViaCep";

export interface ICreateZipCodeDTO {
    zipCode: string;
    searchAt: Date;
    values: IViaCep;
}