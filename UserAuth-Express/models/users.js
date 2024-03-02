import mongoose from "mongoose";
import jwt from "jsonwebtoken";
const JWT_SECRET = "asdadsfcfhasbxchasc";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

userSchema.methods.generateToken = async function () {
  try {
    let userToken = jwt.sign({ _id: this._id }, JWT_SECRET);
    this.tokens = this.tokens.concat({ token: userToken });
    await this.save();
    return userToken;
  } catch (err) {
    return res.json({ status: "failed", message: "Server error" });
  }
};

export default mongoose.model("User", userSchema);
