const connection = require("../config/db");

const SeatAvailability = {
  // getByTrainId: (train_id, callback) => {
  //   const query = "SELECT * FROM seat_availability WHERE train_id = ?";
  //   connection.query(query, [train_id], callback);
  // },
  // const connection = require("../config/db");

    getByTrainId: (train_id, callback) => {
        const query = "SELECT * FROM seat_availability WHERE train_id = ?";
        connection.query(query, [train_id], (err, results) => {
            if (err) {
                console.error("Error executing query:", err);
                callback(err, null);
                return;
            }
            console.log("Query results:", results); // Debugging line
            callback(null, results);
        });
    },


  updateAvailableSeats: (train_id, newAvailableSeats, callback) => {
    const query =
      "UPDATE seat_availability SET available_seats = ? WHERE train_id = ?";
    connection.query(query, [newAvailableSeats, train_id], callback);
  },

  createBooking: (train_id, seats_to_book, callback) => {
    const query =
      "INSERT INTO bookings (train_id, seats_booked) VALUES (?, ?)";
    connection.query(query, [train_id, seats_to_book], callback);
  },
};

module.exports = SeatAvailability;