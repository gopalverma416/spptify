import React from 'react'
import { Link } from 'react-router-dom';
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";


const Navbar = () => {
  return (
      
     <div className='flex flex-row justify-between bg-black pb-2 pt-2 ' >
             <div className='flex gap-x-8 items-center'>
                        <div className='flex text-white gap-4 ml-4'>  
                        <div >
                        <FaAngleLeft />
                        </div>
                        <div>
                        <FaAngleRight />
                        </div>
                    </div >
                    <div className='relative'>
                        <input
                            type='text'
                            placeholder='What do you want to play?'
                            name='search'
                            className='border-solid rounded-lg py-2 pl-8' // Add left padding to accommodate the icon
                        />
                        <IoIosSearch className='absolute left-2 top-3 text-gray-900' /> // Position the icon absolutely within the input field
                        </div>
                
            </div>
            <div className='flex gap-5 mt-2 '>
                <div>
                        <Link to="/signup">
                        <button className='items-center p-2 text-black bg-white rounded-full px-4 '>Sign up</button>
                        </Link>
                    
                </div>
                <div>
                    <Link to="/Login">
                    <button className=' items-center p-2 text-black bg-white rounded-full  px-8 '>Log in</button>
                    </Link>
                    
                </div>
            </div>
     </div>
    

    
  )
}

export default Navbar
