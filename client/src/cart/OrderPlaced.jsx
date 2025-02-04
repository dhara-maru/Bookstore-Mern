import React from 'react';
import { Link } from 'react-router-dom';

const OrderPlaced = () => {
  return (
    <div className="container mx-auto p-6 flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-6">Order Placed Successfully!</h1>
      <p className="mb-4 text-lg">Thank you for your purchase. Your order has been successfully placed.</p>
      <p className="mb-4">We will send you an email confirmation shortly.</p>
      <p className="mb-8">Order ID: #12345678</p>
      <img 
        src="https://media.tenor.com/images/ce26467a28f432acc4d23dc3bc96d4af/tenor.gif" 
        alt="Order Placed Animation"
        className="mb-6 w-full max-w-md"
      />
       <Link to={"/shop"}>
      <a href="" className="px-6 py-2 bg-yellow-400 text-white font-semibold border-black border border-2 hover:bg-yellow-500 transition">
        Keep Shopping
      </a></Link>
    </div>
  );
};

export default OrderPlaced;
