import React from 'react';
import { Preloader } from '../components/Preloader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { TbAirConditioning } from 'react-icons/tb';
import { BsFan } from 'react-icons/bs';
import { LuHeater, LuRefrigerator } from 'react-icons/lu';
import { PiPipeLight, PiToolboxDuotone } from 'react-icons/pi';

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
                        <p className='text-center capitalize'>air condition sales and repair</p>
                        <p className='text-justify lg:text-sm text-sm tracking-tight text-gray'>
                            We provide a wide selection of high-performance air conditioning units for homes and businesses. Our repair services cover all major brands, resolving issues like cooling inefficiency,
                            refrigerant leaks, and mechanical failures to keep your system running smoothly.
                        </p>
                    </div>
                    <div className='flex flex-col lg:flex-col items-center lg:gap-5 gap-5 text-lg  capitalize'>
                        <BsFan className='text-6xl text-gray hover:text-black' />
                        <p className='text-center capitalize'>Rewinding of all kind of motors</p>
                        <p className='text-justify lg:text-sm text-sm tracking-tight text-gray'>
                            We offer expert rewinding services for all types of electric motors, including fan motors, pump motors, and industrial units. Our precise rewinding restores motor efficiency,
                            extends lifespan, and reduces the need for costly replacements.
                        </p>
                    </div>
                    <div className='flex flex-col lg:flex-col items-center lg:gap-5 gap-5 text-lg capitalize'>
                        <LuHeater className='text-6xl text-gray hover:text-black' />
                        <p className='text-center capitalize'>Gas and electric Oven repairs</p>
                        <p className='text-justify lg:text-sm text-sm tracking-tight text-gray'>
                            Our technicians repair all models of gas and electric ovens, tackling common problems such as uneven heating, ignition faults,
                            and control issues. We ensure your oven operates safely and efficiently for everyday cooking needs.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center w-full h-full lg:gap-5 gap-5">
                    <div className='flex flex-col lg:flex-col items-center lg:gap-5 gap-5 text-lg capitalize'>
                        <PiToolboxDuotone className='text-6xl text-gray hover:text-black' />
                        <p className='text-center capitalize'>system installation and maintainance</p>
                        <p className='text-justify lg:text-sm text-sm tracking-tight text-gray'>
                            We specialize in full HVAC system installations, ensuring optimal configuration for energy efficiency and comfort. Regular maintenance services include inspections, cleaning,
                            and performance checks to extend the system's life and prevent breakdowns.
                        </p>
                    </div>
                    <div className='flex flex-col lg:flex-col items-center lg:gap-5 gap-5 text-lg capitalize'>
                        <LuRefrigerator className='text-6xl text-gray hover:text-black' />
                        <p className='text-center capitalize'>refrigerator reparation</p>
                        <p className='text-justify lg:text-sm text-sm tracking-tight text-gray'>
                            Our refrigerator repair service addresses issues like inadequate cooling, compressor problems, thermostat faults, and gas leaks. We service all major makes
                            and models to ensure reliable, energy-efficient performance.
                        </p>
                    </div>
                    <div className='flex flex-col lg:flex-col items-center lg:gap-5 gap-5 text-lg capitalize'>
                        <PiPipeLight className='text-6xl text-gray hover:text-black' />
                        <p className='text-center capitalize'>Laying of air conditoin pipes</p>
                        <p className='text-justify lg:text-sm text-sm tracking-tight text-gray'>
                            We professionally install and lay AC piping for both new setups and system upgrades. Proper piping ensures effective refrigerant flow,
                            leak prevention, and long-term performance of your air conditioning unit.
                        </p>
                    </div>
                </div>
            </div>
            {/* our work */}
            <div className='w-full flex flex-col text-center justify-center px-4 sm:px-10 lg:px-52 xl:px-80 mx-auto'>
                <div className='text-center'>
                    <h1 className='text-3xl font-eb-garamond font-semibold capitalize'><span className="text-gray">watch:</span> our  work</h1>
                    <hr className='mt-5 w-6 text-center items-center border-2 mx-auto lg:mx-auto' />
                </div>
            </div>
            {/* video */}
            <div className='backgroundImg mt-16 mb-16 px-4 sm:px-10 lg:px-32 xl:px-80'>
                <video className='w-full h-auto rounded-lg shadow-md' controls loop>
                    <source src="../assets/video/acvideo2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <Footer />
        </div>
    )
}

export default Services