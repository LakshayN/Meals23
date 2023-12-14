const mongoose = require("mongoose");

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB Atlas");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

// Route to save a user
const mealSchema = new mongoose.Schema({
  name: String,
  type: String,
});

const Meal = mongoose.model("Meals24", mealSchema);

module.exports = Meal;
