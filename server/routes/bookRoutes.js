const express = require("express");
const router = express.Router();
const {
  uploadBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

router.post("/upload-book", uploadBook);
router.get("/all-books", getAllBooks);
router.get("/:id", getBookById); 
router.patch("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;
