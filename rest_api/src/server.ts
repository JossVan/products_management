import express from "express";
import colors from "colors";
import router from "./router";
import db from "./config/db";

async function connectDB() {
  try {
    await db.authenticate();
    db.sync();
    console.log(colors.bgGreen.bold("Database connected"));
  } catch (error) {
    console.log(colors.bgRed.bold("Error connecting to database"));
  }
}

connectDB();
const server = express();

server.use("/api/products", router);

export default server;
