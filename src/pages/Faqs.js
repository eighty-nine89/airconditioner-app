import { React, useState } from 'react';
import { Preloader } from '../components/Preloader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const faqsData = [
    {
        question: 'What is your refund policy?',
        answer: 'Our refund policy allows you to request a refund within 30 days of purchase if you are not satisfied with our product.',
    },
    {
        question: 'How can I contact support?',
        answer: 'You can contact our support team via email at support@example.com or through our live chat feature.',
    },
    {
        question: 'Do you offer international shipping?',
        answer: 'Yes, we offer international shipping. Shipping times and costs vary depending on your location.',
    },
    {
        question: 'What is your refund policy?',
        answer: 'Our refund policy allows you to request a refund within 30 days of purchase if you are not satisfied with our product.',
    },
    {
        question: 'How can I contact support?',
        answer: 'You can contact our support team via email at support@example.com or through our live chat feature.',
    },
    {
        question: 'Do you offer international shipping?',
        answer: 'Yes, we offer international shipping. Shipping times and costs vary depending on your location.',
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
            {/* Page Title */}
            <div className='text-center font-bold uppercase text-2xl sm:text-3xl lg:text-3xl tracking-widest mt-10 px-4 sm:px-10 lg:px-32 xl:px-80 mx-auto'>
                faqs
            </div>

            {/* FAQ Section */}
            <div className='bg-light-gray flex flex-col w-full mt-10 sm:mt-16 justify-center mb-10 px-4 sm:px-10 lg:px-32'>

                {/* Section Title */}
                <div className='text-center mt-10 sm:mt-16 text-xl lg:text-xl sm:text-2xl font-semibold uppercase tracking-widest'>
                    <h3>The most common questions</h3>
                    <hr className='mt-4 w-10 border-2 mx-auto' />
                </div>

                {/* Subtitle */}
                <div className='mt-8 text-center'>
                    <p className='font-light text-lg sm:text-xl lg:text-lg'>Frequently asked questions</p>
                </div>

                {/* FAQ List */}
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
            </div>

            <Footer />
        </div>
    )
}

export default Faqs