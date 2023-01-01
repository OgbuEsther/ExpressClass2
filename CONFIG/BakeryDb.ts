import mongoose from "mongoose";

const URI = "mongodb://0.0.0.0:27017/BAKERYAPI";

mongoose.connect(URI);
mongoose.connection
  .on("open", () => {
    console.log(`DATABASE IS CONNECTED`);
  })
  .once("error", () => {
    console.log(`failed to connect to the database`);
  });
