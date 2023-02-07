import { IHashProvider } from "@shared/container/providers/HashProvider/IHashProvider";
import { hash, compare } from "bcryptjs";

export class BCryptHashProvider implements IHashProvider {
	public async generate(payload: string): Promise<string> {
		return hash(payload, 8);
	}

	public async compare(
		payload: string,
		hashed: string
	): Promise<boolean> {
		return compare(payload, hashed);
	}
}