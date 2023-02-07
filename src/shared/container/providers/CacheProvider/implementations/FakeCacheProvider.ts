import { ICacheProvider } from "@shared/container/providers/CacheProvider/ICacheProvider";
import { ICreateZipCodeDTO } from "@modules/zipCode/dtos/ICreateZipCodeDTO";
import { ZipCode } from "@modules/zipCode/entities/ZipCode";

export class FakeCacheProvider implements ICacheProvider {
	public zipCodes: ZipCode[] = [];

	public async get(
		zipCode: string
	): Promise<ZipCode> {
		return this.zipCodes.find(zip => zip.zipCode === zipCode);
	}

	public async add(data: ICreateZipCodeDTO): Promise<ZipCode> {
		const zipCode: ZipCode = new ZipCode(data);

		Object.assign(zipCode, { ...data });

		this.zipCodes.push(zipCode);

		return zipCode;
	}

	public async delete(zipCode: string): Promise<void> {
		const index = this.zipCodes.findIndex(zip => zip.zipCode === zipCode);

		this.zipCodes.splice(index, 1);
	}
}