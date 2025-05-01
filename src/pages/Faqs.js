import { React, useState } from 'react';
import { Preloader } from '../components/Preloader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaXTwitter } from 'react-icons/fa6';

const faqsData = [
    {
        question: 'What types of air conditioners do you sell and install?',
        answer: 'We sell and install a wide range of air conditioners, including split units, window units, standing units, and inverter ACs from trusted brands. Our team helps you choose the best model based on your space and cooling needs.',
    },
    {
        question: 'Do you offer home and commercial AC installations?',
        answer: 'Yes, we handle both residential and commercial air conditioning installations. Whether its a single-room unit or a centralized system for an office building, Megatech Cooling Services has the expertise to deliver quality installations.',
    },
    {
        question: 'Are your services guaranteed?',
        answer: 'Yes. All services provided by Megatech Cooling Services come with a service warranty. We guarantee customer satisfaction, using genuine parts and skilled technicians to deliver reliable solutions. We recommend servicing your air conditioner at least every 3 to 6 months to maintain efficiency, prolong lifespan, and ensure clean, healthy air circulation.',
    },
    {
        question: 'What does your AC maintenance service include?',
        answer: 'Our maintenance service covers full system diagnostics, gas top-up, filter cleaning or replacement, electrical inspection, and overall performance evaluation to ensure optimal operation.',
    },
    {
        question: 'Do you repair gas cookers and ovens?',
        answer: 'Yes, we specialize in repairing gas cookers and ovens. Our technicians can fix issues such as ignition problems, gas leaks, burner malfunctions, thermostat failures, and more.',
    },
    {
        question: 'Can you fix my refrigerator if it’s not cooling properly?',
        answer: 'Absolutely. We provide expert refrigerator repair services for common issues like gas leakage, compressor failure, thermostat issues, and blocked cooling systems.',
    },
];

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div className='Faqs cursor-pointer'>
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
            {/* Page Title */}
            <ScrollReveal>
                <div className='text-center font-light font-pt-serif uppercase text-2xl sm:text-3xl lg:text-3xl tracking-widest mt-10 px-4 sm:px-10 lg:px-32 xl:px-80 mx-auto'>
                    faqs
                </div>
            </ScrollReveal>

            {/* FAQ Section */}
            <div className='bg-light-gray flex flex-col w-full mt-10 sm:mt-16 justify-center mb-10 px-4 sm:px-10 lg:px-32'>

                {/* Section Title */}
                <ScrollReveal>
                    <div className='text-center mt-10 sm:mt-16 text-xl lg:text-xl sm:text-2xl font-light font-pt-serif uppercase tracking-widest'>
                        <h3>The most common questions</h3>
                        <hr className='mt-4 w-10 border-2 mx-auto' />
                    </div>
                </ScrollReveal>

                {/* Subtitle */}
                <ScrollReveal>
                    <div className='mt-8 text-center'>
                        <p className='font-light text-lg sm:text-xl lg:text-lg'>Frequently asked questions</p>
                    </div>
                </ScrollReveal>

                {/* FAQ List */}
                <ScrollReveal>
                    <div className='w-full sm:w-3/4 lg:w-2/4 mx-auto mt-8 sm:mt-10 mb-10'>
                        <p className='font-semibold opacity-50 text-sm sm:text-base'>General</p>
                        {faqsData.map((faq, index) => (
                            <div key={index} className='mb-4 border-b border-gray-300'>
                                <button
                                    className='w-full text-left text-base lg:text-lg sm:text-lg font-light p-3 sm:p-4 bg-gray-100 rounded-md flex justify-between items-center'
                                    onClick={() => toggleAccordion(index)}
                                >
                                    {faq.question}
                                    <span>{openIndex === index ? '-' : '+'}</span>
                                </button>
                                {openIndex === index && (
                                    <div className='p-3 sm:p-4 text-gray-700 bg-light-gray rounded-b-md text-sm sm:text-md font-light'>
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>

            <Footer />
        </div>
    )
}

export default Faqs