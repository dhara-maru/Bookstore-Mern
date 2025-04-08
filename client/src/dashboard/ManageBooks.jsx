import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Spinner = () => (
  <div className="flex justify-center items-center space-x-2">
    <div className="w-8 h-8 border-4 border-yellow-400 border-t-transparent border-solid rounded-full animate-spin"></div>
    <p className="text-yellow-400">Loading...</p>
  </div>
);

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [merchandiseBooks, setMerchandiseBooks] = useState([]);
  const [activeTab, setActiveTab] = useState("all"); // 'all' or 'merchandise'

  useEffect(() => {
    fetch("https://bookstore-mern-backend-1q16.onrender.com/books/all-books")
      .then((res) => res.json())
      .then((data) => {
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

    fetch(`https://bookstore-mern-backend-1q16.onrender.com/books/delete-book/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        alert("Deleted successfully!");
        if (isMerchandise) {
          setMerchandiseBooks(merchandiseBooks.filter((book) => book._id !== id));
        } else {
          setAllBooks(allBooks.filter((book) => book._id !== id));
        }
      })
      .catch((error) => {
        console.error("Error deleting:", error);
        alert("An error occurred while deleting.");
      });
  };

  const renderTable = (books, isMerchandise) => (
    <div className="overflow-x-auto mb-8">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 border-b">Sr. No.</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 border-b">Title</th>
            {!isMerchandise && (
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 border-b">Author</th>
            )}
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 border-b">Price</th>
            <th className="px-4 py-2 text-center text-sm font-semibold text-gray-600 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b">{index + 1}</td>
              <td className="px-4 py-2 border-b">{book.bookTitle}</td>
              {!isMerchandise && <td className="px-4 py-2 border-b">{book.authorName}</td>}
              <td className="px-4 py-2 border-b">₹{book.price}</td>
              <td className="px-4 py-2 border-b text-center">
                <Link
                  to={
                    isMerchandise
                      ? `/admin/dashboard/edit-product/${book._id}`
                      : `/admin/dashboard/edit-book/${book._id}`
                  }
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

      <div className="mb-4 flex justify-center space-x-6">
        <button
          onClick={() => setActiveTab("all")}
          className={`py-2 px-4 font-semibold ${activeTab === "all" ? "bg-yellow-400 text-white" : "bg-gray-100"}`}
        >
          All Books
        </button>
        <button
          onClick={() => setActiveTab("merchandise")}
          className={`py-2 px-4 font-semibold ${activeTab === "merchandise" ? "bg-yellow-400 text-white" : "bg-gray-100"}`}
        >
          Merchandise Products
        </button>
      </div>

      {activeTab === "all" ? (
        allBooks.length > 0 ? (
          renderTable(allBooks, false)
        ) : (
          <Spinner />
        )
      ) : (
        merchandiseBooks.length > 0 ? (
          renderTable(merchandiseBooks, true)
        ) : (
          <Spinner />
        )
      )}
    </div>
  );
};

export default ManageBooks;
