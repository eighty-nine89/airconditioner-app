import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/customButton.css';
import '../styles/customGallery.css';
import { Link } from 'react-router-dom';
import { PiMapPinArea } from 'react-icons/pi';
import { MdOutlineEmail } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';
import { IoTimeOutline } from 'react-icons/io5';
import { LiaToolsSolid } from 'react-icons/lia';
import { CiSettings } from 'react-icons/ci';
import { FaScaleBalanced, FaUserCheck } from 'react-icons/fa6';
import Footer from '../components/Footer';
import { Preloader } from '../components/Preloader';

const Home = () => {
  return (
    <div className='text-center text-2xl cursor-pointer'>
      <Preloader />
      <Navbar />
      <div className='relative'>
        <img src="../assets/home/ac.webp" alt="Air Conditioner" className='w-full lg:h-96 lg:object-cover object-contain' />
        <div className='absolute left-20 top-7 lg:top-1/2 lg:left-72 transform -translate-x-1/2 -translate-y-1/2 font-bold text-xl lg:text-4xl'>
          {/* buttons */}
          <div className='flex flex-row gap-16 justify-center align-middle mt-32 whitespace-nowrap'>
            <span className='mt-16 justify-center items-center'>
              <Link to="/products" className='customBtn1'>
                Shop Now
              </Link>
            </span>
          </div>
        </div>
      </div>
      {/* Best Seller Carousel */}
      <div className='relative'>
        <div>
          <h1 className='text-3xl font-eb-garamond font-semibold mt-10'>Best Sellers</h1>
          <hr className='mt-5 w-6 mx-auto text-center items-center border-2 lg:mx-auto' />
        </div>
        {/* carousel */}
        <div className='flex flex-col lg:px-40 px-5 mx-auto gap-5'>
          {/* product images */}
          <div className='flex flex-row flex-wrap justify-center items-center flex-1 w-full h-full mx-auto lg:mb-10 mt-10 lg:px-0 lg:mt-10 mb-10 gap-5 lg:gap-10'>
            <div className='otherProduct '>
              <img src='../assets/products/airconditioner3.jpg' alt='air condition' className='w-52 h-80 object-cover rounded-3xl shadow-sm' />
              <h2 className='text-center mt-2 font-light text-lg tracking-tight capitalize'>Hisense air condition</h2>
              <p className='text-xl text-center mt-1 text-gray hover:text-black'>₵ 4180.<span className='text-xs'>00</span></p>
            </div>
            <div className='otherProduct'>
              <img src='../assets/products/airconditioner3.jpg' alt='Hisense air condition' className='w-52 h-80 object-cover rounded-3xl shadow-sm' />
              <h2 className='text-center mt-2 font-light text-lg tracking-tight capitalize'>Hisense air condition</h2>
              <p className='text-xl text-center mt-1 text-gray hover:text-black'>₵ 4180.<span className='text-xs'>00</span></p>
            </div>
            <div className='otherProduct'>
              <img src='../assets/products/airconditioner3.jpg' alt='Hisense air condition' className='w-52 h-80 object-cover rounded-3xl shadow-sm' />
              <h2 className='text-center mt-2 font-light text-lg tracking-tight capitalize'>Hisense air condition</h2>
              <p className='text-xl text-center mt-1 text-gray hover:text-black'>₵ 4180.<span className='text-xs'>00</span></p>
            </div>
            <div className='otherProduct'>
              <img src='../assets/products/airconditioner3.jpg' alt='Hisense air condition' className='w-52 h-80 object-cover rounded-3xl shadow-sm' />
              <h2 className='text-center mt-2 font-light text-lg tracking-tight capitalize'>Hisense air condition</h2>
              <p className='text-xl text-center mt-1 text-gray hover:text-black'>₵ 4180.<span className='text-xs'>00</span></p>
            </div>
            <div className='otherProduct'>
              <img src='../assets/products/airconditioner3.jpg' alt='Hisense air condition' className='w-52 h-80 object-cover rounded-3xl shadow-sm' />
              <h2 className='text-center mt-2 font-light text-lg tracking-tight capitalize'>Hisense air condition</h2>
              <p className='text-xl text-center mt-1 text-gray hover:text-black'>₵ 4180.<span className='text-xs'>00</span></p>
            </div>
          </div>
        </div>
      </div>
      {/* our services */}
      <div className='relative bg-light-gray'>
        <div className='pt-10'>
          <h1 className='text-3xl font-eb-garamond font-semibold'>Our Services</h1>
          <hr className='mt-5 w-6 mx-auto text-center items-center border-2 lg:mx-auto' />
        </div>
        {/* our services */}
        <div className='flex flex-col lg:px-40 px-5 mx-auto gap-5'>
          <div className='flex flex-col lg:flex-row justify-center items-center flex-1 w-full h-full mx-auto mt-10 lg:px-0 lg:mt-10 mb-16 lg:mb-16 gap-5 lg:gap-10'>
            <div className='otherProduct'>
              <img src='../assets/ourservices/acrepairer.jpg' alt='air condition' className='w-full h-48 object-cover rounded-3xl shadow-sm' />
              <p className='text-gray text-lg capitalize'>Installation</p>
              <p className='text-justify mt-2 tracking-tighter font-light text-sm capitalize'>
                Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
              </p>
              <Link to='/services'>
                <button type='submit' className='border-x border-y mt-3 hover:text-white hover:bg-dark-gray text-sm pl-4 pr-4 rounded-md p-2 capitalize'>learn more</button>
              </Link>
            </div>
            <div className='otherProduct'>
              <img src='../assets/ourservices/acrepairer.jpg' alt='air condition' className='w-full h-48 object-cover rounded-3xl shadow-sm' />
              <p className='text-lg text-gray capitalize'>Annual Maintainance Services</p>
              <p className='text-justify tracking-tighter mt-2 font-light text-sm capitalize'>
                Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
              </p>
              <Link to='/services'>
                <button type='submit' className='border-x border-y mt-3 hover:text-white hover:bg-dark-gray text-sm pl-4 pr-4 rounded-md p-2 capitalize'>learn more</button>
              </Link>            </div>
            <div className='otherProduct'>
              <img src='../assets/ourservices/acrepairer.jpg' alt='air condition' className='w-full h-48 object-cover rounded-3xl shadow-sm' />
              <p className='text-gray text-lg capitalize'>Reparation</p>
              <p className='text-justify mt-2 tracking-tighter font-light text-sm capitalize'>
                Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
              </p>
              <Link to='/services'>
                <button type='submit' className='border-x border-y mt-3 hover:text-white hover:bg-dark-gray text-sm pl-4 pr-4 rounded-md p-2 capitalize'>learn more</button>
              </Link>            </div>
            <div className='otherProduct'>
              <img src='../assets/ourservices/acrepairer.jpg' alt='air condition' className='w-full h-48 object-cover rounded-3xl shadow-sm' />
              <p className='text-gray text-lg capitalize'>Replacement</p>
              <p className='text-justify mt-2 tracking-tighter font-light text-sm capitalize'>
                Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
              </p>
              <Link to='/services'>
                <button type='submit' className='border-x border-y mt-3 hover:text-white hover:bg-dark-gray text-sm pl-4 pr-4 rounded-md p-2 capitalize'>learn more</button>
              </Link>            </div>
          </div>
        </div>
      </div>
      {/* why us */}
      <div className='relative lg:mb-10 mb-10 lg:px-0 mx-auto w-full'>
        <div className='pt-10'>
          <h1 className='text-3xl font-eb-garamond font-semibold capitalize'>Why us</h1>
          <hr className='mt-5 w-6 text-center items-center mx-auto border-2 lg:mx-auto' />
        </div>
        {/* why  us features */}
        <div className='flex flex-col flex-2 lg:pt-10 lg:pb-16 lg:flex-row justify-between items-center w-full h-full mx-auto lg:px-80 mb-10 lg:mb-10 mt-5 gap-2 lg:gap-1'>
          <div className="flex flex-col justify-center items-center text-center w-full h-full lg:gap-5 gap-5">
            <div className='flex flex-col lg:flex-row items-center lg:gap-5 gap-5 text-lg text-gray capitalize'>
              <LiaToolsSolid className='text-6xl text-gray hover:text-black' />
              <p>Highly effective services </p>
            </div>
            <div className='flex flex-col lg:flex-row items-center lg:gap-5 gap-5 text-lg text-gray capitalize'>
              <CiSettings className='text-6xl text-gray hover:text-black' />
              <p>customize resolution</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full h-full lg:gap-5 gap-5">
            <div className='flex flex-col lg:flex-row items-center lg:gap-5 gap-5 text-lg text-gray capitalize'>
              <FaUserCheck className='text-6xl text-gray hover:text-black' />
              <p>Expect teams of professionals </p>
            </div>
            <div className='flex flex-col lg:flex-row items-center lg:gap-5 gap-5 text-lg text-gray capitalize'>
              <FaScaleBalanced className='text-6xl text-gray hover:text-black' />
              <p>Norminal prices of products </p>
            </div>
          </div>
        </div>
      </div>
      {/* about us */}
      <div className='relative flex flex-row justify-between gap-10 items-center w-full h-80 bg-light-gray lg:mb-10 mb-10'>
        {/* Image */}
        <div className='flex-1 lg:visible invisible justify-center items-center w-full h-full'>
          <img src="../assets/home/airconditioner.jpg" alt="Air Conditioner" className='w-full h-80 object-cover' />
        </div>
        {/* About us */}
        <div className='flex flex-col lg:flex-1 justify-center items-center w-full h-full'>
          <h1 className='text-3xl font-eb-garamond font-semibold'>About us</h1>
          <hr className='mt-5 w-6 text-center items-center border-2 lg:mx-auto' />
          <p className='text-justify mt-5 tracking-tighter font-light text-sm capitalize pr-4 pl-4'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
          </p>
          <span className='justify-center mt-2'>
            <Link to="/aboutus"><p className='capitalize text-gray hover:text-black font-light text-base lg:text-base underline'>read More</p></Link>
          </span>
        </div>
      </div>
      {/* Gallery */}
      <div className='w-full flex flex-col text-center justify-center px-4 sm:px-10 lg:px-52 xl:px-80 mx-auto'>
        <div className='text-center'>
          <h1 className='text-3xl font-eb-garamond font-semibold capitalize'>our gallery</h1>
          <hr className='mt-5 w-6 text-center items-center border-2 mx-auto lg:mx-auto' />
        </div>
      </div>
      <div className='backgroundImg mt-16 mb-16 px-4 sm:px-10 lg:px-32 xl:px-80'>
        <div className='gallery grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
          {["autumn.jpg", "autumn.jpg", "autumn.jpg", "autumn.jpg", "autumn.jpg", "autumn.jpg"].map((img, index) => (
            <div className='cardImg' key={index}>
              <figure>
                <img src={`../assets/gallery/${img}`} alt='Preview' className='w-full h-auto rounded-lg shadow-md' />
              </figure>
            </div>
          ))}
        </div>
      </div>
      {/* Contact Us */}
      <div className='relative lg:px-52 bg-light-gray'>
        <div className='lg:pt-10 pt-10'>
          <h1 className='text-3xl font-eb-garamond font-semibold capitalize'>contact us</h1>
          <hr className='mt-5 w-6 text-center mx-auto items-center border-2 lg:mx-auto' />
        </div>
        {/* information */}
        <div className='flex flex-col lg:flex-row justify-between items-center w-full h-full mx-auto mt-5 lg:px-0 lg:mt-10 lg:pb-16 pb-16 gap-2 lg:gap-1'>
          <div className='lg:border-r lg:border-y-0 border-b text-justify tracking-tighter mt-3 text-sm pl-4 pr-4 p-6'>
            <div className='flex justify-center items-center'>
              <PiMapPinArea className='text-3xl text-gray hover:text-black' />
            </div>
            <h3 className='text-center text-lg text-gray hover:text-black mt-1 mb-1  capitalize'> Our Office Address</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
            </p>
          </div>
          <div className='lg:border-r lg:border-y-0 border-b text-justify tracking-tighter mt-3 text-sm pl-4 pr-4 p-6'>
            <div className='flex justify-center items-center'>
              <MdOutlineEmail className='text-3xl text-gray hover:text-black' />
            </div>
            <h3 className='text-center text-lg text-gray hover:text-black mt-1 mb-1  capitalize'> general enquires</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
            </p>
          </div>
          <div className='lg:border-r lg:border-y-0 border-b text-justify tracking-tighter mt-3 text-sm pl-4 pr-4 p-6'>
            <div className='flex justify-center items-center'>
              <FiPhoneCall className='text-3xl text-gray hover:text-black' />
            </div>
            <h3 className='text-center text-lg text-gray hover:text-black mt-1 mb-1  capitalize'> Call Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
            </p>
          </div>
          <div className='text-justify tracking-tighter mt-3 text-sm pl-4 pr-4 p-6'>
            <div className='flex justify-center items-center'>
              <IoTimeOutline className='text-3xl text-gray hover:text-black' />
            </div>
            <h3 className='text-center text-lg text-gray hover:text-black mt-1 mb-1  capitalize'> Our timings</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
            </p>
          </div>
        </div>
      </div>
      {/* get direction */}
      <div className='relative lg:mb-10 mb-10 lg:px-0 bg-light-gray'>
        <div>
          <h1 className='text-3xl font-eb-garamond font-semibold capitalize'>get direction</h1>
          <hr className='mt-5 w-6 text- mx-auto items-center border-2 lg:mx-auto' />
        </div>
        {/* embedded link */}
        <div className='text-center justify-center mx-auto mt-10 lg:px-52 lg:mt-10 mb-10 lg:mb-10 gap-2 lg:gap-1 lg:pb-10 pb-10'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4265.6315904913345!2d-0.19051548916495678!3d5.579549533388508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a605123e529%3A0x622c2126d77ed35e!2sJubilee%20House!5e1!3m2!1sen!2sgh!4v1745841728052!5m2!1sen!2sgh"
            width="100%"
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Embed - Jubilee House">
          </iframe>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  )
}

export default Home