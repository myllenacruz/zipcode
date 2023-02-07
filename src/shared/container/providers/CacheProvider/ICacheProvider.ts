import { ZipCode } from "@modules/zipCode/entities/ZipCode";
import { ICreateZipCodeDTO } from "@modules/zipCode/dtos/ICreateZipCodeDTO";

export interface ICacheProvider {
    get(zipCode: string): Promise<ZipCode>;
    add(data: ICreateZipCodeDTO): Promise<ZipCode>;
    delete(zipCode: string): Promise<void>;
}