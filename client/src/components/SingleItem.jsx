import React from "react";
import { useParams } from "react-router-dom";

const SingleItem = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null); 
  const [quantity, setQuantity] = React.useState(1); 

  React.useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5000/book/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        const data = await response.json();
        setProduct(data); 
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]); 

  if (!product) {
    return <div>Loading...</div>; 
  }

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const addToCart = () => {
    const userId = localStorage.getItem('userId'); // Get the unique user ID
    const cartKey = `cart-${userId}`;  // Unique key per user
    const cartItems = JSON.parse(localStorage.getItem(cartKey)) || [];
    const newItem = {
      id: product._id,
      title: product.bookTitle,
      price: product.price,
      imageURL: product.imageURL,
      quantity: quantity
    };
    localStorage.setItem(cartKey, JSON.stringify([...cartItems, newItem]));
    alert('Item added to cart!');
  };
  

  return (
    <div className="single-item-container p-6 md:p-10 bg-yellow-100 rounded-lg shadow-lg max-w-full mx-auto mt-10">
      <div className="flex flex-col md:flex-row items-center">
        <img
          src={product?.imageURL}
          alt={product?.bookTitle}
          className="w-full md:w-1/2 h-auto rounded-lg mb-6 md:mb-0 md:mr-6 object-cover"
        />
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            {product?.bookTitle}
          </h2>
          <p className="text-gray-600 mb-4">{product?.category}</p>
          <p className="text-gray-700 mb-4">{product?.bookDescription}</p>
          <p className="text-lg font-semibold text-gray-800 mb-6">₹{product?.price}</p>

          <div className="flex items-center mb-6">
            <button
              onClick={decrementQuantity}
              className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded-full cursor-pointer"
            >
              -
            </button>
            <span className="mx-4 text-lg font-semibold">{quantity}</span>
            <button
              onClick={incrementQuantity}
              className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded-full cursor-pointer"
            >
              +
            </button>
          </div>

          <div className="flex space-x-4">
            <button onClick={addToCart} className="px-6 py-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition">
              Add to Cart
            </button>
            <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-700 transition">
              Buy Now
            </button>
          </div>

          <button
            onClick={() => window.history.back()}
            className="mt-6 inline-block px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
