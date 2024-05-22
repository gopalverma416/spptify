import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
      <div>

<div className='flex justify-evenly bg-slate-900 pt-10 pb-12'>
      <div className='text-white font-bold'>
        <h1>company</h1>
          <div className='text-gray-600'>
                <h3>About</h3>
                <h3>Jobs</h3>
                <h3>For the Record</h3>
          </div>
      </div>
      <div className='text-white font-bold'>
        <h1>Communities</h1>
         <div className='text-gray-600'>
            <h3>For Artists</h3>
            <h3>Developers</h3>
            <h3>Advertising</h3>
            <h3>Investors</h3>
            <h3>Vendors</h3>
         </div>
      </div>
      <div className='text-white font-bold'>
        <h1>Useful links</h1>
         <div  className='text-gray-600'>
            <h3>Support</h3>
            <h3>Free Mobile App</h3>
         </div>
      </div>
      <div className='text-white font-bold'>
        <h1>Spotify Plans</h1>
        <div className='text-gray-600'>
        <h3>Premium Individual</h3>
        <h3>Premium Duo</h3>
        <h3>Premium Family</h3>
        <h3>Premium Student</h3>
        <h3>Premium Student</h3>
        <h3>Spotify free</h3>
        </div>
      </div>
      <div className=' flex text-white gap-6 text-2xl'>
    <FaInstagram />
    <FaTwitter />
    <FaFacebook />
    </div>
    </div>
      <div className='bg-slate-900'>
         <hr  className='text-gray-600'/>
        <div className='pb-16 text-gray-400 ml-10 mt-7'>
        <h1>© 2024 Spotify AB</h1>
        </div>
      </div>
      </div>

  )
}

export default Footer
