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

    //get all books
    // app.get("/all-books", async(req, res)=>{
    //     const books = await bookCollections.find();
    //     const result = await books.toArray();
    //     res.send(result);
    // } )


    // //update a book data : patch or update method
    // app.patch("/book/:id", async(req, res)=>{
    //     const id = req.params.id;
    //     const updateBookData = req.body;
    //     const filter = {_id: new ObjectId(id)};
    //     const options = {upsert : true};
    //     const updateDoc = {
    //         $set:{
    //             ...updateBookData
    //         }
    //     }

    //     //update
    //     const result = await bookCollections.updateOne(filter, updateDoc, options);
    //     res.send(result);
    // } )

    app.patch("/book/:id", async (req, res) => {
        const id = req.params.id;
      
        // Validate the ID format
        if (!ObjectId.isValid(id)) {
          return res.status(400).send({ error: "Invalid book ID format" });
        }
      
        const updateBookData = req.body;
      
        // Ensure the request body contains valid data
        if (!updateBookData || Object.keys(updateBookData).length === 0) {
          return res.status(400).send({ error: "No data provided for update" });
        }
      
        const filter = { _id: new ObjectId(id) };
        const options = { upsert: false }; // Change this to true only if upserting is required
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

    //   //delete a book
      app.delete("/book/:id", async(req, res)=>{
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };
        const result = await bookCollections.deleteOne(filter);
        res.send(result);

    } )

//find books
app.get("/all-books", async(req, res)=>{
    let query = {};
    if(req.query?.category){
        query = {category: req.query.category}
    }

    const result = await bookCollections.find(query).toArray();
    res.send(result);
} )
      

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