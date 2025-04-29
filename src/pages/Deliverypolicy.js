import React from 'react';
import { Preloader } from '../components/Preloader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Deliverypolicy = () => {
    return (
        <div className='Deliverypolicy cursor-pointer'>
            <Preloader />
            <Navbar />
            {/* Page Title */}
            <div className='text-center font-bold uppercase text-3xl sm:text-4xl lg:text-2xl tracking-widest mt-10 px-6 sm:px-20 lg:px-80 mx-auto'>
                delivery & return policy
            </div>

            <div className='bg-light-gray flex flex-col w-full mt-16 justify-center mb-10 px-6 sm:px-16 lg:px-32 xl:px-80 mx-auto'>

                {/* Delivery Policy Section */}
                <div className='text-center mt-10 text-xl sm:text-2xl lg:text-xl font-semibold uppercase tracking-widest'>
                    <h3>Delivery policy</h3>
                    <hr className='mt-6 w-8 border-2 mx-auto' />
                </div>

                <div className='mt-8 text-center mb-12'>
                    <p className='font-light text-sm sm:text-sm text-justify'>
                        I’m a shipping policy section. I’m a great place to update your customers about your shipping methods, packaging, and costs. Use plain, straightforward language to build trust and make sure that your customers stay loyal!
                        I'm the second paragraph in your shipping policy section.<br /><br />
                        Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font.
                        I’m a great place for you to tell a story and let your users know a little more about you.
                    </p>
                </div>

                {/* Return & Exchange Policy Section */}
                <div className='text-center mt-10 text-xl sm:text-2xl lg:text-xl font-semibold uppercase tracking-widest'>
                    <h3>Return & Exchange policy</h3>
                    <hr className='mt-6 w-8 border-2 mx-auto' />
                </div>

                <div className='mt-8 text-center mb-16'>
                    <p className='font-light text-sm sm:text-sm text-justify'>
                        I’m a shipping policy section. I’m a great place to update your customers about your shipping methods, packaging, and costs. Use plain, straightforward language to build trust and make sure that your customers stay loyal!
                        I'm the second paragraph in your shipping policy section.<br /><br />
                        Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font.
                        I’m a great place for you to tell a story and let your users know a little more about you.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Deliverypolicy