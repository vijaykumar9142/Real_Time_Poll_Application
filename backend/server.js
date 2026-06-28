import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import pollRoutes from "./routes/pollRoutes.js";

import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use(
  "/api/polls",
  pollRoutes
);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    console.log("MongoDB Connected")
  )
  .catch((err) =>
    console.log(err)
  );

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(
    `Server Running on ${PORT}`
  )
);