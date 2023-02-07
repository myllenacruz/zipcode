import { container } from "tsyringe";

import "@shared/container/providers";

import { IUserRepository } from "@modules/user/repositories/IUserRepository";
import { FakeUserRepository } from "@modules/user/repositories/implementations/FakeUserRepository";

container.registerSingleton<IUserRepository>("UserRepository", FakeUserRepository);