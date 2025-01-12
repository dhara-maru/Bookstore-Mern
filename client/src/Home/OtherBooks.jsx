import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import BookCards from '../components/BookCards';
import marvellogo from '../assets/marvellogo.png'

const OtherBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/all-books")
          .then((res) => res.json())
          .then(data => {
            const shuffled = data.sort(() => 0.5 - Math.random()); 
            setBooks(shuffled.slice(0, 4)); 
          });
      }, []);
  
    return (
      <div>
        <BookCards books={books} headLine="Comics Of The Month!" />
      </div>
    );
  };

export default OtherBooks
