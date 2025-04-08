
import { useState } from 'react';
import { useEffect } from 'react';
import BookCards from '../components/BookCards';

const FavoriteBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch the data and update the state with the fetched books
    fetch("https://bookstore-mern-backend-1q16.onrender.com/books/all-books")
      .then((res) => res.json())
      .then(data=>setBooks(data));
      
  }, []); // Empty dependency array to run this effect only once after initial render

  return (
    <div>
      <BookCards books={books} headLine="Our Best Seller Comics" />
    </div>
  );
};

export default FavoriteBooks;
