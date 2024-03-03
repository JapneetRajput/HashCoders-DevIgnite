import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
const app = express();
import mongoose from "mongoose";
// const morgan = require("morgan");
// const multer = require("multer");
// const upload = multer({ dest: "uploads/" });
// const Axios = require("axios");
import bodyParser from "body-parser";
import connectDB from "./config/database.js";
import { searchYT,displayYTResults,aiRank } from "./helper/yt.js";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyAhlaWdtv__3QhH8bL-kD4dEN0Mrrvn1Ts");

const model = genAI.getGenerativeModel({ model: "gemini-pro" });

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

app.post("/lecture-summarize", async (req, res) => {
  const text = req.body.text;

  const prompt = `Using the following transcribed lecture text below, please create a concise summary in bullet points. Focus on capturing the main points, arguments, and any significant examples presented.
  
  ${text}
  `;

  const result = await model.generateContent(prompt);
  console.log(result.response.text());
});

app.post("/generate-schedule",async(req,res) => {
  const pref = req.body.pref
  const method = req.body.method
  const modules = req.body.modules
  const duration = req.body.duration

  const schedule = "day1{9:00-blocked}"

 const prompt = `I want to generate a custom study schedule for a user studying in the CBSE board in 12th standard. The user will have a study time between 9:00am to 7:00pm. The slots in the schedules are 1 hr slots. The content that he wants to cover will be provided in the format subject-name{Module number : Intensity, Module Number: Intensity} for example Physics{Module1:Low,Module2:High},Chemistry{Module3:Medium}. Intensity of module decides time to be allotted for the module where Low = 2hrs Medium= 3 hrs and High=5hrs. You have to generate schedule for the user occypying time slots that are usually convinient for studying. The target modules are ${modules}. The user prefers studying during the ${pref} and wants to complete the targeted modules within ${duration}. The user likes ${method} for studying.Ensure that you dont occupy Blocked slots. Generate the schedule keeping all of the above in mind and give the output in the format 'Day1{9:00-Subject-Modulenumber, 10:00am-subject-modulenumber , ................ 5:00pm - subject-modulenumber,6:00pm - Physics-3,7:00pm - Physics-3},Day2{9:00-subject-modulenumber, 10:00am-subject-modulenumber, 11:00am - subject-modulenumber, ................ 5:00pm -subject-modulenumber,6:00pm - subject-modulenumber,7:00pm - subject-modulenumber}.Please note The following time slots should have value as blocked ${schedule} example - day1{9:00-blocked}.The slots that are not being occupied should have value 'free' example day1{10:00-free} Deal with edge cases by increasing the duration if required. Ensure that there are no extra characters in the response except for the output in the required format. Please note give plan for onlyyy the modules with intensity provided!!! and please ensure to assign the correct number of slots to each module!! High Intesity - 5 slots, Medium Intensity- 3 slots and Low intensity - 2 slots. Make sure to evenly distribute the time slots`;
  console.log(prompt)
;
  console.log(prompt)

  const result = await model.generateContent(prompt);
  console.log(result.response.text());
  return res.send(result.response.text())

})

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Server listening on port " + PORT + "...");
});
