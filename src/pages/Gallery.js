import React from 'react';
import Navbar from '../components/Navbar';
import { Preloader } from '../components/Preloader';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

const Gallery = () => {
    return (
        <div className='Gallery cursor-pointer'>
            <Preloader />
            <Navbar />
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
