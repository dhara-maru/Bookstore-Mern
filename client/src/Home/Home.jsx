import React from 'react'
import Banner from '../components/Banner'
import FavoriteBooks from './FavoriteBooks'
import FavBook2 from './FavBook2'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Review from './Review'
const Home = () => {
  return (<>
    <Banner></Banner>
    <FavoriteBooks></FavoriteBooks>
    <FavBook2></FavBook2>
    <PromoBanner></PromoBanner>
    <OtherBooks></OtherBooks>
    <Review></Review>
    </>
  )
}

export default Home
