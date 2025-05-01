import React from 'react';
import Navbar from '../components/Navbar';
import { Preloader } from '../components/Preloader';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaXTwitter } from 'react-icons/fa6';

const Gallery = () => {
    return (
        <div className='Gallery cursor-pointer'>
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
            {/* Gallery title */}
            <div className='flex flex-col lg:px-64 lg:mx-auto lg:mt-5 mt-5 lg:mb-10 mb-5 px-4 gap-5 relative'>
                <ScrollReveal>
                    <div className='lg:pt-10 pt-10 text-center mb-5'>
                        <h1 className='text-3xl font-pt-serif font-light capitalize'>our Gallery</h1>
                        <hr className='mt-5 w-6 text-center mx-auto border-2' />
                    </div>
                </ScrollReveal>
                {/* First Row Gallery*/}
                <ScrollReveal>
                    <div className='flex flex-col lg:flex-row items-center gap-5'>
                        <div className='w-full h-56 overflow-hidden rounded-lg shadow-xl'>
                            <img
                                src="../assets/gallery/mega1.jpg"
                                alt="gallery logo"
                                className='w-full h-full object-cover transform hover:scale-105 hover:shadow-2xl transition duration-500 ease-in-out'
                            />
                        </div>
                        <div className='w-full h-56 overflow-hidden rounded-lg shadow-xl'>
                            <img
                                src="../assets/ourservices/openac.jpg"
                                alt="gallery logo"
                                className='w-full h-full object-cover transform hover:scale-105 hover:shadow-2xl transition duration-500 ease-in-out'
                            />
                        </div>
                        <div className='w-full h-56 overflow-hidden rounded-lg shadow-xl'>
                            <img
                                src="../assets/gallery/ac1.avif"
                                alt="gallery logo"
                                className='w-full h-full object-cover transform hover:scale-105 hover:shadow-2xl transition duration-500 ease-in-out'
                            />
                        </div>
                    </div>
                </ScrollReveal>
                {/* Second Row Gallery*/}
                <ScrollReveal>
                    <div className='flex flex-col lg:flex-row items-center gap-5'>
                        <div className='w-full h-56 overflow-hidden rounded-lg shadow-xl'>
                            <img
                                src="../assets/ourservices/refrigerator.jpg"
                                alt="gallery logo"
                                className='w-full h-full object-cover transform hover:scale-105 hover:shadow-2xl transition duration-500 ease-in-out'
                            />
                        </div>
                        <div className='w-full h-56 overflow-hidden rounded-lg shadow-xl'>
                            <img
                                src="../assets/ourservices/acrepairs.jpg"
                                alt="gallery logo"
                                className='w-full h-full object-cover transform hover:scale-105 hover:shadow-2xl transition duration-500 ease-in-out'
                            />
                        </div>
                        <div className='w-full h-56 overflow-hidden rounded-lg shadow-xl'>
                            <img
                                src="../assets/ourservices/gasrepair.jpg"
                                alt="gallery logo"
                                className='w-full h-full object-cover transform hover:scale-105 hover:shadow-2xl transition duration-500 ease-in-out'
                            />
                        </div>
                    </div>
                </ScrollReveal>
            </div>
            {/* footer */}
            <Footer />
        </div>
    )
}

export default Gallery;
