import React from 'react';
import { Preloader } from '../components/Preloader';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const ContactUs = () => {
  return (
    <div className='ContactUs cursor-pointer'>
        <Preloader/>
        <Navbar/>
        <div className='text-center mt-10 mb-12 px-4'>
                <h1 className='uppercase tracking-widest text-3xl lg:text-3xl font-bold'>get in touch</h1>
                
                {/* Social Icons */}
                <div className='flex justify-center items-center mt-10 gap-6 sm:gap-10'>
                    <Link to=" "><img src='../assets/socials/instagram.png' title='instagram' className='w-8 lg:w-10' alt='instagram logo' /></Link>
                    <Link to=" "><img src='../assets/socials/linkedin.png' title='linkedin' className='w-8 lg:w-10 rounded-lg' alt='X logo' /></Link>
                    <Link to=" "><img src='../assets/socials/whatsapp.png' title='whatsapp' className='w-8 lg:w-10' alt='whatsapp logo' /></Link>
                    <Link to=" "><img src='../assets/socials/tiktok.png' title='tiktok' className='w-8 lg:w-10' alt='tiktok logo' /></Link>
                    <Link to=" "><img src='../assets/socials/facebook.png' title='facebook' className='w-8 lg:w-10' alt='facebook logo' /></Link>
                </div>
            </div>
            <div className='bg-light-gray w-full flex flex-col justify-center px-6 sm:px-16 lg:px-40 xl:px-80 mb-16 mx-auto'>
                <div className='text-center'>
                    <h3 className='tracking-widest text-xl lg:text-2xl mt-16 font-semibold'>Customer Service</h3>
                    <hr className='mt-6 w-6 items-center border-2 mx-auto' />
                </div>
                <div className='justify-between flex flex-col lg:flex-row text-center mt-16 gap-10'>
                <div className='font-light'>
                        <h4 className='text-lg lg:text-2xl italic text-gray hover:text-black font-medium font-pt-serif'>Main Store</h4>
                        <p className='mt-1 capitalize'>89 Mango Avenue St.</p>
                        <p className='capitalize'>Mempeasem,east legon , Accra.</p>
                    </div>

                    <div className='font-light lg:ml-28'>
                        <h4 className='text-xl lg:text-2xl italic text-gray hover:text-black font-medium font-pt-serif'>Opening Hours</h4>
                        <p className='mt-1 capitalize'>Monday - Saturday</p>
                        <p className='capitalize'>9:00am - 7:00pm GMT</p>
                    </div>

                    <div className='font-light mb-16'>
                        <h4 className='text-xl lg:text-2xl italic text-gray hover:text-black font-medium font-pt-serif capitalize'>Contact Us</h4>
                        <p className='mt-1 capitalize'>Phone: +233 00000000 | +233 00000000</p>
                        <p>Email: airconditionservices@email.com</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center text-center'>
                    <div className='font-light'>
                        <h4 className='text-xl lg:text-2xl font-medium text-gray hover:text-black italic font-pt-serif capitalize'>Inquiries</h4>
                        <p className='mt-1 text-sm'>For questions regarding our products and services you can contact us <br /> by filling out the forms below.</p>
                    </div>
                </div>
                <form className='mt-10 w-full sm:w-3/4 lg:w-1/2 mx-auto'>
                    
                    {/* Full Name */}
                    <div className='flex flex-col font-light'>
                        <label htmlFor='fname'>Full Name<span className='text-red'> *</span></label>
                        <input type='text' placeholder='Enter full name here' name='fullname' className='mt-1 border-x-0 border-t-0 border bg-light-gray border-gray focus:outline-none w-full p-2 focus:border-black' required />
                    </div>

                    {/* Email */}
                    <div className='flex flex-col font-light mt-5'>
                        <label htmlFor='email'>Email<span className='text-red'> *</span></label>
                        <input type='email' placeholder='Enter email here' name='email' className='mt-1 border-x-0 border-t-0 border bg-light-gray border-gray focus:outline-none w-full p-2 focus:border-black' required />
                    </div>

                    {/* Subject */}
                    <div className='flex flex-col font-light mt-5'>
                        <label htmlFor='text'>Subject</label>
                        <input type='text' placeholder='Enter subject here' name='subject' className='mt-1 border-x-0 border-t-0 border bg-light-gray border-gray focus:outline-none w-full p-2 focus:border-black' required />
                    </div>

                    {/* Message */}
                    <div className='flex flex-col font-light mt-5'>
                        <label htmlFor='message'>Message<span className='text-red'> *</span></label>
                        <textarea name='message' className='mt-1 border-x-0 border-t-0 border bg-light-gray border-gray focus:outline-none w-full p-2 focus:border-black' placeholder='Enter message here' required />
                    </div>

                    {/* Submit Button */}
                    <div className='flex justify-center mt-8 mb-16'>
                        <button type='submit' className='border border-black px-6 py-2 tracking-widest text-black hover:bg-gray hover:border-black hover:text-white transition duration-300 lg:w-1/2 w-1/2'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            {/* footer */}
            <Footer/>
    </div>
  )
}

export default ContactUs