// // const express = require("express");
// // const bodyParser = require("body-parser");
// // const authRoutes = require("./routes/authRoutes");
// // const trainRoutes = require("./routes/trainRoutes");
// // const bookingRoutes = require("./routes/bookingRoutes");
// // require("dotenv").config();

// // const app = express();

// // app.use(bodyParser.json());

// // app.use("/api/auth", authRoutes);
// // app.use("/api/trains", trainRoutes);
// // app.use("/api/bookings", bookingRoutes); // Ensure this route is set up

// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// const express = require("express");
// const bodyParser = require("body-parser");
// const authRoutes = require("./routes/authRoutes");
// const trainRoutes = require("./routes/trainRoutes");
// const bookingRoutes = require("./routes/bookingRoutes");
// require("dotenv").config();

// const app = express();

// app.use(bodyParser.json());

// app.use("/api/auth", authRoutes);
// app.use("/api/trains", trainRoutes);
// app.use("/api/bookings", bookingRoutes); // Ensure this route is set up

// // Define a GET route for the root URL
// app.get("/", (req, res) => {
//     res.send("Welcome to the Train Booking API!");
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const trainRoutes = require("./routes/trainRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
require("dotenv").config();

const app = express();

// Middleware
app.use(bodyParser.json()); // Parses incoming JSON requests

// Welcome Route
app.get("/", (req, res) => {
    res.send("Welcome to the Train Booking API!");
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/trains", trainRoutes);
app.use("/api/bookings", bookingRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Logs errors
    res.status(500).json({ error: "Something went wrong!" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
