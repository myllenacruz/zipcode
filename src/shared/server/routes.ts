import { Router } from "express";

import zipCodeRoutes from "@modules/zipCode/routes/zipCode.routes";
import userRoutes from "@modules/user/routes/user.routes";
import loginRoutes from "@modules/user/routes/login.routes";

const routes = Router();

routes.use("/consult", zipCodeRoutes);

routes.use("/user", userRoutes);

routes.use("/login", loginRoutes);

export { routes };