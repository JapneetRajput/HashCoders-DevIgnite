import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const DB_OPTIONS = {
      // dbName: "cuvette",
      useNewUrlParser: true,
    };
    await mongoose.connect("mongodb+srv://japneetpixolo:jmDnDl2KkGzG31ii@memories.kuhjhws.mongodb.net/", DB_OPTIONS);
    console.log("Connected to Database");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
