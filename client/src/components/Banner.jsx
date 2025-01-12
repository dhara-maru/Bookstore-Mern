import React from 'react';
import BannerCard from '../Home/BannerCard';

const Banner = () => {
  return (
    <div className='px-1 lg:px-10 flex items-center'>
      <div className="flex flex-col md:flex-row justify-between w-full items-center gap-8 py-20">
        {/* Left Side */}
        <div className='md:w-1/2 space-y-6 mx-10'>
        <h1 className='text-7xl font-bold leading-tight text-black'>
  Discover & Trade{' '}
  <span className='text-yellow-500'  
  style={{

    fontStyle: 'normal',
    fontFamily: '"Rubik Doodle Shadow", serif',
    fontWeight: 900,
  }}
>
  Rare Comic Treasures
</span>

</h1>

          <p className='md:w-4/5'>
            Dive into a world of stunning comics! Whether you're looking to buy, sell, or explore the latest collections, we offer the best deals and rare finds. Join a community of passionate collectors today.
          </p>

          <div>
            <input
              type="search"
              name='search'
              id='search'
              placeholder='Search for your Favorite Comic'
              className='py-2 px-2 rounded-s-sm outline-none'
            />
            <button className='bg-black px-6 py-2 text-white font-medium hover:bg-yellow-600 font-bold transition-all ease-in duration-200'>
              Find Your Comic
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className='my-5 md:my-0'>
          <BannerCard />
        </div>
      </div>
    </div>
  );
};

export default Banner;
