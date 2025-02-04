import React, { useEffect, useState } from 'react';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    fetch(`http://localhost:5000/my-orders/${userId}`)
      .then(response => response.json())
      .then(data => setOrders(data))
      .catch(error => console.error('Error fetching orders:', error));
  }, []);

  const getRandomDeliveryDate = () => {
    const start = new Date('2024-01-01');
    const end = new Date('2025-02-28');
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return randomDate.toLocaleDateString();
  };

  const getStatusDot = (status) => {
    switch (status) {
      case 'out for delivery':
        return <span className="inline-block w-3 h-3 rounded-full bg-green-500"></span>;
      case 'shipped':
        return <span className="inline-block w-3 h-3 rounded-full bg-yellow-500"></span>;
      case 'order placed':
        return <span className="inline-block w-3 h-3 rounded-full bg-blue-500"></span>;
      default:
        return null;
    }
  };

  const getOrderStatus = () => {
    const statuses = ['out for delivery', 'order placed', 'shipped'];
    return statuses[Math.floor(Math.random() * statuses.length)];
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">My Orders</h2>
      <div className="flex flex-col space-y-6">
        {orders.length > 0 ? (
          orders.map(order => (
            <div key={order._id} className="border border-gray-300 rounded-lg p-6 bg-white shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-4">Order ID: #{order._id}</h3>
              <div className="space-y-4">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center border-b pb-4">
                    <div className="flex flex-col">
                      <span className="font-semibold">Item: {item.title}</span>
                      <span>Price: ₹{item.price}</span>
                      <span>Quantity: x{item.quantity}</span>
                    </div>
                    <div className="flex flex-col text-right">
                      <span>Status: {getStatusDot(order.status || getOrderStatus())} {order.status || getOrderStatus()}</span>
                      <span>Payment: {order.paymentMethod}</span>
                      <span>Total: ₹{order.grandTotal}</span>
                      <span>Shipping: ₹{order.shippingCharge}</span>
                      <span>Delivery Date: {getRandomDeliveryDate()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full">No orders found for this user.</p>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
