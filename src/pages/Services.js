import React from 'react';
import { Preloader } from '../components/Preloader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { TbAirConditioning } from 'react-icons/tb';
import { BsFan } from 'react-icons/bs';
import { LuHeater, LuRefrigerator } from 'react-icons/lu';
import { PiPipeLight, PiToolboxDuotone } from 'react-icons/pi';
import ScrollReveal from '../components/ScrollReveal';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaXTwitter } from 'react-icons/fa6';

const Services = () => {
    return (
        <div className='Services cursor-pointer'>
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
            {/* service title */}
            <ScrollReveal>
                <div className='text-center font-light font-pt-serif text-2xl sm:text-3xl lg:text-3xl tracking-widest mt-10 px-4 sm:px-10 lg:px-32 xl:px-80 mx-auto capitalize'>
                    <h3>Our services</h3>
                    <hr className='mt-6 w-6 items-center border-2 mx-auto' />
                </div>
            </ScrollReveal>
            {/* services */}
            <div className='flex flex-col lg:pt-10 lg:pb-16 lg:flex-col bg-light-gray justify-between items-center w-full h-full mx-auto lg:px-80 px-5 mb-10 lg:mb-10 lg:mt-10 mt-2 lg-10 gap-2 lg:gap-20'>
                <ScrollReveal>
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
                </ScrollReveal>
                <ScrollReveal>

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
                </ScrollReveal>
            </div>
            {/* our work */}
            <ScrollReveal>
                <div className='w-full flex flex-col text-center justify-center px-4 sm:px-10 lg:px-52 xl:px-80 mx-auto'>
                    <div className='text-center'>
                        <h1 className='text-3xl font-pt-serif font-light capitalize'><span className="text-gray">watch:</span> our  work</h1>
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
            </ScrollReveal>
            {/* footer */}
            <Footer />
        </div>
    )
}

export default Services