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
import { searchYT, displayYTResults, aiRank } from "./helper/yt.js";
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

app.post("/get-video-resources", async (req, res) => {
  const query = req.body.query;
  const duration = req.body.duration;
  const depth = req.body.depth;
  try {
    // Search YouTube for videos related to "big data analytics"
    const response = await searchYT(query, 5, duration, depth);

    console.log(response);
    console.log("128");
    // Display YouTube search results and extract transcripts
    const result = await displayYTResults(response);
    console.log(result);

    // Rank the transcripts based on duration and depth
    const [id1, id2] = await aiRank();
    console.log(id1, " ", id2);

    // console.log("Res:", res);
    return res.send("Success");
  } catch (error) {
    console.error("Error:", error);
  }
});

app.post("/lecture-summarize", async (req, res) => {
  const text = req.body.text;

  const prompt = `Using the following transcribed lecture text below, please create a concise summary in bullet points. Focus on capturing the main points, arguments, and any significant examples presented.
  
  ${text}
  `;

  const result = await model.generateContent(prompt);
  console.log(result.response.text());
});

app.post("/generate-notes", async (req, res) => {
  const text = req.body.text;

  const prompt = `
  Input:
  
  A string in the format which may contain multiple entries "subject{Module, Intensity}" For eg : "math{Unit III: Calculus:Low}" 
  Study Duration (Total number of hours available for studying the entire module) : 10
  
  Output:
  
  For each subtopic within the module, generate concise and informative study notes. (Subtopics are separated by commas)
  Tailor the notes to the specified intensity level (low, medium, high) by:
  Low: Focus on key concepts and definitions.
  Medium: Provide additional details, examples, and explanations.
  High: Include in-depth analysis, critical thinking questions.
  Ensure the notes are well-organized, easy to understand, and relevant to the specific subtopic.
  
  Keep the content length above 15000 tokens for Low intensity, above 25000 tokens for Medium intensity and above 50000 tokens for High intensity 
  
  I want you to follow the above guidelines and generate the notes for the below data. 
  The output should not contain anything other than the study notes STRICTLY
  
  Example input : 
  
  Module Name: Solutions
  
  Module Content: Types of solutions, expression of concentration of solutions of solids in liquids, solubility of gases in liquids, solid solutions
  
  Intensity: Medium
  
  Study Duration: 10 hours
  
  Ideal Example output : 
  
  Subtopic 1: Types of Solutions (1 hour)
  
  Concepts: Solution, Solute, Solvent, Homogeneous Mixture, Heterogeneous Mixture
  
  Definitions:
  
  Solution: A homogeneous mixture of two or more substances. The components are evenly distributed and cannot be distinguished visually. (Think of sugar dissolving completely in water, forming a clear liquid.)
  Solute: The substance dissolved in a solution, typically present in a smaller amount. (In saltwater, salt is the solute.)
  Solvent: The substance that dissolves the solute, usually present in a larger amount. (In saltwater, water is the solvent.)
  Examples:
  
  Saltwater: Salt (solute) dissolves in water (solvent).
  Sugar in coffee: Sugar (solute) dissolves in coffee (solvent).
  Distinguishing Solutions from Mixtures:
  
  Solutions: Homogeneous, particles are invisible to the naked eye, stable over time.
  Heterogeneous mixtures: Non-uniform, particles may be visible, can separate over time (e.g., sand in water).
  
  Subtopic 2: Concentration of Solutions (1 hour)
  
  Concepts: Concentration, Units of Concentration (mass percentage, molarity, molality)
  
  Understanding Concentration:
  
  Concentration refers to the amount of solute dissolved in a specific amount of solvent. Different units express concentration in various ways:
  
  Mass percentage (%): The percentage of solute by mass relative to the total mass of the solution. (e.g., 10% salt solution means 10 g of salt per 100 g of solution).
  Molarity (M): The number of moles of solute per liter of solution. (e.g., 1 M sugar solution means 1 mole of sugar per liter of solution).
  Molality (m): The number of moles of solute per kilogram of solvent. (e.g., 1 m salt solution means 1 mole of salt per kilogram of water).
  Choosing the Right Unit:
  
  The appropriate unit depends on the context and the information you need. Mass percentage is often used for solid or highly concentrated solutions, while molarity and molality are common for liquid solutions, especially in chemical reactions.
  
  Subtopic 3: Solubility of Gases in Liquids (1 hour)
  
  Concepts: Solubility, Henry's Law, Factors Affecting Gas Solubility
  
  Solubility:
  
  The ability of a gas to dissolve in a liquid. Different gases have varying degrees of solubility, influenced by several factors.
  
  Henry's Law:
  
  States that at a constant temperature, the amount of a gas dissolved in a liquid is directly proportional to the partial pressure of the gas above the liquid. (Higher pressure leads to more gas dissolving.)
  
  Factors Affecting Solubility:
  
  Temperature: Generally, solubility decreases with increasing temperature for most gases. As the temperature rises, the kinetic energy of the gas molecules increases, making them more likely to escape the liquid.
  Pressure: Solubility increases with increasing pressure. Applying pressure forces more gas molecules into the liquid.
  Intermolecular Interactions: The strength of interactions between gas and liquid molecules also plays a role. Stronger attractions between gas and solvent molecules lead to higher solubility.
  
  Subtopic 4: Solid Solutions (1.5 hours)
  
  Concepts: Solid Solution, Types of Solid Solutions (substitutional, interstitial)
  
  Solid Solutions:
  
  Formed when atoms or molecules of one substance (solute) are incorporated into the crystal structure of another substance (solvent). This creates a homogeneous solid mixture.
  
  Types of Solid Solutions:
  
  Substitutional Solid Solutions: Solute atoms replace solvent atoms in the crystal lattice. (e.g., Brass: Zinc atoms substitute for copper atoms in the copper crystal lattice.)
  Interstitial Solid Solutions: Solute atoms occupy empty spaces between solvent atoms in the crystal lattice. (e.g., Steel: Small carbon atoms fit between larger iron atoms in the iron crystal lattice.)
  Understanding Solid Solutions:
  
  Solid solutions are crucial in many materials, influencing their properties like strength, hardness, and electrical conductivity.
  
  ${text}
  `;

  const result = await model.generateContent(prompt);
  console.log(result.response.text());
  return res.send(result.response.text());
});

