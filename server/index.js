const express = require("express");
const cors = require("cors");
const { client } = require("./models/bookModel");

const bookRoutes = require("./routes/bookRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());

// Routes
app.use("/books", bookRoutes);
app.use("/users", userRoutes);
app.use("/orders", orderRoutes);

// Home route
app.get("/", (req, res) => {
  res.send("<h1>Backend is running!</h1>");
});

// Start the server
(async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    app.listen(port, () => {
      console.log(`Server running on https://bookstore-mern-backend-1q16.onrender.com/`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
})();
