import React from 'react'

const Banner = () => {
  return (
    <div className='px-4 lg_px-24 flex items-center'>
      <div className="flex flex-col md:flex-row justify-between w-full items-center gap-12 py-40">
        {/* left side  */}
        <div className='md:w-1/2 space-y-8 h-full mx-20'>
    <h2 className='text-6xl font-bold leading-snug text-black'>
        Discover & Trade <span className='text-yellow-500'>Rare Comic Treasures</span>
    </h2>
    <p className='md:w-4/5'>
        Dive into a world of stunning comics! Whether you're looking to buy, sell, or explore the latest collections, we offer the best deals and rare finds. Join a community of passionate collectors today.
    </p>

    <div>
        <input type="search" name='search' id='search' placeholder='Search for your Favorite Comic' className='py-2 px-2 rounded-s-sm outline-none' />
        <button className='bg-black px-6 py-2 text-white font-medium hover:bg-yellow-600 font-bold transition-all ease-in duration-200'>
            Find Your Comic
        </button>
    </div>
</div>


        {/* right side  */}
        <div>right</div>




      </div>
    </div>
  )
}

export default Banner
