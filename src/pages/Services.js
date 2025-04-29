import React from 'react';
import { Preloader } from '../components/Preloader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { TbAirConditioning } from 'react-icons/tb';
import { BsFan } from 'react-icons/bs';
import { LuHeater } from 'react-icons/lu';
import { PiPipeLight, PiToolboxDuotone } from 'react-icons/pi';
import { MdHeatPump } from 'react-icons/md';

const Services = () => {
    return (
        <div className='Services cursor-pointer'>
            <Preloader />
            <Navbar />
            {/* service title */}
            <div className='text-center font-bold font-eb-garamond text-2xl sm:text-3xl lg:text-3xl tracking-widest mt-10 px-4 sm:px-10 lg:px-32 xl:px-80 mx-auto capitalize'>
                <h3>Our services</h3>
                <hr className='mt-6 w-6 items-center border-2 mx-auto' />
            </div>
            {/* services */}
            <div className='flex flex-col lg:pt-10 lg:pb-16 lg:flex-col bg-light-gray justify-between items-center w-full h-full mx-auto lg:px-80 px-5 mb-10 lg:mb-10 lg:mt-10 mt-2 lg-10 gap-2 lg:gap-20'>
                <div className="flex flex-col lg:flex-row justify-center items-center text-center w-full h-full lg:gap-10 gap-5 mt-10">
                    <div className='flex flex-col lg:flex-col items-center lg:gap-5 gap-5 text-lg capitalize'>
                        <TbAirConditioning className='text-6xl text-gray hover:text-black' />
                        <p className='text-center capitalize'>air condition repair</p>
                        <p className='text-justify lg:text-sm text-sm tracking-tight text-gray'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
                        </p>
                    </div>
                    <div className='flex flex-col lg:flex-col items-center lg:gap-5 gap-5 text-lg  capitalize'>
                        <BsFan className='text-6xl text-gray hover:text-black' />
                        <p className='text-center capitalize'>fan motor replacement</p>
                        <p className='text-justify lg:text-sm text-sm tracking-tight text-gray'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
                        </p>
                    </div>
                    <div className='flex flex-col lg:flex-col items-center lg:gap-5 gap-5 text-lg capitalize'>
                        <LuHeater className='text-6xl text-gray hover:text-black' />
                        <p className='text-center capitalize'>heater repair</p>
                        <p className='text-justify lg:text-sm text-sm tracking-tight text-gray'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center w-full h-full lg:gap-5 gap-5">
                    <div className='flex flex-col lg:flex-col items-center lg:gap-5 gap-5 text-lg capitalize'>
                        <PiToolboxDuotone className='text-6xl text-gray hover:text-black' />
                        <p className='text-center capitalize'>system installation</p>
                        <p className='text-justify lg:text-sm text-sm tracking-tight text-gray'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
                        </p>
                    </div>
                    <div className='flex flex-col lg:flex-col items-center lg:gap-5 gap-5 text-lg capitalize'>
                        <MdHeatPump className='text-6xl text-gray hover:text-black' />
                        <p className='text-center capitalize'>heat pump repair</p>
                        <p className='text-justify lg:text-sm text-sm tracking-tight text-gray'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
                        </p>
                    </div>
                    <div className='flex flex-col lg:flex-col items-center lg:gap-5 gap-5 text-lg capitalize'>
                        <PiPipeLight className='text-6xl text-gray hover:text-black' />
                        <p className='text-center capitalize'>duct cleaning and repair</p>
                        <p className='text-justify lg:text-sm text-sm tracking-tight text-gray'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Services