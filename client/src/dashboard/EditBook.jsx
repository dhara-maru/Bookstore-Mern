import React, { useState, useEffect } from "react";

const EditBook = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [formData, setFormData] = useState({
    bookTitle: "",
    bookDescription: "",
    price: "",
    category: "",
    imageURL: "",
    bookPDFURL: ""
  });
  const [alertMessage, setAlertMessage] = useState("");

  // Fetch all books except merchandise
  useEffect(() => {
    fetch("http://localhost:5000/books/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data.filter(book => book.category !== "merchandise")));
  }, []);

  // Handle changes in form input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

 
 // Handle form submission
const handleSubmit = (e) => {
    e.preventDefault();
  
    // Ensure price is treated as a number
    const updatedData = {
      bookTitle: formData.bookTitle,
      bookDescription: formData.bookDescription,
      price: parseFloat(formData.price), // Convert price to a number
      category: formData.category,
      imageURL: formData.imageURL,
      bookPDFURL: formData.bookPDFURL
    };
  
    // If the category is 'merchandise', exclude `bookPDFURL`
    if (selectedBook.category === "merchandise") {
      delete updatedData.bookPDFURL; // Only include bookPDFURL for non-merchandise
    }
  
    fetch(`http://localhost:5000/books/${selectedBook._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedData)
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to update the book");
        }
        return res.json();
      })
      .then((data) => {
        if (data) {
          setBooks(books.map((book) => (book._id === data._id ? data : book)));
          setSelectedBook(null); // Close the form
          setAlertMessage("Item updated successfully!"); // Show success message
        }
      })
      .catch((error) => {
        console.error("Error updating book:", error);
        setAlertMessage("Error updating the item. Please try again."); // Show error message
      });
  };
  

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Edit Books</h2>

      {/* Show alert message */}
      {alertMessage && (
        <div className="bg-green-200 text-green-800 p-2 mb-4 rounded">{alertMessage}</div>
      )}

      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Title</th>
            <th className="py-2 px-4 border">Author</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td className="py-2 px-4 border text-black">{book.bookTitle}</td>
              <td className="py-2 px-4 border">{book.authorName}</td>
              <td className="py-2 px-4 border">
                <button
                  onClick={() => {
                    setSelectedBook(book);
                    setFormData({
                      bookTitle: book.bookTitle,
                      bookDescription: book.bookDescription,
                      price: book.price,
                      category: book.category,
                      imageURL: book.imageURL,
                      bookPDFURL: book.bookPDFURL
                    });
                  }}
                  className="bg-blue-500 text-white px-2 py-1"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Book Form */}
      {selectedBook && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Edit Book</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="bookTitle" className="block mb-2">Book Title</label>
              <input
                type="text"
                id="bookTitle"
                name="bookTitle"
                value={formData.bookTitle}
                onChange={handleChange}
                className="w-full p-2 border"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="bookDescription" className="block mb-2">Book Description</label>
              <textarea
                id="bookDescription"
                name="bookDescription"
                value={formData.bookDescription}
                onChange={handleChange}
                className="w-full p-2 border"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="price" className="block mb-2">Price</label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full p-2 border"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="category" className="block mb-2">Category</label>
              <input
                type="text"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-2 border"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="imageURL" className="block mb-2">Image URL</label>
              <input
                type="text"
                id="imageURL"
                name="imageURL"
                value={formData.imageURL}
                onChange={handleChange}
                className="w-full p-2 border"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="bookPDFURL" className="block mb-2">Book PDF URL</label>
              <input
                type="text"
                id="bookPDFURL"
                name="bookPDFURL"
                value={formData.bookPDFURL}
                onChange={handleChange}
                className="w-full p-2 border"
              />
            </div>

            <button type="submit" className="bg-blue-500 text-white px-4 py-2">
              Update Book
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default EditBook;
