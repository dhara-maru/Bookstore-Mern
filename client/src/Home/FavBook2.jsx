import React from "react";
import FavBookimg from "../assets/deadpool.png";
import { Link } from "react-router-dom";

const FavBook2 = () => {
  return (
    <div className="px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12">
      {/* Left Section - Image */}
      <div className="md:w-1/2" style={{
              marginLeft: "60px",
              fontFamily: '"Rubik Doodle Shadow", serif',
              fontWeight: 900,
            }}>
        <img
          src={FavBookimg}
          alt="Favorite Books"
          className="rounded-md w-10/12 animate-float"
        />
      </div>

      {/* Right Section - Text */}
      <div className="md:w-1/2 space-y-6 m-6">
        <h1 className="text-7xl font-bold my-5 md:my-3 leading-snug">
          Fall in Love with{" "}
          <span
            className="text-yellow-500"
            style={{
              fontStyle: "normal",
              fontFamily: '"Rubik Doodle Shadow", serif',
              fontWeight: 900,
            }}
          >
            Comics! ♡
          </span>{" "}
          
        </h1>
        <p className="text-base md:text-lg md:leading-8">
          Brace yourself for hilarious banter, jaw-dropping action, and
          heartwarming stories! Whether you’re here for the laughs, the feels,
          or the pure chaos, Deadpool approves this message (with a side of
          chimichangas). 🌮
        </p>
        <div className="flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14">
          <div>
            <h3 className="text-3xl font-bold">8000+</h3>
            <p className="text-base">Epic Comics Available</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">550+</h3>
            <p className="text-base">Loyal Fans Like You</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">1200+</h3>
            <p className="text-base">Laughs Delivered Daily</p>
          </div>
        </div>

        <Link to={"/shop"}>
        <button className='bg-black px-6 py-2 my-9 text-white font-medium hover:bg-yellow-600 font-bold transition-all ease-in duration-200'>
              Explore More 📚
            </button>
            </Link>
      </div>
    </div>
  );
};

export default FavBook2;
