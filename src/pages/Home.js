import React from 'react'
import data from "../data.1"
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import Template from '../components/Template'


const Home = () => {
  return (
    
      <div className='flex bg-black '>
        <div className='w-1/6 '>
          <Template/>
        </div>

         <div className='w-5/6' >
          <Navbar/>
          <Cards data={data}/>
          <Footer/>
       </div>
      </div>
    
  )
}

export default Home
