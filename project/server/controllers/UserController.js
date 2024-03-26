// controllers/UserController.js
const User = require("../models/User");

exports.signup = async (req, res) => {
  try {
    // Extract user data from request body
    const { fullName, email, password, role, company, mobile, location } =
      req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Create a new user instance
    const newUser = new User({
      fullName,
      email,
      password,
      role,
      company,
      mobile,
      location,
    });

    // Save the user to the database
    await newUser.save();

    // Return success response
    res.status(201).json({ message: "Signup successful" });
  } catch (error) {
    console.error("Signup failed:", error);
    res.status(500).json({ error: "Signup failed" });
  }
};
