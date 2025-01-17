import React from 'react'
import { useState } from 'react';
const UploadBook = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    imageUrl: '',
    category: '',
    description: '',
    pdfUrl: '',
  });

  const bookCategories = [
    'Superhero',
    'Science Fiction',
    'Fantasy',
    'Mystery',
    'Adventure',
    'Romance',
    'Horror',
    'Historical',
    'Humor',
    'Graphic Novel',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBookSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const bookTitle = form.title.value;
    const authorName = form.author.value;
    const imageURL = form.imageUrl.value;
    const category = form.category.value;
    const bookDescription = form.description.value;
    const bookPDFURL = form.pdfUrl.value;
    const price = form.price.value;
    
    const bookObj = {
      bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL, price
    }
    console.log(bookObj);

    fetch("http://localhost:5000/upload-book", {
      method : "POST",
      headers: {
        "Content-type" : "application/json"
      },
      body: JSON.stringify(bookObj)
    })
    .then(res=>res.json())
    .then(data=>{
      alert("Book Uploaded Successfully!");
      form.reset();
    })
    
  };

  return (
    <>
      <div className="items-center justify-center">
        <div className="w-full  p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-6">Upload a Book</h1>
          <form onSubmit={handleBookSubmit} className="space-y-6">
            {/* First Row: Book Title and Author */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Book Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter book title"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="author" className="block text-sm font-medium text-gray-700">
                  Author Name
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  placeholder="Enter author name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                  required
                />
              </div>
            </div>

            {/* Second Row: Book Image URL and Category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
                  Book Image URL
                </label>
                <input
                  type="text"
                  id="imageUrl"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  placeholder="Enter book image URL"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                  required
                >
                  <option value="">Select a category</option>
                  {bookCategories.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Third Row: Book Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Book Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter book description"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                rows="4"
                required
              ></textarea>
            </div>

            {/* Fourth Row: Book PDF URL */}
            <div>
              <label htmlFor="pdfUrl" className="block text-sm font-medium text-gray-700">
                Book PDF URL
              </label>
              <input
                type="text"
                id="pdfUrl"
                name="pdfUrl"
                value={formData.pdfUrl}
                onChange={handleChange}
                placeholder="Enter book PDF URL"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                required
              />
            </div>

            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Book Price
              </label>
              <input
                type="text"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Enter book price"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                required
              />
            </div>


            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="px-4 py-2 text-black bg-yellow-500 border-2 border-black rounded-lg shadow-lg hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )



}

export default UploadBook

// 4:38:50 