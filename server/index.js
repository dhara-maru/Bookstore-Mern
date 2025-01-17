const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')

//middleware
app.use(cors())
app.use(express.json());

//connect to mongodb////////////////////////////////////////////////////////////////////////////

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
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //create a collection of docs
    const bookCollections = client.db("BookInventory").collection("books");

    // insert a book using post method
    app.post("/upload-book", async(req, res)=>{
        const data = req.body;
        const result = await bookCollections.insertOne(data);
        res.send(result);
    })


    //insert a merchandise product
    app.post("/upload-product", async (req, res) => {
      try {
        const productData = req.body;
        productData.category = "merchandise"; // Ensure category is added here
        const result = await bookCollections.insertOne(productData);
        res.status(201).json({ message: "Product uploaded successfully", result });
      } catch (error) {
        console.error("Error uploading product:", error);
        res.status(500).json({ error: "Failed to upload product" });
      }
    });

    

    //get single book
    app.get("/book/:id", async(req, res)=>{
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollections.findOne(filter);
      res.send(result);
    })


    //update a book
    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;
    
      // Log the incoming data
      console.log("Received book update request:", req.body);
    
      // Validate the ID format
      if (!ObjectId.isValid(id)) {
        return res.status(400).send({ error: "Invalid book ID format" });
      }
    
      const updateBookData = req.body;
    
      // Log the incoming update data
      console.log("Update data:", updateBookData);
    
      if (!updateBookData || Object.keys(updateBookData).length === 0) {
        return res.status(400).send({ error: "No data provided for update" });
      }
    
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: false };
      const updateDoc = {
        $set: { ...updateBookData },
      };
    
      try {
        // Perform the update operation
        const result = await bookCollections.updateOne(filter, updateDoc, options);
    
        if (result.matchedCount === 0) {
          return res.status(404).send({ error: "Book not found" });
        }
    
        res.send({ message: "Book updated successfully", result });
      } catch (error) {
        // Log the error for debugging
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



    app.get("/all-books", async (req, res) => {
      try {
        let query = {};
        if (req.query?.category) {
          query = { category: req.query.category };
        }
        console.log("Query received:", query); // Log query
    
        const result = await bookCollections.find(query).toArray();
        console.log("Books fetched from DB:", result); // Log result
    
        res.send(result);
      } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).send("Failed to fetch books");
      }
    });
    

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


//////////////////////////////////////////////////////////////////////////////
app.get('/',(req, res)=>{
    res.send('Hello world')
} )

app.listen(port, ()=>{
    console.log(`Listening on http://localhost:${port}`);
    
})