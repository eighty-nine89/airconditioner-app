import React from 'react';
import { Preloader } from '../components/Preloader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

const About = () => {
    return (
        <div className='About cursor-pointer'>
            <Preloader />
            <Navbar />
            {/* our story */}
            <ScrollReveal>
                <div className='w-full flex flex-col text-center justify-center px-4 sm:px-10 lg:px-32 xl:px-80 mx-auto'>
                    <div className='text-center lg:mt-5 mt-5'>
                        <h1 className='text-2xl font-loght capitalize font-pt-serif'>MegaTech Cooling Services</h1>
                        <hr className='mt-2 w-6 text-center items-center border-2 mx-auto lg:mx-auto' />
                    </div>
                </div>
            </ScrollReveal>
            <ScrollReveal animationClass="animate-slide-left" threshold={0.2} delay={300}>
                <div className='mt-10 px-4 sm:px-10 lg:px-32 xl:px-80 text-center'>
                    <p className='font-light text-sm sm:text-sm text-justify'>
                        Megatech cooling services is a registered firm that provides air-conditioning and electrical
                        engineering services such as: refrigeration, air condition repairs, servicing, maintenance and
                        installation; general electrical wiring and repairs; commercial and domestic appliances maintenance
                        and servicing; cooking stoves and gas cookers repairs and installation; refrigerator and freezer repairs
                        and installation; and electric motor maintenance and electric system conditions.
                    </p>
                </div>
            </ScrollReveal>
            {/* management */}
            <ScrollReveal>
                <div className='w-full flex flex-col text-center justify-center px-4 sm:px-10 lg:px-32 xl:px-80 mx-auto'>
                    <div className='text-center lg:mt-5 mt-5'>
                        <h1 className='text-2xl font-loght capitalize font-pt-serif'>Our Cordination & Management</h1>
                        <hr className='mt-2 w-6 text-center items-center border-2 mx-auto lg:mx-auto' />
                    </div>
                </div>
            </ScrollReveal>
            <ScrollReveal animationClass="animate-slide-left" threshold={0.2} delay={300}>
                <div className='mt-10 px-4 sm:px-10 lg:px-32 xl:px-80 text-center'>
                    <p className='font-light text-sm sm:text-sm text-justify'>
                        MEGATECH COOLING SERVICES is committed to the principle of coordination and of providing all our clients with management
                        services/products, ensuring the coordination of team work skills we achieve by:
                        Assisting the client to meet contract specifications
                        Quality and culinary delivery at the heart of the founder <span className='font-semibold'>(John Kwasi Ameyaw)</span> and would obviously ensure proper control
                        over his work to enhance his credibility and reputation.
                    </p>
                    <table className='mt-10 w-full border-2 border-gray'>
                        <thead className='mt-10'>
                            <tr className='text-center'>
                                <th className='border-2 border-gray p-2'>Name</th>
                                <th className='border-2 border-gray p-2'>Position (Specification)</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            <tr className='border-2 border-gray p-2'>
                                <td className='border-2 border-gray p-2'>John Kwasi Amegadje</td>
                                <td className='border-2 border-gray p-2'>GM / Chief Engineer</td>
                            </tr>
                            <tr className='border-2 border-gray p-2'>
                                <td className='border-2 border-gray p-2'>Emmanuel K. Somabe</td>
                                <td className='border-2 border-gray p-2'>Gas and electric cookers, Refrigeration, AC Technician</td>
                            </tr>
                            <tr className='border-2 border-gray p-2'>
                                <td className='border-2 border-gray p-2'>Tawia Augustine</td>
                                <td className='border-2 border-gray p-2'>Project Manager</td>
                            </tr>
                            <tr className='border-2 border-gray p-2'>
                                <td className='border-2 border-gray p-2'>Kwame Adom Isaac</td>
                                <td className='border-2 border-gray p-2'>Workshop and site manager</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ScrollReveal>
            {/* vission and mission */}
            <ScrollReveal>
                <div className="text-center mt-10 lg:mt-10 fade-in">
                    <h1 className='text-2xl font-pt-serif font-light capitalize'>mission, vision & values</h1>
                    <hr className='mt-5 w-6 text-center mx-auto items-center border-2 lg:mx-auto' />
                </div>
            </ScrollReveal>
            <ScrollReveal>
                <div className="flex flex-row justify-center items-center p-5 lg:px-40 lg:mb-5 mb-5">
                    <div className="flex flex-wrap justify-center items-center gap-5 w-full mt-5">
                        <div className="w-full sm:w-1/2 lg:w-1/4 fade-in shadow-lg pl-8 pr-8 pb-4 pt-4 rounded-lg">
                            <h2 className="mb-3 text-center lg:text-xl">
                                <span className="text-gray text-lg lg:text-xl font-semibold">01.</span> VISION
                            </h2>
                            <p className="text-justify font-light tracking-tight">
                                To become the first at it best trusted refrigeration and air condition engineer for our clients.
                            </p>
                        </div>

                        <div className="w-full sm:w-1/2 lg:w-1/4 fade-in shadow-lg pl-8 pr-8 pb-4 pt-4 rounded-lg">
                            <h2 className="mb-3 text-center lg:text-xl">
                                <span className="text-gray text-lg lg:text-xl font-semibold">02.</span> MISSION
                            </h2>
                            <p className="text-justify font-light tracking-tight">
                                To provide responsible, safe and efficient trusted solutions to our clients with the right quality mass
                                dependable ease of effective air condition engineering.
                            </p>
                        </div>

                        <div className="w-full sm:w-1/2 lg:w-1/4 fade-in shadow-lg pl-8 pr-8 pb-4 pt-4 rounded-lg">
                            <h2 className="mb-3 text-center lg:text-xl">
                                <span className="text-gray text-lg lg:text-xl font-semibold">03.</span> VALUES
                            </h2>
                            <p className="text-center font-light tracking-tight">
                                Integrity
                                <br />
                                Innovation
                                <br />
                                Efficiency
                                <br />
                                Collaboration
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
            {/* gallery */}
            <ScrollReveal>
                <div className='w-full flex flex-col text-center justify-center px-4 sm:px-10 lg:px-52 xl:px-80 mx-auto'>
                    <div className='text-center lg:mt-5 mt-5'>
                        <h1 className='text-2xl font-pt-serif font-light capitalize'>our gallery</h1>
                        <hr className='mt-2 w-6 text-center items-center border-2 mx-auto lg:mx-auto' />
                    </div>
                </div>
            </ScrollReveal>
            <ScrollReveal>
                <div className='backgroundImg mt-16 mb-16 px-4 sm:px-10 lg:px-32 xl:px-80'>
                    <div className='gallery grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
                        {["mega1.jpg", "mega1.jpg", "mega1.jpg", "mega1.jpg", "mega1.jpg"].map((img, index) => (
                            <div className='cardImg' key={index}>
                                <figure>
                                    <img src={`../assets/gallery/${img}`} alt='Preview' className='w-full h-auto rounded-lg shadow-md' />
                                </figure>
                            </div>
                        ))}
                    </div>
                </div>
            </ScrollReveal>
            {/* clients */}
            <div className="mt-5 px-4 lg:px-52">
                <ScrollReveal>
                    <div className="text-center mt-2 fade-in">
                        <h1 className='text-2xl font-pt-serif font-light capitalize'>Our clients</h1>
                        <hr className='mt-5 w-6 text-center mx-auto items-center border-2 lg:mx-auto' />
                    </div>
                </ScrollReveal>
                <ScrollReveal>
                    <div className="overflow-hidden w-full lg:px-52 mt-5 lg:mt-5 mb-5 fade-in">
                        <div className="flex animate-slide gap-8 w-max">
                            {[
                                "../assets/sliders/atlanticcatering.png",
                                "../assets/sliders/frankotrading.jpg",
                                "../assets/sliders/koforiduaclinic.jpeg",
                                "../assets/sliders/mpharma.jpg",
                                "../assets/sliders/transass.avif",
                                "../assets/sliders/atlanticcatering.png",
                                "../assets/sliders/frankotrading.jpg",
                                "../assets/sliders/koforiduaclinic.jpeg",
                                "../assets/sliders/mpharma.jpg",
                                "../assets/sliders/transass.avif",
                                "../assets/sliders/atlanticcatering.png",
                                "../assets/sliders/frankotrading.jpg",
                                "../assets/sliders/koforiduaclinic.jpeg",
                                "../assets/sliders/mpharma.jpg",
                                "../assets/sliders/transass.avif",
                            ].map((src, idx) => (
                                <div key={idx} className="min-w-[120px] flex-shrink-0">
                                    <img src={src} alt="carousel logo" className="w-52 h-52 object-contain rounded-lg" />
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
            {/* Footer */}
            <Footer />
        </div>
    )
}

export default About