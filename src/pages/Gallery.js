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
            <div className='flex flex-col flex-3 lg:px-64 lg:mx-auto lg:mt-5 mt-5 lg:mb-10 mb-5 px-4  lg:gap-5 gap-5 relative'>
                <ScrollReveal>
                    <div className='lg:pt-10 pt-10 text-center lg:mb-10 mb-5'>
                        <h1 className='text-3xl font-pt-serif font-light capitalize'>our Gallery</h1>
                        <hr className='mt-5 w-6 text-center mx-auto items-center border-2 lg:mx-auto' />
                    </div>
                </ScrollReveal>
                <ScrollReveal>
                    <div className='flex flex-col lg:flex-row items-center gap-5 lg:gap-5'>
                        <img src="../assets/gallery/mega1.jpg" alt="gallery logo" className='w-full h-56 lg:w-full rounded-lg object-cover shadow-xl' />
                        <img src="../assets/ourservices/openac.jpg" alt="gallery logo" className='w-full h-56 lg:w-full rounded-lg object-cover shadow-xl' />
                        <img src="../assets/gallery/ac1.avif" alt="gallery logo" className='w-full h-56 lg:w-full rounded-lg object-cover shadow-xl' />
                    </div>
                </ScrollReveal>
                <ScrollReveal>
                    <div className='flex flex-col lg:flex-row items-center gap-5 lg:gap-5'>
                        <img src="../assets/ourservices/refrigerator.jpg" alt="gallery logo" className='w-full h-56 lg:w-full rounded-lg object-cover shadow-xl' />
                        <img src="../assets/ourservices/acrepairs.jpg" alt="gallery logo" className='w-full h-56 lg:w-full rounded-lg object-cover shadow-xl' />
                        <img src="../assets/ourservices/gasrepair.jpg" alt="gallery logo" className='w-full h-56 lg:w-full rounded-lg object-cover shadow-xl' />
                    </div>
                </ScrollReveal>
            </div>
            {/* footer */}
            <Footer />
        </div>
    )
}

export default Gallery