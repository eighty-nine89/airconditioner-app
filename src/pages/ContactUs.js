import React from 'react';
import { Preloader } from '../components/Preloader';
import Navbar from '../components/Navbar';
// import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaXTwitter } from 'react-icons/fa6';

const ContactUs = () => {
    return (
        <div className='ContactUs cursor-pointer'>
            <Preloader />
            <Navbar />
            {/* Sticky Social Media Bar */}
            <ScrollReveal animationClass="animate-fade-in" threshold={0.5}>
                <div className="fixed top-1/2 right-4 transform -translate-y-1/2 flex flex-col gap-4 z-50">
                    <Link to={' '}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-fbcolor hover:bg-fbcolor text-white rounded-full p-2 transition hover:scale-110 duration-500 transform ease-in-out"
                        aria-label="Facebook"
                    >
                        <FaFacebook size={26} />
                    </Link>
                    <Link to={' '}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black hover:bg-black text-white rounded-full p-2 transition hover:scale-110 duration-500 transform ease-in-out"
                        aria-label="Twitter"
                    >
                        <FaXTwitter size={26} />
                    </Link>
                    <Link to={' '}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-insta-color hover:bg-insta-color text-white rounded-full p-2 transition hover:scale-110 duration-500 transform ease-in-out"
                        aria-label="Instagram"
                    >
                        <FaInstagram size={26} />
                    </Link>
                    <Link to={' '}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-whatsapp-color hover:bg-whatsapp-color text-white rounded-full p-2 transition hover:scale-110 duration-500 transform ease-in-out"
                        aria-label="WhatsApp"
                    >
                        <FaWhatsapp size={26} />
                    </Link>
                </div>
            </ScrollReveal>
            {/* Get in touch - social media */}
            {/* <div className='text-center mt-10 mb-12 px-4'>
                <ScrollReveal>
                    <h1 className='uppercase tracking-widest text-3xl lg:text-3xl font-light font-pt-serif'>get in touch</h1>
                </ScrollReveal>
                <ScrollReveal animationClass="animate-slide-left" threshold={0.2} delay={300}>
                    <div className='flex justify-center items-center mt-10 gap-6 sm:gap-10'>
                        <Link to=" "><img src='../assets/socials/instagram.png' title='instagram' className='w-8 lg:w-10' alt='instagram logo' /></Link>
                        <Link to=" "><img src='../assets/socials/linkedin.png' title='linkedin' className='w-8 lg:w-10 rounded-lg' alt='X logo' /></Link>
                        <Link to=" "><img src='../assets/socials/whatsapp.png' title='whatsapp' className='w-8 lg:w-10' alt='whatsapp logo' /></Link>
                        <Link to=" "><img src='../assets/socials/tiktok.png' title='tiktok' className='w-8 lg:w-10' alt='tiktok logo' /></Link>
                        <Link to=" "><img src='../assets/socials/facebook.png' title='facebook' className='w-8 lg:w-10' alt='facebook logo' /></Link>
                    </div>
                </ScrollReveal>
            </div> */}
            <div className='bg-white w-full flex flex-col justify-center px-6 sm:px-16 lg:px-40 xl:px-80 mb-5 lg:mb-5 mx-auto'>
            <ScrollReveal>
                    <div className='text-center'>
                        <h3 className='tracking-wider text-xl lg:text-2xl mt-16 font-light font-pt-serif'>Customer Service</h3>
                        <hr className='mt-6 w-6 items-center border-2 mx-auto' />
                    </div>
                </ScrollReveal>
                <ScrollReveal>
                    <div className='justify-between flex flex-col lg:flex-row text-center mt-10 lg:mt-10 gap-10'>
                        <div className='font-light'>
                            <h4 className='text-lg lg:text-xl italic text-gray hover:text-black font-medium font-pt-serif'>Main Store</h4>
                            <p className='mt-1 capitalize text-sm'>St. Peters Catholic Church</p>
                            <p className='capitalize text-sm'>Adjen Kotoku, Amasaman, Accra</p>
                        </div>

                        <div className='font-light lg:ml-28'>
                            <h4 className='text-xl lg:text-xl italic text-gray hover:text-black font-medium font-pt-serif'>Opening Hours</h4>
                            <p className='mt-1 capitalize text-sm'>Monday - Saturday</p>
                            <p className='capitalize text-sm'>9:00am - 7:00pm GMT</p>
                        </div>

                        <div className='font-light mb-10 lg:mb-10'>
                            <h4 className='text-xl lg:text-xl italic text-gray hover:text-black font-medium font-pt-serif capitalize'>Contact Us</h4>
                            <p className='mt-1 capitalize text-sm'>Phone: +233 0244523845 or +233 0201588787</p>
                            <p className='text-sm' onClick={() => window.location.href = 'mailto:megatechcoolingservicesgh@gmail.com'}>Email: megatechcoolingservicesgh@gmail.com</p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
            {/* contact us form */}
            <div className='bg-light-gray w-full flex flex-col justify-center px-6 sm:px-16 lg:px-40 xl:px-80 mb-16 mx-auto'>
                <ScrollReveal>
                    <div className='flex flex-col justify-center text-center lg:mt-10 mt-10'>
                        <div className='font-light'>
                            <h4 className='text-xl lg:text-2xl font-medium text-gray hover:text-black italic font-pt-serif capitalize'>Inquiries</h4>
                            <p className='mt-1 text-sm'>For services qoutes and questions regarding our products and services you can contact us <br /> by filling out the forms below.</p>
                        </div>
                    </div>
                </ScrollReveal>
                <ScrollReveal>
                    <form action={'https://formsubmit.co/megatechcoolingservicesgh@gmail.com'} method='POST' className='mt-10 w-full sm:w-3/4 lg:w-1/2 mx-auto'>

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
                </ScrollReveal>
            </div>
            {/* footer */}
            <Footer />
        </div>
    )
}

export default ContactUs