import express from "express";
import { config } from "dotenv";

// app
export const app = express();

// config
config({ path: "./config/.env" });
