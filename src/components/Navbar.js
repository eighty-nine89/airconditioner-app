import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa6";

const Navbar = () => {
    return (
        <div className='Navbar cursor-pointer'>
            {/* Fixed mini header */}
            <div className='w-full bg-light-gray fixed z-40 lg:px-80'>
                <div className="flex flex-row gap-5 lg:items-center lg:justify-between mx-auto h-10">
                    <div className='flex flex-row gap-2'>
                        {/* phone */}
                        <h4 className="text-xs lg:text-center font-light text-black my-auto">
                            <span className='font-bold'>Phone:</span> +233 000000000 or +233 000000000
                        </h4>
                        {/* email */}
                        <h4 className="text-xs text-center invisible lg:visible font-light text-black my-auto">
                            <span className='font-bold'>Email: </span>airconditionservices@email.com
                        </h4>
                    </div>
                    <div className="flex flex-row gap-2 text-xs">
                        {/* open hours */}
                        <div className='openhours  invisible lg:visible'>
                            <h4><span className='font-bold'>Open Hours: </span>8:00 am - 8:00 pm</h4>
                        </div>
                        {/* social media */}
                        <div className='socialmedia  invisible lg:visible flex flex-row gap-2'>
                            <h4 className='font-bold'> Follow Us:</h4>
                            <div className='flex flex-row gap-2 font-light my-auto'>
                                <a href=" " target="_blank" rel="noreferrer"><FaInstagram className="w-fit hover:text-accent" /></a>
                                <a href=" " rel="noreferrer"><FaLinkedin className="w-fit hover:text-accent" /></a>
                                <a href=" " target="_blank" rel="noreferrer"><FaTiktok className="w-fit hover:text-accent" /></a>
                                <a href=" " target="_blank" rel="noreferrer"><FaFacebook className="w-fit hover:text-accent" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Navbar */}
        </div>
    )
}

export default Navbar