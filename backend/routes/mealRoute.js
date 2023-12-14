const express = require("express");
const Meal = require("../models/meal");

const router = express.Router();

router.post("/addMeal", async (req, res) => {
  try {
    const newMeal = new Meal({
      name: "Rice",
      type: "breakfast",
    });

    const savedMeal = await newMeal.save();

    res.status(201).json(savedMeal);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