app.post("/generate-quiz", async (req, res) => {
  const text = req.body.text;

  const prompt = `Give me 3 mcq questions for each unit based on the text provided that will cover the entire content. Again make sure there are no additional characters in the response except for the MCQ questions and their answers
  
  ${text}
  `;

  const result = await model.generateContent(prompt);
  console.log(result.response.text());
  return res.send(result.response.text());
});

app.post("/generate-schedule", async (req, res) => {
  const schedule = req.body.schedule;
  const pref = req.body.pref;
  const method = req.body.method;
  const modules = req.body.modules;
  const duration = req.body.duration;

  const prompt = `I want to generate a custom study schedule for a user studying in the CBSE board in 12th standard. The user will have a study time between 9:00am to 7:00pm. The slots in the schedules are 1 hr slots. The content that he wants to cover will be provided in the format subject-name{Module number : Intensity, Module Number: Intensity} for example Physics{Module1:Low,Module2:High},Chemistry{Module3:Medium}. Intensity of module decides time to be allotted for the module where Low = 2hrs Medium= 3 hrs and High=5hrs. You have to generate schedule for the user occypying time slots that are usually convinient for studying. The target modules are ${modules}. The user prefers studying during the ${pref} and wants to complete the targeted modules within ${duration}. The user likes ${method} for studying.Ensure that you dont occupy Blocked slots. Generate the schedule keeping all of the above in mind and give the output in the format 'Day1{9:00-Subject-Modulenumber, 10:00am-subject-modulenumber , ................ 5:00pm - subject-modulenumber,6:00pm - Physics-3,7:00pm - Physics-3},Day2{9:00-subject-modulenumber, 10:00am-subject-modulenumber, 11:00am - subject-modulenumber, ................ 5:00pm -subject-modulenumber,6:00pm - subject-modulenumber,7:00pm - subject-modulenumber}.Please note The following time slots should have value as blocked ${schedule} example - day1{9:00-blocked}.The slots that are not being occupied should have value 'free' example day1{10:00-free} Deal with edge cases by increasing the duration if required. Ensure that there are no extra characters in the response except for the output in the required format. Please note give plan for onlyyy the modules with intensity provided!!! and please ensure to assign the correct number of slots to each module!! High Intesity - 5 slots, Medium Intensity- 3 slots and Low intensity - 2 slots. Make sure to evenly distribute the time slots`;
  console.log(prompt);

  const result = await model.generateContent(prompt);
  console.log(result.response.text());
  return res.json(result.response.text());
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Server listening on port " + PORT + "...");
});
