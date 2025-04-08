import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditBooks = () => {
  const { id } = useParams(); // Get the bookId from the URL
  const [bookData, setBookData] = useState({
    bookTitle: '',
    authorName: '',
    imageURL: '',
    bookDescription: '',
    bookPDFURL: '',
    price: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Fetch the book data based on the ID from the URL
    const fetchBook = async () => {
      try {
        const response = await fetch(`https://bookstore-mern-backend-1q16.onrender.com/book/${id}`);
        if (!response.ok) throw new Error('Failed to fetch book data');
        const data = await response.json();
        setBookData({
          bookTitle: data.bookTitle,
          authorName: data.authorName,
          imageURL: data.imageURL,
          bookDescription: data.bookDescription,
          bookPDFURL: data.bookPDFURL,
          price: data.price,
        });
      } catch (error) {
        console.error('Error fetching book:', error);
      }
    };

    fetchBook();
  }, [id]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Ensure price is a number before submitting
    const updatedData = {
      ...bookData,
      price: parseFloat(bookData.price), // Convert price to a number if it's a string
    };

    try {
      const response = await fetch(`https://bookstore-mern-backend-1q16.onrender.com/book/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) throw new Error('Failed to update the book');

      const updatedBook = await response.json();
      console.log('Book updated:', updatedBook);

      setSuccessMessage('Book updated successfully!');
      setErrorMessage(''); // Clear any previous error message
    } catch (error) {
      console.error('Error updating book:', error);
      setErrorMessage('Failed to update the book.');
      setSuccessMessage(''); // Clear any previous success message
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h2 className="text-2xl font-semibold text-center mb-6">Edit Book</h2>

      {/* Show success or error message */}
      {successMessage && (
        <div className="bg-green-500 text-white p-3 mb-4 rounded-md">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="bg-red-500 text-white p-3 mb-4 rounded-md">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div>
          <label htmlFor="bookTitle" className="block text-sm font-medium text-gray-700">Book Title</label>
          <input
            type="text"
            id="bookTitle"
            name="bookTitle"
            value={bookData.bookTitle}
            onChange={(e) => setBookData({ ...bookData, bookTitle: e.target.value })}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="authorName" className="block text-sm font-medium text-gray-700">Author Name</label>
          <input
            type="text"
            id="authorName"
            name="authorName"
            value={bookData.authorName}
            onChange={(e) => setBookData({ ...bookData, authorName: e.target.value })}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="imageURL" className="block text-sm font-medium text-gray-700">Image URL</label>
          <input
            type="text"
            id="imageURL"
            name="imageURL"
            value={bookData.imageURL}
            onChange={(e) => setBookData({ ...bookData, imageURL: e.target.value })}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="bookDescription" className="block text-sm font-medium text-gray-700">Book Description</label>
          <textarea
            id="bookDescription"
            name="bookDescription"
            value={bookData.bookDescription}
            onChange={(e) => setBookData({ ...bookData, bookDescription: e.target.value })}
            rows="4"
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="bookPDFURL" className="block text-sm font-medium text-gray-700">Book PDF URL</label>
          <input
            type="text"
            id="bookPDFURL"
            name="bookPDFURL"
            value={bookData.bookPDFURL}
            onChange={(e) => setBookData({ ...bookData, bookPDFURL: e.target.value })}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={bookData.price}
            onChange={(e) => setBookData({ ...bookData, price: parseFloat(e.target.value) })}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Update Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBooks;
