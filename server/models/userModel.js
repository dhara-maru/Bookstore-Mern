const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://rekhta-mern:rekhtamerndhara@cluster0.s3zyd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

const userCollections = client.db("BookInventory").collection("users");

module.exports = { userCollections, client };
