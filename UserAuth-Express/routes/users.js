import express from "express";
const router = express.Router();

// Import the controller for handling requests
import {
  deleteUser,
  getUser,
  getUsers,
  loginUser,
  profile,
  registerUser,
  updateUser,
} from "../controllers/users.js";
import auth from "../config/middleware.js";

// Define the routes for the users resource

// Getting all
router.get("/", getUsers);

// Creating one
router.post("/register", registerUser);

// Log in
router.post("/login", loginUser);

// Profile
router.get("/profile", auth, profile);

// Getting one
router.get("/:id", getUser);

// Updating one
router.put("/:id", updateUser);

// Deleting one
router.delete("/:id", deleteUser);

export default router;
