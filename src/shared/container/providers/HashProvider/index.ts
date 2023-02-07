import { container } from "tsyringe";

import { IHashProvider } from "@shared/container/providers/HashProvider/IHashProvider";
import { BCryptHashProvider } from "@shared/container/providers/HashProvider/implementations/BCryptHashProvider";

container.registerSingleton<IHashProvider>("HashProvider", BCryptHashProvider);