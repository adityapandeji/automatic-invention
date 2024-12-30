const express = require("express");
const router = express.Router();
const trainController = require("../controllers/trainController");
const adminMiddleware = require("../middlewares/adminMiddleware");

router.post(
  "/add-train",
  adminMiddleware.protectAdmin,
  trainController.addTrain
);
router.get("/availability", trainController.getSeatAvailability);

router.get("/", (req, res) => {
  console.log("GET /api/trains route called"); // Debugging line
  Train.getAll((err, results) => {
      if (err) {
          console.error("Error fetching trains:", err);
          return res.status(500).json({ error: "Failed to fetch trains" });
      }
      console.log("Trains fetched:", results); // Debugging line
      res.json(results);
  });
});

module.exports = router;
