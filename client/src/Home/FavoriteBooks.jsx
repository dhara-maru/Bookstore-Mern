
import { useState } from 'react';
import { useEffect } from 'react';
import BookCards from '../components/BookCards';

const FavoriteBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch the data and update the state with the fetched books
    fetch("http://localhost:5000/books/all-books")
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
