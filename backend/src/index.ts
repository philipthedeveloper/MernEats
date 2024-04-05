import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Connected to database!"));

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

app.get("/test", (req: Request, res: Response) =>
  res.json({ message: "Hello" })
);

// listener
app.listen(7000, () => console.log("App listenig on 7000"));
