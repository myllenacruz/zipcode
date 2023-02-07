import { container } from "tsyringe";

import { ICacheProvider } from "@shared/container/providers/CacheProvider/ICacheProvider";
import { FakeCacheProvider } from "@shared/container/providers/CacheProvider/implementations/FakeCacheProvider";

container.registerSingleton<ICacheProvider>("CacheProvider", FakeCacheProvider);