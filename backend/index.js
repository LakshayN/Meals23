const express = require("express");
const mongoose = require("mongoose");
const mealRoutes = require("./routes/mealRoute");

const app = express();
const port = 4000;

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/meals24");

// Use userRoutes for handling user-related routes
app.use("/api", mealRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
