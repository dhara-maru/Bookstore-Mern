import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "./BookCards.css";
import { Pagination } from "swiper/modules";
import { FaCartShopping } from 'react-icons/fa6'

const BookCards = ({ headLine, books }) => {
  return (
    <div className="my-16 px-4 lg:px-24">
      <h2 className="text-4xl md:text-5xl text-center font-bold text-black my-5">
        {headLine}
      </h2>
<br /><br />
      {/* Cards */}
      <div className="w-full">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
          }}
          modules={[Pagination]}
          className="swiper2"
        >
          {books.slice(0, 10).map((book) => (
            <SwiperSlide className="swiper-slide2" key={book._id}>
              <Link to={`/book/${book._id}`}>
              <div className="card flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
  <div className="card-image w-full h-[200px] mb-4">
    <img
      src={book.imageURL}
      alt={book.bookTitle}
      className="w-full h-full object-cover"
    />
  </div>
  <h3 className="text-black text-lg font-medium text-center">
    {book.bookTitle}
  </h3>
  <p className="text-black text-sm font-light text-center">{book.authorName}</p>
  
  {/* Container for price and cart icon */}
  <div className="flex  items-center justify-between w-full mt-2 p-2">
    <p className="text-black text-md font-bold text-center">₹{book.price}</p>
    <div >
      <FaCartShopping className="w-6 h-6 text-black" />
    </div>
  </div>
</div>

              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BookCards;
