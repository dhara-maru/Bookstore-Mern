import React from 'react';
import { Link } from 'react-router-dom';
import bookPic from '../assets/bart2.png';

const PromoBanner = () => {
  return (
    <div
      className="mt-16 py-12 bg-yellow-200 px-4 lg:px-24 border-black border-8"
      style={{
        boxShadow: '16px 6px 0px black',
      }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        {/* Left Section */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 leading-snug">
            <span
              className="text-black"
              style={{
                fontStyle: 'normal',
                fontFamily: '"Rubik Doodle Shadow", serif',
                fontWeight: 900,
              }}
            >
              BAM! ZAP! POW!
            </span>{' '}
            Dive into the Wildest Comics of 2025 🦹🏽
          </h2>
          <p className="text-lg font-medium text-gray-800 mb-6">
            Why just read when you can *experience* the action?  
            Don't let your favorite heroes and villains wait!  
            Click below to unlock the world of epic stories!
          </p>
          <Link to="/shop" className="block">
            <button className="bg-black text-yellow-500 font-semibold px-5 py-3 hover:bg-yellow-500 hover:text-black transition-all duration-300">
              Get Your Superpowers!
            </button>
          </Link>
        </div>

        {/* Right Section */}
        <div>
          <img
            src={bookPic}
            alt="Epic Comic Adventures"
            className="w-50 animate-float"
          />
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
