import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import { Avatar } from 'flowbite-react';
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpeg';
import p4 from '../assets/p4.jpg';
import p5 from '../assets/p5.jpg';
import p6 from '../assets/p6.jpg';

const reviews = [
  {
    img: p3,
    name: "Dhara M.",
    review: "This place is a superhero's secret lair! I found comics I didn't even know existed, and my collection just got supercharged. 10/10!",
  },
  {
    img: p2,
    name: "John D.",
    review: "The best comic book store ever! I can find rare editions and the latest releases, all in one place. Great Service. Highly recommended!",
  },
  {
    img: p1,
    name: "Alex S.",
    review: "An absolute must-visit for comic book fans! I always find hidden gems here. The atmosphere is awesome, and they offer great deals.",
  },
  {
    img: p4,
    name: "Sara T.",
    review: "I've been coming here for years, and the experience just keeps getting better. A huge selection and the staff knows their stuff!",
  },
  {
    img: p5,
    name: "David W.",
    review: "Fantastic selection and great prices! I can always find something new and exciting here. Love the vibe and the staff is amazing.",
  },
  {
    img: p6,
    name: "James P.",
    review: "This is my go-to store for all things comic books. They’ve got everything you could want and more. Highly recommend it to fellow enthusiasts!",
  },
];

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="my-12 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center mb-10 leading-snug">
        Heroic Reviews from the Fans
      </h2>

      <div className="flex justify-center">
        {/* Carousel Wrapper */}
        <div className="relative w-full lg:w-3/4 sm:w-11/12 md:w-10/12">
          {/* Previous Button */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-white p-4 rounded-full shadow-lg hover:bg-black"
            onClick={goToPrevious}
          >
            &#10094;
          </button>

          {/* Review Card */}
          <div className="flex justify-center items-center myrcard222">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md sm:max-w-sm md:max-w-md mx-4">
              <div className="text-amber-500 flex gap-2 mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-gray-700 mb-4">{reviews[currentIndex].review}</p>
              <div className="flex items-center">
                <Avatar img={reviews[currentIndex].img} rounded bordered color="purple" className="w-12" />
                <div className="ml-4">
                  <h5 className="font-semibold">{reviews[currentIndex].name}</h5>
                  <p className="text-sm text-gray-500">A happy customer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-white p-4 rounded-full shadow-lg hover:bg-black"
            onClick={goToNext}
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
