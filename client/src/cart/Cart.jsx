import React from "react";

const Cart = () => {
  const userId = localStorage.getItem('userId'); // Retrieve the user's unique ID or session key
  const cartItems = JSON.parse(localStorage.getItem(`cart-${userId}`)) || [];

  const handleDelete = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);  // Remove the item at the given index
    localStorage.setItem(`cart-${userId}`, JSON.stringify(updatedCart));
  };

  if (cartItems.length === 0) {
    return <div className="p-6 text-center text-gray-700">Your cart is empty.</div>;
  }

  return (
    <div className="p-6 rounded-lg  max-w-full mx-auto mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-500">
          <thead>
            <tr>
              <th className="border border-gray-500 px-4 py-2 text-left">Product</th>
              <th className="border border-gray-500 px-4 py-2 text-left">Price</th>
              <th className="border border-gray-500 px-4 py-2 text-left">Quantity</th>
              <th className="border border-gray-500 px-4 py-2 text-left">Total</th>
              <th className="border border-gray-500 px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-400 px-4 py-2 flex items-center space-x-4">
                  <img src={item.imageURL} alt={item.title} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <h4 className="text-gray-800 font-semibold">{item.title}</h4>
                  </div>
                </td>
                <td className="border border-gray-500 px-4 py-2">₹{item.price}</td>
                <td className="border border-gray-500 px-4 py-2">{item.quantity}</td>
                <td className="border border-gray-500 px-4 py-2">₹{item.price * item.quantity}</td>
                <td className="border border-gray-500 px-4 py-2">
                  <button
                    onClick={() => handleDelete(index)}
                    className="px-3 py-1 bg-red-400 text-white rounded hover:bg-red-500 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end mt-6">
        <button className="px-6 py-2 bg-green-400 text-white rounded-lg hover:bg-green-500 transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
