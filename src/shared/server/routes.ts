import { Router } from "express";

import zipCodeRoutes from "@modules/zipCode/routes/zipCode.routes";
import userRoutes from "@modules/user/routes/user.routes";

const routes = Router();

routes.use("/consult", zipCodeRoutes);
routes.use("/user", userRoutes);

export { routes };