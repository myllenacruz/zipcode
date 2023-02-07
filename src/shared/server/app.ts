import "reflect-metadata";
import "dotenv/config";
import "@shared/container";

import express from "express";
import { routes } from "@shared/server/routes";
import { Server as HttpServer } from "http";
import cors from "cors";
import { errors } from "celebrate";

const app = express();
const server = new HttpServer(app);

app.use(express.json());
app.use(cors());

app.use(routes);

app.use(errors());

export { server };