import React, { useState, useEffect } from "react";

const DeleteProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/books/all-books?category=merchandise`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/books/${id}`, {
      method: "DELETE",
    })
      .then(() => setProducts(products.filter((product) => product._id !== id)));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Delete Products</h2>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Category</th>
            <th className="py-2 px-4 border">Price</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td className="py-2 px-4 border">{product.bookTitle}</td>
              <td className="py-2 px-4 border">{product.category}</td>
              <td className="py-2 px-4 border">
              ₹ {product.price} </td>
              <td className="py-2 px-4 border">
                <button className="bg-red-500 text-white px-2 py-1" onClick={() => handleDelete(product._id)}>
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

export default DeleteProduct;
