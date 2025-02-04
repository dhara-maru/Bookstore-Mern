import React, { useState, useEffect } from 'react';
import BookCards from '../components/BookCards';
import { Link } from 'react-router-dom';

const OtherBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/books/all-books")
      .then((res) => res.json())
      .then((data) => {
        const filteredBooks2 = data.filter(book => book.category === "merchandise");
        const shuffled = filteredBooks2.sort(() => 0.5 - Math.random()); 
        setBooks(shuffled.slice(0, 4)); 
      });
  }, []);

  return (
    <div>
    <BookCards books={books} headLine="DC & MARVEL Official Merchandise" />
  
    <div className="flex justify-center">
      <Link to={"/shop"}>
        <button className='bg-black px-6 py-2 my-5 text-white font-medium hover:bg-yellow-600 font-bold transition-all ease-in duration-200'>
          Visit the Store 👕
        </button>
      </Link>
    </div>
  </div>
  
  

    
  );
};

export default OtherBooks;
