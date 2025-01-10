import express from "express";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());

app.use(cookieParser());

configDotenv();

mongoose
  .connect(process.env.MONGO_URL, {         
  })
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// api routes
//app.use("/api", require("./routes/user.route"));
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// Middleware check error
app.use((req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({ 
    success: false,
    message,
    statusCode 
  })
});

