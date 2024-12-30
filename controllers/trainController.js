const Train = require("../models/Train");
const SeatAvailability = require("../models/SeatAvailability");

const trainController = {
  addTrain: (req, res) => {
    const { train_name, source, destination, total_seats } = req.body;
    Train.create(train_name, source, destination, total_seats, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: "Train added successfully" });
    });
  },
//   getSeatAvailability: (req, res) => {
//     const { source, destination } = req.query; // Use req.query for GET requests
//     Train.findByRoute(source, destination, (err, results) => {
//       if (err) return res.status(500).json({ error: err.message });
//       res.json(results);
//     });
//   },
// 
getSeatAvailability: (req, res) => {
  const { train_id } = req.query;

  if (!train_id) {
      return res.status(400).json({ error: "Train ID is required" });
  }

  console.log("Received train_id:", train_id); // Debugging line

  SeatAvailability.getByTrainId(train_id, (err, results) => {
      if (err) {
          console.error("Error fetching seat availability:", err);
          return res.status(500).json({ error: "Failed to fetch seat availability" });
      }

      console.log("Seat availability results:", results); // Debugging line
      res.json(results);
  });
},
};
module.exports = trainController;
