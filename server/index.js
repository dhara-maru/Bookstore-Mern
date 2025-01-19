const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://rekhta-mern:rekhtamerndhara@cluster0.s3zyd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();

    const bookCollections = client.db("BookInventory").collection("books");
    const userCollections = client.db("BookInventory").collection("users");
    const ordersCollection = client.db("BookInventory").collection("usersOrders");

    //////////////////////////// CRUD FOR BOOKS AND PRODUCTS //////////////////////////////////

    // Insert a book using POST method
    app.post("/upload-book", async(req, res) => {
      const data = req.body;
      const result = await bookCollections.insertOne(data);
      res.send(result);
    });

    // Insert a merchandise product
    app.post("/upload-product", async (req, res) => {
      try {
        const productData = req.body;
        productData.category = "merchandise"; 
        const result = await bookCollections.insertOne(productData);
        res.status(201).json({ message: "Product uploaded successfully", result });
      } catch (error) {
        console.error("Error uploading product:", error);
        res.status(500).json({ error: "Failed to upload product" });
      }
    });

    // Get single book
    app.get("/book/:id", async(req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollections.findOne(filter);
      res.send(result);
    });

    // Update a book
    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;
      if (!ObjectId.isValid(id)) {
        return res.status(400).send({ error: "Invalid book ID format" });
      }

      const updateBookData = req.body;
      if (!updateBookData || Object.keys(updateBookData).length === 0) {
        return res.status(400).send({ error: "No data provided for update" });
      }

      const filter = { _id: new ObjectId(id) };
      const options = { upsert: false };
      const updateDoc = {
        $set: { ...updateBookData },
      };

      try {
        const result = await bookCollections.updateOne(filter, updateDoc, options);

        if (result.matchedCount === 0) {
          return res.status(404).send({ error: "Book not found" });
        }
        res.send({ message: "Book updated successfully", result });
      } catch (error) {
        console.error("Error updating book:", error);
        res.status(500).send({ error: "Failed to update the book" });
      }
    });

    // Delete a book
    app.delete("/delete-book/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };

        const result = await bookCollections.deleteOne(filter);

        if (result.deletedCount > 0) {
          res.status(200).send({ message: "Book deleted successfully!" });
        } else {
          res.status(404).send({ message: "Book not found!" });
        }
      } catch (error) {
        console.error("Error deleting book:", error);
        res.status(500).send({ message: "Failed to delete the book.", error });
      }
    });

    // Get all books
    app.get("/all-books", async (req, res) => {
      try {
        let query = {};
        if (req.query?.category) {
          query = { category: req.query.category };
        }

        const result = await bookCollections.find(query).toArray();
        res.send(result);
      } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).send("Failed to fetch books");
      }
    });

    //////////////////////////// CRUD FOR USERS //////////////////////////////////

    // Add user to userCollections
    app.post("/register-user", async (req, res) => {
      try {
        const userData = req.body;
        const result = await userCollections.insertOne(userData);
        res.status(201).send({ message: "User registered successfully", result });
      } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).send({ error: "Failed to register user" });
      }
    });

    // Get user's orders
    app.get('/my-orders/:userId', async (req, res) => {
      try {
        const userId = req.params.userId;
        const orders = await ordersCollection.find({ userId }).toArray();
        if (orders.length > 0) {
          res.status(200).json(orders);
        } else {
          res.status(404).send({ message: "No orders found for this user." });
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).send({ error: "Failed to fetch orders" });
      }
    });


   // Get all users
app.get("/users", async (req, res) => {
  try {
    const result = await userCollections.find().toArray(); // Fetch all users without any query
    res.send(result);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Failed to fetch users");
  }
});



    //////////////////////////// CRUD FOR ORDERS //////////////////////////////////

    // Insert new order
    app.post('/order', async (req, res) => {
      try {
        const orderData = req.body;
        const result = await ordersCollection.insertOne(orderData);
        res.status(201).send({ message: "Order placed successfully", result });
      } catch (error) {
        console.error("Error placing order:", error);
        res.status(500).send({ error: "Failed to place order" });
      }
    });

    // Get all orders (Admin route or specific based on criteria)
    app.get("/all-orders", async (req, res) => {
      try {
        const result = await ordersCollection.find().toArray();
        res.send(result);
      } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).send("Failed to fetch orders");
      }
    });

    app.get("/order/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await ordersCollection.findOne(filter);
      res.send(result);
    });

    app.patch("/order/:id", async (req, res) => {
      const id = req.params.id;
      if (!ObjectId.isValid(id)) {
        return res.status(400).send({ error: "Invalid order ID format" });
      }

      const updateOrderData = req.body;
      if (!updateOrderData || Object.keys(updateOrderData).length === 0) {
        return res.status(400).send({ error: "No data provided for update" });
      }

      const filter = { _id: new ObjectId(id) };
      const options = { upsert: false };
      const updateDoc = {
        $set: { ...updateOrderData },
      };

      try {
        const result = await ordersCollection.updateOne(filter, updateDoc, options);

        if (result.matchedCount === 0) {
          return res.status(404).send({ error: "Order not found" });
        }
        res.send({ message: "Order updated successfully", result });
      } catch (error) {
        console.error("Error updating order:", error);
        res.status(500).send({ error: "Failed to update order" });
      }
    });

    app.delete('/delete-order/:id', async (req, res) => {
      try {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };

        const result = await ordersCollection.deleteOne(filter);

        if (result.deletedCount > 0) {
          res.status(200).send({ message: "Order deleted successfully!" });
        } else {
          res.status(404).send({ message: "Order not found!" });
        }
      } catch (error) {
        console.error("Error deleting order:", error);
        res.status(500).send({ message: "Failed to delete order.", error });
      }
    });

    // Listen on PORT
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } finally {
    // Ensuring client does not close immediately
    // await client.close();
  }
}
run().catch(console.dir);
