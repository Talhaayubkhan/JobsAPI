const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose
    .connect(url)
    .then(() => {
      console.log("MongoDB connected Successfully!");
    })
    .catch((err) => {
      console.log("MongoDB connection Failed: " + err.message);
    });
};

module.exports = connectDB;
