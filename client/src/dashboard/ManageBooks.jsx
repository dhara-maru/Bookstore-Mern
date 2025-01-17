import React from 'react';
import { data } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';


const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [merchandiseBooks, setMerchandiseBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => {
        // Separate merchandise books from others
        const nonMerchandiseBooks = data.filter(
          (book) => book.category !== "merchandise"
        );
        const merchandiseOnlyBooks = data.filter(
          (book) => book.category === "merchandise"
        );

        setAllBooks(nonMerchandiseBooks);
        setMerchandiseBooks(merchandiseOnlyBooks);
      });
  }, []);

  const handleDelete = (id, isMerchandise) => {
    if (!id) return;

    fetch(`http://localhost:5000/delete-book/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to delete book.");
        }
        return res.json();
      })
      .then((data) => {
        alert("Deleted successfully!");
        if (isMerchandise) {
          setMerchandiseBooks(merchandiseBooks.filter((book) => book._id !== id));
        } else {
          setAllBooks(allBooks.filter((book) => book._id !== id));
        }
      })
      .catch((error) => {
        console.error("Error when deleting:", error);
        alert("An error occurred while deleting.");
      });
  };

  const renderTable = (books, isMerchandise) => (
    <div className="overflow-x-auto mb-8">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 border-b">
              Sr. No.
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 border-b">
              Book Title
            </th>
            {!isMerchandise && (
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 border-b">
                Author Name
              </th>
            )}
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 border-b">
              Price
            </th>
            <th className="px-4 py-2 text-center text-sm font-semibold text-gray-600 border-b">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b">{index + 1}</td>
              <td className="px-4 py-2 border-b">{book.bookTitle}</td>
              {!isMerchandise && (
                <td className="px-4 py-2 border-b">{book.authorName}</td>
              )}
              <td className="px-4 py-2 border-b">₹{book.price}</td>
              <td className="px-4 py-2 border-b text-center">
              <Link
  to={`/admin/dashboard/edit-book/${book._id}`}
  className="text-blue-500 hover:underline mr-4"
>
  Edit
</Link>
                <button
                  onClick={() => handleDelete(book._id, isMerchandise)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="px-4 lg:px-8 py-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Manage Books & Products</h1>

      {/* First Table: Non-Merchandise Books */}
      <h2 className="text-xl font-semibold mb-4">All Comic Books</h2>
      {allBooks.length > 0 ? (
        renderTable(allBooks, false)
      ) : (
        <p className="text-gray-600">No books available.</p>
      )}

      {/* Second Table: Merchandise Books */}
      <h2 className="text-xl font-semibold mb-4">Merchandise Products</h2>
      {merchandiseBooks.length > 0 ? (
        renderTable(merchandiseBooks, true)
      ) : (
        <p className="text-gray-600">No merchandise products available.</p>
      )}
    </div>
  );
};

export default ManageBooks;