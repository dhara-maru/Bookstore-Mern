import React, { useState, useEffect } from "react";

const DeleteBook = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://bookstore-mern-backend-1q16.onrender.com/books/all-books")
      .then((res) => res.json())
      .then((data) => {
     
        const filteredBooks = data.filter(book => book.category !== "merchandise");
        setBooks(filteredBooks);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`https://bookstore-mern-backend-1q16.onrender.com/books/${id}`, {
      method: "DELETE",
    })
      .then(() => setBooks(books.filter((book) => book._id !== id)));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Delete Books</h2>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Title</th>
            <th className="py-2 px-4 border">Author</th>
            <th className="py-2 px-4 border">Price</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td className="py-2 px-4 border">{book.bookTitle}</td>
              <td className="py-2 px-4 border">{book.authorName}</td>
              <td className="py-2 px-4 border">
              ₹ {book.price}</td>
              <td className="py-2 px-4 border">
                <button className="bg-red-500 text-white px-2 py-1" onClick={() => handleDelete(book._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeleteBook;
