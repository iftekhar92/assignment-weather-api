import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { weatherRoute } from "./routers/weather";

dotenv.config();

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route
app.use("/", weatherRoute());

// Default
app.get("/", (_req: any, res: any) => {
  return res.json({ message: "Welcome!" });
});

app.listen(process.env.PORT, () => console.log("Application started"));
