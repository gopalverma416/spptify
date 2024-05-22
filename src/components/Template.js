import React from 'react'
import { Link } from 'react-router-dom';
import { FaSpotify } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { VscLibrary } from "react-icons/vsc";
import { TbWorld } from "react-icons/tb";


const Template = () => {
  return (
    <div className='bg-black  p-3 ' >
        
    <div className='  bg-slate-900 text-gray-400 items-center rounded-lg' >
        <br />
        <Link to="https://open.spotify.com">
        <div className=' flex gap-3 text-2xl p-2'>
         <FaSpotify /> 
         <button>Spotify</button>
         </div>
        </Link>
         
         <Link to="/">
         <div className=' flex  gap-3 text-2xl p-2'>
         <IoHomeOutline />
         <button>Home</button>
         </div>
         </Link>
        <Link to="/">
        <div className=' flex  gap-3 text-2xl p-2 '>
         <FaSearch />
         <h1>Search</h1>
         </div>
        </Link>
         
         </div>
         <br />
         <div className='  bg-slate-900 text-gray-400  rounded-lg'>
            <div className='flex justify-between'>
                <div className='flex gap-3 text-2xl p-2'>
                <VscLibrary />
                     <button>Your Library</button>
                </div>
                <div className='text-2xl flex items-center'>
               <button><FiPlus /></button> 
                </div>
              
            
            </div>
                 <div className='bg-zinc-400 text-white rounded-lg pb-3'>
                   <br />
                   <h1>Create Your Playlist</h1>
                   <div className='text-sm'>
                    <h3>its easy, we will help you</h3>
                   </div>
                   <br />
                   <div className=' flex  justify-center text-black  bg-white rounded-full  p-3'>
                   <button>Create PlayList</button>
                    <br />
                   </div>
                   

                </div>
                <br />
                
                <div className='bg-zinc-400 text-white rounded-lg pb-3'>
                   <br />
                   <h1>Lets find some Podcasts to follow</h1>
                   <div className='text-xs'>
                    <h3>we will keep you updated on new episodes</h3>
                   </div>
                   <br />
                   <div className=' flex  justify-center text-black  bg-white rounded-full  p-3'>
                   <button>Create PlayList</button>
                    <br />
                   </div>
                </div>
                <br />
                <br />
                <br />
                <div className='flex flex-wrap text-sm gap-3'>
                    <div>
                        <h1>Legal</h1>
                    </div>
                    <div>
                        <h1>Safety & privacy center</h1>
                    </div>
                    <div>
                        <h1>Privacy Policy</h1>
                    </div>
                    <div>
                        <h1>Cookies</h1>
                    </div>
                    <div>
                        <h1>About ads</h1>
                    </div>
                    <div>
                        <h1>Cookies</h1>
                    </div>
                   
                    
                </div>
               
                    <br /> 
                    <div className= ' flex justify-center items-center text-black bg-white rounded-full boarder-white'>
                    <TbWorld />
                    <button>English</button>
                    </div>
                    
                    
         </div>
  
    </div>
  )
}

export default Template
