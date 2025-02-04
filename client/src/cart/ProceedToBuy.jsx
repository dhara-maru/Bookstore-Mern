import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProceedToBuy = () => {
  const [upiId, setUpiId] = useState('');
  const [upiPin, setUpiPin] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isPaymentFieldsVisible, setIsPaymentFieldsVisible] = useState(false);

  const [fullName, setFullName] = useState('');
  const [street, setStreet] = useState('');
  const [area, setArea] = useState('');
  const [pincode, setPincode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const navigate = useNavigate(); // Hook for navigation

  const handlePaymentMethodChange = (e) => {
    const selectedMethod = e.target.value;
    setPaymentMethod(selectedMethod);
    setIsPaymentFieldsVisible(selectedMethod === 'googlepay' || selectedMethod === 'paytm');  // Show fields only for Google Pay or PayTM
  };

  const handleOrder = async () => {
    if (paymentMethod !== 'cod' && (!upiId || !upiPin)) {
      alert("Please fill in the UPI ID and UPI PIN");
      return;
    }

    const userId = localStorage.getItem("userId");
    const userEmail = localStorage.getItem("userEmail");
    const cartItems = JSON.parse(localStorage.getItem(`cart-${userId}`)) || [];
    const shippingCharge = 40;

    // Calculating the grand total
    const productTotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const grandTotal = productTotal + shippingCharge;

    const address = {
      fullName,
      street,
      area,
      pincode,
      city,
      state,
      country,
      phone: contactNumber
    };

    const orderData = {
      userId,
      userEmail,
      address,
      items: cartItems.map(item => ({
        title: item.title,
        price: item.price,
        quantity: item.quantity
      })),
      shippingCharge,
      grandTotal,
      paymentMethod,
      upiId,
      upiPin,
    };

    try {
      const response = await fetch('http://localhost:5000/orders/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
      });

      if (response.ok) {
        // If the order is placed successfully, redirect to the OrderPlaced page
        alert("Order placed successfully!");
        navigate('/order-placed'); // Redirect using useNavigate
      } else {
        console.error('Failed to place order');
        alert("Failed to place order. Please try again.");
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert("Error placing order. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Section: Shipping Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Shipping Address</h2>
          <form className="space-y-4">
            <input
              className="w-full p-2 border rounded"
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              className="w-full p-2 border rounded"
              type="text"
              placeholder="Street Number"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
            <input
              className="w-full p-2 border rounded"
              type="text"
              placeholder="Area Name"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
            <input
              className="w-full p-2 border rounded"
              type="number"
              placeholder="Pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
            <input
              className="w-full p-2 border rounded"
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              className="w-full p-2 border rounded"
              type="text"
              placeholder="State Name"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <input
              className="w-full p-2 border rounded"
              type="text"
              placeholder="Country Name"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <input
              className="w-full p-2 border rounded"
              type="tel"
              placeholder="+91 Contact Number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </form>
        </div>

        {/* Right Section: Bill Summary */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {/* Map through cart items */}
            {JSON.parse(localStorage.getItem(`cart-${localStorage.getItem("userId")}`))?.map((item, index) => (
              <div key={index} className="flex justify-between">
                <span>{item.title}</span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
            <div className="flex justify-between font-semibold text-lg">
              <span>Shipping Charge</span>
              <span>₹40</span>
            </div>
            <div className="flex justify-between font-bold text-xl">
              <span>Grand Total</span>
              <span>₹{JSON.parse(localStorage.getItem(`cart-${localStorage.getItem("userId")}`)).reduce((total, item) => total + item.price * item.quantity, 0) + 40}</span>
            </div>
          </div>
          <hr className="font-black text-black my-4" />
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Payment Options</h3>
            <div className="space-y-5">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  value="googlepay"
                  className="mr-4"
                  onChange={handlePaymentMethodChange}
                />
                <img
                  src="https://w7.pngwing.com/pngs/667/120/png-transparent-google-pay-2020-hd-logo-thumbnail.png"
                  alt="Google Pay"
                  className="w-6 h-6 mr-2"
                />
                Google Pay
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  value="paytm"
                  className="mr-4"
                  onChange={handlePaymentMethodChange}
                />
                <img
                  src="https://w7.pngwing.com/pngs/110/280/png-transparent-paytm-standalone-hd-logo.png"
                  alt="PayTM"
                  className="w-17 h-6 mr-2"
                />
                PayTM
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  className="mr-4"
                  onChange={handlePaymentMethodChange}
                />
                <span className="ml-2">Cash on Delivery</span>
              </label>
            </div>
            {isPaymentFieldsVisible && (
              <>
                <input
                  className="w-full p-2 border rounded mt-4"
                  type="text"
                  placeholder="UPI ID"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                />
                <input
                  className="w-full p-2 border rounded mt-4"
                  type="password"
                  placeholder="UPI PIN"
                  value={upiPin}
                  onChange={(e) => setUpiPin(e.target.value)}
                />
              </>
            )}
          </div>

          {/* Order Now Button */}
          <div className="mt-8 text-start">
            <button
              className="px-6 py-2 bg-yellow-400 text-white font-semibold border-black border border-2 hover:bg-yellow-500 transition"
              onClick={handleOrder}
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProceedToBuy;
