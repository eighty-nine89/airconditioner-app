import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/customButton.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='text-center text-2xl'>
      <Navbar />
      <div className='relative'>
        <img src="../assets/home/airconditioner2.jpg" alt="Air Conditioner" className='w-full h-96 object-cover' />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-4xl'>
          {/* image text */}
          <div className='font-dancingScript text-black'>
            <h3>Professional AC and Home Appliance</h3>
            <h1>Sale, Repair and Services</h1>
          </div>
          {/* buttoms */}
          <div className='flex flex-row gap-16 justify-center align-middle mt-5 whitespace-nowrap'>
            <span className='mt-16 justify-center items-center'>
              <Link to="/shop" className='customBtn1'>
                Shop Now
              </Link>
            </span>
            <span className='mt-16 justify-center items-center'>
              <Link to=" " className='customBtn1'>
                Request Service
              </Link>
            </span>
          </div>
        </div>
      </div>
      {/* Best Seller Carousel */}
      <div>
        <div>
          <h1 className='text-3xl font-eb-garamond font-semibold mt-10'>Best Sellers</h1>
          <hr className='mt-2 w-6 text-center items-center border-2 lg:mx-auto' />
          {/* carousel */}
          <div className='carousel flex flex-row gap-5'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home