const { MongoClient, ObjectId } = require("mongodb");
const uri = "mongodb+srv://rekhta-mern:rekhtamerndhara@cluster0.s3zyd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

const bookCollections = client.db("BookInventory").collection("books");

module.exports = { bookCollections, ObjectId, client };
