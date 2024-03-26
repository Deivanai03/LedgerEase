// server.js

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 3002;

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/ledger-ease", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Middleware
app.use(bodyParser.json());

// API routes
app.use("/api", authRoutes); // Assuming auth routes are under '/api' endpoint

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
