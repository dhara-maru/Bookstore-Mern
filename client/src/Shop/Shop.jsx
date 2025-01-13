import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch the data and update the state with the filtered books
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) =>
        setBooks(data.filter((book) => book.category.toLowerCase() !== "merchandise"))
      );
  }, []); // Empty dependency array to run this effect only once after initial render

  return (
    <div className="my-16 px-4 lg:px-24">
      <br />
      <h2 className="text-4xl md:text-5xl text-center font-bold text-black my-5">
        🦸🏼‍♀️ Explore Our Epic Comic Collection!
      </h2>
      <br />

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <Link to={`/book/${book._id}`} key={book._id}>
            <div className="card flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
              {/* Book Image */}
              <div className="card-image w-3/4 h-[250px] mb-4">
                <img
                  src={book.imageURL}
                  alt={book.bookTitle}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              
              {/* Book Title */}
              <h3 className="text-black text-lg font-medium text-center mb-1">
                {book.bookTitle}
              </h3>

              {/* Book Description */}
              <p className="text-gray-600 text-sm font-light text-center mb-2">
                {book.bookDescription}
              </p>

              {/* Author Name */}
              <p className="text-black text-sm font-light text-center mb-2">
                by {book.authorName}
              </p>

              {/* Price and Cart Icon */}
              <div className="flex items-center justify-between w-full mt-2 p-2">
                <p className="text-black text-md font-bold">₹{book.price}</p>
                <FaCartShopping className="w-6 h-6 text-black" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;
