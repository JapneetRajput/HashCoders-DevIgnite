import jwt from "jsonwebtoken";
import User from "../models/users.js";

const auth = async (req, res, next) => {
  const JWT_SECRET = "asdadsfcfhasbxchasc";
  try {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, JWT_SECRET);
    const user = await User.findOne({ _id: decodedToken._id });
    if (!user) {
      throw new Error("User not found");
    }
    req.token = token;
    req.user = user;
    req.userid = user._id;
    next();
  } catch (error) {
    return res.json({ status: "failed", message: "Unauthorized" });
  }
};

export default auth;
