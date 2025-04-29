import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaStore, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='Navbar cursor-pointer'>
            {/* Fixed mini header */}
            <div className='w-full bg-light-gray fixed z-40 lg:px-64'>
                <div className="flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between mx-auto h-10">
                    {/* Phone and Email */}
                    <div className='flex flex-col lg:flex-row gap-2 items-center'>
                        {/* phone */}
                        <h4 className="text-xs lg:text-center font-light text-black my-2 lg:my-auto">
                            <span className='font-bold'>Phone:</span> +233 000000000 or +233 000000000
                        </h4>
                        {/* email */}
                        <h4 className="text-xs text-center lg:visible invisible font-light text-black my-2 lg:my-auto">
                            <span className='font-bold'>Email: </span>airconditionservices@email.com
                        </h4>
                    </div>
                    {/* Open Hours and Social Media */}
                    <div className="flex flex-col lg:flex-row gap-2 text-xs items-center">
                        {/* open hours */}
                        <div className='openhours lg:visible invisible my-2 lg:my-auto'>
                            <h4><span className='font-bold'>Open Hours: </span>8:00 am - 8:00 pm</h4>
                        </div>
                        {/* social media */}
                        <div className='socialmedia lg:visible invisible flex flex-row gap-2 my-2 lg:my-auto'>
                            <h4 className='font-bold'> Follow Us:</h4>
                            <div className='flex flex-row gap-2 font-light my-auto'>
                                <a href=" " target="_blank" rel="noreferrer"><FaWhatsapp className="w-fit text-dark-gray hover:text-black" /></a>
                                <a href=" " target="_blank" rel="noreferrer"><FaInstagram className="w-fit text-dark-gray hover:text-black" /></a>
                                <a href=" " rel="noreferrer"><FaLinkedin className="w-fit text-dark-gray hover:text-black" /></a>
                                <a href=" " target="_blank" rel="noreferrer"><FaTiktok className="w-fit text-dark-gray hover:text-black" /></a>
                                <a href=" " target="_blank" rel="noreferrer"><FaFacebook className="w-fit text-dark-gray hover:text-black" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Navbar */}
            <div className='w-full h-20 pt-10 px-5 bg-white lg:px-64 flex flex-row text-center justify-between relative'>
                {/* Logo */}
                <div className='flex flex-row gap-2 lg:my-auto'>
                    <FaStore className="w-fit text-2xl my-auto" />
                    <Link to='/'>
                        <h4 className="font-light uppercase lg:visible invisible whitespace-nowrap text-sm">
                            air conditioner store
                        </h4>
                    </Link>
                </div>
                {/* links */}
                <div className='flex flex-row gap-5 lg:my-auto whitespace-nowrap'>
                    <Link to="/"><h4 className="text-sm items-baseline font-light text-gray hover:text-black">Home</h4></Link>
                    <Link to="/products"><h4 className="text-sm font-light text-gray hover:text-black">Products</h4></Link>
                    <Link to="/services"><h4 className="text-sm font-light text-gray hover:text-black">Services</h4></Link>
                    <Link to="/aboutus"><h4 className="text-sm font-light text-gray hover:text-black">About Us</h4></Link>
                    <Link to="/contactus"><h4 className="text-sm font-light text-gray hover:text-black">Contact Us</h4></Link>
                    {/* search input */}
                </div>
                <div className="lg:my-auto flex flex-row gap-5">
                    <input type='search' placeholder="Search here..." className='w-full border-2 border-x-0 border-t-0 border-y-3 outline-none border-gray focus:border-black px-2 font-light text-sm' />
                </div>
            </div>
        </div>
    )
}

export default Navbar;
