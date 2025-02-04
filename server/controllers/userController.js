const { userCollections } = require("../models/userModel");

const registerUser = async (req, res) => {
  try {
    const userData = req.body;
    const result = await userCollections.insertOne(userData);
    res.status(201).send({ message: "User registered successfully", result });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send({ error: "Failed to register user" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const result = await userCollections.find().toArray();
    res.status(200).send(result);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Failed to fetch users");
  }
};

module.exports = { registerUser, getAllUsers };
