import React from 'react'
import { AiFillSpotify } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io5";
import { BsApple } from "react-icons/bs";
import { Link } from 'react-router-dom';




const Signup = () => {
  return (
     
    <div>
         <nav className='flex bg-black text-white p-10 text-3xl gap-3 items-center'>
            <div className='text-5xl'>
            <AiFillSpotify />
            </div>
            <h1>Spotify</h1>
         </nav>
          <div className='flex justify-center   bg-gradient-to-b from-neutral-800 to-black'>
               <div className='w-1/2 bg-zinc-900  flex justify-center mt-6 mb-16 rounded-md '>
                    <div className='flex flex-col gap-2 w-96 '>
                        <div className=' flex justify-center text-4xl text-white mt-10  mb-10 pt-5 font-sans font-bold'>
                        <h1>Log in to Spotify</h1>
                        </div>  
                        
                        <button className='p-2 rounded-full text-white font-bold border border-neutral-700  hover:border-white' >
                        <div className='flex items-center gap-11 pl-4'>
                        <FcGoogle />
                        Continue With Google
                        </div>
                        </button>
                        <button className='p-2 rounded-full text-white font-bold border border-neutral-700  hover:border-white'>
                        <div className='flex items-center gap-11 pl-4'>
                        <IoLogoFacebook />
                        Continue With Facebook
                        </div>
                        </button> 
                        <button className='p-2 rounded-full text-white font-bold border border-neutral-700  hover:border-white'>
                        <div className='flex items-center gap-11 pl-4'>
                        <BsApple />
                        Continue with Apple
                        </div>
                        </button> 
                        <button className='p-2 rounded-full text-white font-bold border border-neutral-700  hover:border-white flex justify-center'>
                        <div >
                        Continue With Phone Number
                        </div>
                        </button> 
                        <br />
                        
                        <hr />
                        <br />
                                <div className='flex flex-col gap-5'>
                                            <div className='flex flex-col gap-1'>
                                                <label htmlFor="Email or username"
                                            className='text-white font-bold' >Email or username</label>
                                            <input type="Email"
                                            placeholder='Email or username'
                                            className='p-2 text-neutral-700 bg-zinc-900  border border-neutral-700 rounded-md' />
                                            </div>
                                            <div className='flex flex-col gap-1'>
                                                <label htmlFor="Password"
                                            className='text-white font-bold' >Password</label>
                                            <input type="Password"
                                            placeholder='Password'
                                            className='p-2 text-neutral-700 bg-zinc-900  border border-neutral-700 rounded-md' />
                                            </div>
                                </div>
                        
                       <br />
                       <button className='bg-customGreen p-2  rounded-full hover:scale-110'>Log In</button>
                       <br />
                       <Link to="https://accounts.spotify.com/en/password-reset?flow_ctx=f8203278-3376-44e3-86cd-00f93f9f3c41%3A1716395561" className='text-white flex justify-center underline hover:text-customGreen'>
                       Forget your password?
                       </Link >
                       <br />
                       <hr />
                      <br />
                      <br />
                       <div className='text-white flex gap-2 justify-center'>
                        <h1>Don't have an account?</h1>
                        <Link className='underline text-white hover:text-customGreen'>Sign up for Spotify</Link>
                       </div>
                       <br />
                       <br />
                       <br />
                    </div>
                    
                </div>

           
          </div> 
          <div>
            
          </div>
          <footer className='  p-10 flex justify-center bg-zinc-900 text-slate-300 text-xs'>  <p>This site is protected by reCAPTCHA and the Google <Link to="https://policies.google.com/privacy"
          
          className='underline'>Privacy Policy </Link>  and <Link to="https://policies.google.com/terms"
           className='underline'> Terms of Service 
          </Link> apply.</p>
            </footer>  
                
    </div>
    

  )
}

export default Signup
