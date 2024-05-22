import React from 'react'
import { AiFillSpotify } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io5";
import { BsApple } from "react-icons/bs";
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div>
       <nav className='flex bg-zinc-900  text-white p-10 text-2xl gap-3 items-center'>
            <div className='text-4xl'>
            <AiFillSpotify />
            </div>
            <h1>Spotify</h1>
         </nav>
         <div className='flex justify-center   h-screen  bg-zinc-900'>
            <div className='w-1/2  flex justify-center'>
             <div className=' w-96'>
                <div className='text-white text-5xl font-bold'>
                <h1>Sign up to start listening</h1>
                </div>
                <br />
                <br />
                <div className='flex flex-col gap-2'>
                    <label htmlFor="Email address"
                    className='text-white '>Email address</label>
                    <input type="text"
                    placeholder='name@domain.com'
                    className='p-2 border rounded-md bg-zinc-900 border-neutral-700 '
                     />
                     <div className='text-customGreen underline'>
                        <p>Use phone number instead</p>
                     </div>
                     <br />
                     <button className='bg-customGreen text-black p-2 font-bold rounded-full'>
                        Next
                     </button>
                     <br />
                     <div className="flex items-center">
                          <hr className="flex-grow border-t border-neutral-700" />
                         <span className="px-3 text-white">or</span>
                         <hr className="flex-grow border-t border-neutral-700" />
                       </div>
                       <br />
                       
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
                        <br />
                      <hr />
                      <br />
                      <div className='flex  justify-center gap-2'>
                        <h1 className='text-slate-400'>Already have an account</h1>
                        <Link >
                        <div className='underline text-white'> Log in here.</div>
                        </Link>
                      </div>
                      <div className='text-slate-400'>
                      <p>This site is protected by reCAPTCHA and the Google <Link to="https://policies.google.com/privacy"
                            className='underline'>Privacy Policy </Link>  and <Link to="https://policies.google.com/terms"
                            className='underline'> Terms of Service 
                            </Link> apply.</p>
                      </div>
                     
                </div>
                
             </div>
            </div>

         </div>
    </div>
  )
}

export default Login
