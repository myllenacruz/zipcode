import { Router } from "express";

import zipCodeRoutes from "@modules/zipCode/routes/zipCode.routes";

const routes = Router();

routes.use("/consult", zipCodeRoutes);

export { routes };