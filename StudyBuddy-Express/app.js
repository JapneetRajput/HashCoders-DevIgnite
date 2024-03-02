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
import { searchYT,displayYTResults,aiRank } from "./helper/yt.js";

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

app.post("/get-video-resources",async(req,res)=>{
  const query = req.body.query
  const duration = req.body.duration
  const depth = req.body.depth
  try {
    // Search YouTube for videos related to "big data analytics"
    const response = await searchYT(query,5,duration,depth);

    console.log(response);
    console.log("128");
    // Display YouTube search results and extract transcripts
    const result = await displayYTResults(response);
    console.log(result)

    // Rank the transcripts based on duration and depth
    const [id1,id2] = await aiRank();
    console.log(id1," ",id2)

    // console.log("Res:", res);
    return res.send("Success")
  } catch (error) {
    console.error('Error:', error);
  }
})

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Server listening on port " + PORT + "...");
});
