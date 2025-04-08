import React, { useState } from 'react';

const UploadProduct = () => {
  const [formData, setFormData] = useState({
    bookTitle: '', // Changed to match the book model key
    price: '',
    imageURL: '',
    bookDescription: '', // Changed to match the book model key
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleProductSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    // Convert price to a number before sending the data
    const productData = {
      ...formData,
      price: parseFloat(formData.price), // Ensuring price is a number
      category: 'merchandise',  // Fixed category to 'merchandise'
    };

    console.log(productData);


    fetch("https://bookstore-mern-backend-1q16.onrender.com/books/upload-book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Product Uploaded Successfully!");
        form.reset();
        setFormData({
          bookTitle: '',
          price: '',
          imageURL: '',
          bookDescription: '',
        });
        setSuccessMessage('Product uploaded successfully!');
        setErrorMessage('');
      })
      .catch((error) => {
        console.error("Error uploading product:", error);
        setErrorMessage('Failed to upload the product.');
        setSuccessMessage('');
      });
  };

  return (
    <div className="items-center justify-center">
      <div className="w-full p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Upload a Product</h1>
        <form onSubmit={handleProductSubmit} className="space-y-6">
          {/* Product Title */}
          <div>
            <label htmlFor="bookTitle" className="block text-sm font-medium text-gray-700">
              Product Title
            </label>
            <input
              type="text"
              id="bookTitle"
              name="bookTitle" // Matching the book model key
              value={formData.bookTitle}
              onChange={handleChange}
              placeholder="Enter product title"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              required
            />
          </div>

          {/* Product Price */}
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Product Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter product price"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              required
            />
          </div>

          {/* Product Image URL */}
          <div>
            <label htmlFor="imageURL" className="block text-sm font-medium text-gray-700">
              Product Image URL
            </label>
            <input
              type="text"
              id="imageURL"
              name="imageURL"
              value={formData.imageURL}
              onChange={handleChange}
              placeholder="Enter product image URL"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              required
            />
          </div>

          {/* Product Description */}
          <div>
            <label htmlFor="bookDescription" className="block text-sm font-medium text-gray-700">
              Product Description
            </label>
            <textarea
              id="bookDescription"
              name="bookDescription" // Matching the book model key
              value={formData.bookDescription}
              onChange={handleChange}
              placeholder="Enter product description"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="px-4 py-2 text-black bg-yellow-500 border-2 border-black rounded-lg shadow-lg hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300"
            >
              Upload Product
            </button>
          </div>

          {/* Success and Error Messages */}
          {successMessage && <p className="text-green-500 text-center mt-4">{successMessage}</p>}
          {errorMessage && <p className="text-red-500 text-center mt-4">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default UploadProduct;
