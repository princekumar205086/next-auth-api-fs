import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect("mongodb://localhost:27017/notes-db", {});
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB connected");
    });
    connection.on("error", (err) => {
      console.log(
        "mongodb connection error occur check if mongodb is running" + err
      );
      process.exit(1);
    });
  } catch (error) {
    console.log(
      "mongodb connection error occur check if mongodb is running" + error
    );
  }
}
