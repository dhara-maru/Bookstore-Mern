const { bookCollections, ObjectId } = require("../models/bookModel");

// Upload a book
const uploadBook = async (req, res) => {
    try {
      const data = req.body;  
      const result = await bookCollections.insertOne(data);
      res.status(201).send(result);  
    } catch (error) {
      console.error("Error uploading book:", error);
      res.status(500).send({ error: "Failed to upload book" });
    }
};

// Get all books
const getAllBooks = async (req, res) => {
  try {
    const query = req.query?.category ? { category: req.query.category } : {};
    const result = await bookCollections.find(query).toArray();
    res.status(200).send(result);
  } catch ( error) {
    console.error("Error fetching books:", error);
    res.status(500).send("Failed to fetch books");
  }
};

// Get a single book by ID
const getBookById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await bookCollections.findOne({ _id: new ObjectId(id) });
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(404).send({ message: "Book not found" });
    }
  } catch (error) {
    console.error("Error fetching book:", error);
    res.status(500).send({ error: "Failed to fetch book" });
  }
};

// Update a book
const updateBook = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const result = await bookCollections.updateOne(
      { _id: new ObjectId(id) },
      { $set: updateData }
    );

    // Fetch the updated book and return it
    if (result.modifiedCount === 0) {
      return res.status(404).send({ message: "No changes made to the book" });
    }

    const updatedBook = await bookCollections.findOne({ _id: new ObjectId(id) });

    // Return the updated book
    res.status(200).send(updatedBook);
  } catch (error) {
    console.error("Error updating book:", error);
    res.status(500).send({ error: "Failed to update book" });
  }
};


// Delete a book
const deleteBook = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await bookCollections.deleteOne({ _id: new ObjectId(id) });
    res.status(200).send(result);
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).send({ error: "Failed to delete book" });
  }
};

module.exports = {
  uploadBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
};
