import React, { useState, useEffect } from "react";

const EditProduct = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    bookTitle: "",
    bookDescription: "",
    price: "",
    imageURL: "",
  });
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    // Fetch all books excluding 'merchandise' category
    fetch("https://bookstore-mern-backend-1q16.onrender.com/books/all-books?category=merchandise")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure price is treated as a number
    const updatedData = {
      bookTitle: formData.bookTitle,
      bookDescription: formData.bookDescription,
      price: parseFloat(formData.price), // Convert price to a number
      imageURL: formData.imageURL,
    };

    fetch(`https://bookstore-mern-backend-1q16.onrender.com/books/${selectedProduct._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to update the product");
        }
        return res.json();
      })
      .then((data) => {
        if (data) {
          setProducts(
            products.map((product) =>
              product._id === data._id ? data : product
            )
          );
          setSelectedProduct(null); // Close the form
          setAlertMessage("Item updated successfully!"); // Show success message
        }
      })
      .catch((error) => {
        console.error("Error updating product:", error);
        setAlertMessage("Error updating the item. Please try again."); // Show error message
      });
  };

  // Handle product edit button click
  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setFormData({
      bookTitle: product.bookTitle,
      bookDescription: product.bookDescription,
      price: product.price,
      imageURL: product.imageURL,
    });
  };

  return (
    <div className="p-4">
      {alertMessage && (
        <div className="alert alert-success mb-4">{alertMessage}</div>
      )}
      <h2 className="text-xl font-semibold mb-4">Edit Products</h2>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Title</th>
            <th className="py-2 px-4 border">Category</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td className="py-2 px-4 border text-black">{product.bookTitle}</td>
              <td className="py-2 px-4 border">{product.category}</td>
              <td className="py-2 px-4 border">
                <button
                  className="bg-blue-500 text-white px-2 py-1"
                  onClick={() => handleEditClick(product)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedProduct && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">Edit Product</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                name="bookTitle"
                value={formData.bookTitle}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="bookDescription"
                value={formData.bookDescription}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Image URL</label>
              <input
                type="text"
                name="imageURL"
                value={formData.imageURL}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Save Changes
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default EditProduct;
