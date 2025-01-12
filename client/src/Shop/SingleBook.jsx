import React from 'react'
import { useLoaderData } from 'react-router-dom'
import NavBar from '../components/NavBar';

const SingleBook = () => {
    const book = useLoaderData(); 
    const {_id, bookTitle, imageURL} = book; 
  
    return (
      <div className='mt-28 px-4 lg:px-24'>
        <h2>{bookTitle}</h2>
        <img src={imageURL} className='h-96' alt="" />
      </div>
    )
  }
  

export default SingleBook
