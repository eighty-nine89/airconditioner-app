import React from 'react';
import { CiFacebook, CiLinkedin } from 'react-icons/ci';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaQuestion } from 'react-icons/fa6';
import { IoStorefrontOutline } from 'react-icons/io5';
import { LuContact } from 'react-icons/lu';
import { MdDeliveryDining, MdOutlineDesignServices, MdOutlinePolicy, MdProductionQuantityLimits } from 'react-icons/md';
import { RiGalleryFill } from 'react-icons/ri';
// import { TbAirConditioning } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='Footer cursor-pointer'>
            <div className='flex flex-col lg:flex-row lg:justify-between w-full mx-auto px-6 lg:px-52 mb-10 gap-10 md:gap-0'>
                <div className='flex flex-col mt-5 text-sm lg:items-start items-center'>
                    <div className='lg:mx-auto lg:items-start text-center'>
                        <Link to="/" className='flex flex-row gap-2 items-center'>
                        <img src="../assets/home/ac-favicon.png" alt="Logo" className="w-5 h-5 lg:w-6 lg:h-6 my-auto items-center" />
                        <h4 className='text-lg uppercase font-light font-pt-serif text-center text-decoration-none'>MegaTech Cooling Services</h4>
                        </Link>
                    </div>
                    <p className='font-light lg:text-center text-xl font-dancingScript'>MegaTech, Cooling Time...</p>
                </div>
                <div className='items-center text-center lg:items-start mx-auto mt-5'>
                    <ul className='flex flex-col gap-4 lg:gap-4 whitespace-nowrap font-light text-sm'>
                        <Link to="/products"><li className='hover:text-black text-dark-gray capitalize flex flex-row items-center gap-1' target='_blank' rel='noreferrer'><MdProductionQuantityLimits /> Products</li></Link>
                        <Link to="/aboutus"><li className='hover:text-black text-dark-gray capitalize flex flex-row items-center gap-1' target='_blank' rel='noreferrer'><IoStorefrontOutline /> About Us</li></Link>
                        <Link to="/services"><li className='hover:text-black text-dark-gray capitalize flex flex-row items-center gap-1' target='_blank' rel='noreferrer'><MdOutlineDesignServices /> Services</li></Link>
                        <Link to="/contactus"><li className='hover:text-black text-dark-gray capitalize flex flex-row items-center gap-1' target='_blank' rel='noreferrer'><LuContact /> Contact us</li></Link>
                    </ul>
                </div>
                <div className='items-center text-center lg:items-start mx-auto mt-5'>
                    <ul className='flex flex-col gap-4 md:gap-4 whitespace-nowrap font-light text-sm'>
                        <Link to=""><li className='hover:text-black text-dark-gray capitalize flex flex-row items-center gap-1' target='_blank' rel='noreferrer'><FaInstagram /> Instagram</li></Link>
                        <Link to=""><li className='hover:text-black text-dark-gray capitalize flex flex-row items-center gap-1' target='_blank' rel='noreferrer'><CiFacebook /> facebook</li></Link>
                        <Link to=""><li className='hover:text-black text-dark-gray capitalize flex flex-row items-center gap-1' target='_blank' rel='noreferrer'><FaWhatsapp /> Whatsapp</li></Link>
                        <Link to=""><li className='hover:text-black text-dark-gray capitalize flex flex-row items-center gap-1' target='_blank' rel='noreferrer'><CiLinkedin /> LinkedIn</li></Link>
                    </ul>
                </div>
                <div className='items-center text-center lg:items-start mx-auto mt-5'>
                    <ul className='flex flex-col gap-4 lg:gap-4 whitespace-nowrap font-light text-sm'>
                        <Link to="/gallery"><li className='hover:text-black text-dark-gray capitalize flex flex-row items-center gap-1'><RiGalleryFill /> Gallery</li></Link>
                        <Link to="/faqs"><li className='hover:text-black text-dark-gray capitalize flex flex-row items-center gap-1'><FaQuestion /> FAQs</li></Link>
                        <Link to="/deliverypolicy"><li className='hover:text-black text-dark-gray capitalize flex flex-row items-center gap-1'><MdDeliveryDining /> Delivery & Service Policy</li></Link>
                        <Link to="/storepolicy"><li className='hover:text-black text-dark-gray capitalize flex flex-row items-center gap-1'><MdOutlinePolicy /> Store Policy</li></Link>
                    </ul>
                </div>
                <div className='items-center text-center lg:items-start mt-5 w-full lg:w-auto'>
                    <h4 className='font-bold text-xl tracking-wider lg:text-start text-center'>Join Us!</h4>
                    <p className='text-sm lg:text-sm text-center text-gray'>subscribe to our newstletter</p>
                    <form action={'https://formsubmit.co/megatechcoolingservicesgh@gmail.com'} method='POST'>
                        <div className='flex flex-col mt-2 font-light text-sm items-start'>
                            <label htmlFor='email'>Email<span className='text-red'>*</span></label>
                            <input
                                type='email'
                                name='email'
                                placeholder='Enter email here'
                                title='subscribe to receive new producs update'
                                className='mt-2 border-2 border-x-0 border-t-0 border-y border-gray focus:border-black focus:outline-none border-slate w-full'
                                required
                            />
                        </div>
                        <button type='submit' className='p-2 text-sm border border-accent text-accent font-light mt-2 tracking-widest hover:bg-gray hover:text-white w-full md:w-auto'>
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <div className='text-center w-full mt-4 text-xs bg-light-gray p-3 font-light'>
                <p>&copy;2025 by Megatech Cooling Services. All rights Reserved. Developed by <span className='underline hover:text-gray'><a href="https://samuelawuetey.onrender.com" target='_blank' rel='noreferrer'>89Devs</a></span></p>
            </div>
        </div>
    )
}

export default Footer