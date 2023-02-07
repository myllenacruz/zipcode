import "reflect-metadata";
import "dotenv/config";
import "@shared/container";

import express from "express";
import { Server as HttpServer } from "http";
import cors from "cors";

const app = express();
const server = new HttpServer(app);

app.use(express.json());
app.use(cors());

export { server };