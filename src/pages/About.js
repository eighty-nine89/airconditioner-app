import React from 'react'
import { Preloader } from '../components/Preloader'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {
    return (
        <div className='About cursor-pointer'>
            <Preloader />
            <Navbar />
            {/* our story */}
            <div className='w-full flex flex-col text-center justify-center px-4 sm:px-10 lg:px-32 xl:px-80 mx-auto'>
            <div className='text-center lg:mt-5 mt-5'>
                    <h1 className='text-2xl font-eb-garamond font-semibold capitalize'>About air conditioner store</h1>
                    <hr className='mt-2 w-6 text-center items-center border-2 mx-auto lg:mx-auto' />
                </div>
            </div>
            <div className='mt-10 px-4 sm:px-10 lg:px-32 xl:px-80 text-center'>
                <p className='font-light text-sm sm:text-sm text-justify'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
                </p>
            </div>
            {/* the brand */}
            <div className='w-full flex flex-col text-center justify-center px-4 sm:px-10 lg:px-32 xl:px-80 mx-auto'>
                <div className='text-center lg:mt-5 mt-5'>
                    <h1 className='text-2xl font-eb-garamond font-semibold capitalize'>Brand and Partners</h1>
                    <hr className='mt-2 w-6 text-center items-center border-2 mx-auto lg:mx-auto' />
                </div>
            </div>
            <div className='mt-10 px-4 sm:px-10 lg:px-32 xl:px-80 text-center'>
                <p className='font-light text-sm sm:text-sm text-justify'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
                </p>
            </div>
            {/* gallery */}
            <div className='w-full flex flex-col text-center justify-center px-4 sm:px-10 lg:px-52 xl:px-80 mx-auto'>
                <div className='text-center lg:mt-5 mt-5'>
                    <h1 className='text-2xl font-eb-garamond font-semibold capitalize'>our gallery</h1>
                    <hr className='mt-2 w-6 text-center items-center border-2 mx-auto lg:mx-auto' />
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
            <Footer />
        </div>
    )
}

export default About