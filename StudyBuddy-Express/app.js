import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
const app = express();
import mongoose from "mongoose";
import bodyParser from "body-parser";
// const morgan = require("morgan");
// const multer = require("multer");
// const upload = multer({ dest: "uploads/" });
// const Axios = require("axios");
import connectDB from "./config/database.js";

// Connect mongoose server
connectDB();

app.use(cors());
app.use(express.json());
// app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/test", (req, res) => {
  return res.json(`Hello! Testing the API`);
});

// Import the users route file
import usersRoutes from "./routes/users.js";

// Mount the users routes at the /users path
app.use("/api/users", usersRoutes);

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Server listening on port " + PORT + "...");
});
