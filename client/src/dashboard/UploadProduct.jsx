import React, { useState } from 'react';

const UploadProduct = () => {
  const [formData, setFormData] = useState({
    productTitle: '',
    price: '',
    imageURL: '',
    productDescription: '',
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
      category: 'merchandise', 
    };

    console.log(productData);

    // Send product data to the server
    fetch("http://localhost:5000/upload-product", {
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
          productTitle: '',
          price: '',
          imageURL: '',
          productDescription: '',
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
            <label htmlFor="productTitle" className="block text-sm font-medium text-gray-700">
              Product Title
            </label>
            <input
              type="text"
              id="productTitle"
              name="productTitle"
              value={formData.productTitle}
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
            <label htmlFor="productDescription" className="block text-sm font-medium text-gray-700">
              Product Description
            </label>
            <textarea
              id="productDescription"
              name="productDescription"
              value={formData.productDescription}
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
        </form>
      </div>
    </div>
  );
};

export default UploadProduct;
