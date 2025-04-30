import React from 'react';
import { Preloader } from '../components/Preloader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

const Storepolicy = () => {
    return (
        <div className='Storepolicy cursor-pointer'>
            <Preloader />
            <Navbar />
            <ScrollReveal>
                <div className="text-center font-light font-pt-serif uppercase text-3xl sm:text-4xl lg:text-3xl tracking-widest mt-10 px-6 sm:px-20 lg:px-80 mx-auto">
                    store policy
                </div>
            </ScrollReveal>
            <div className="bg-light-gray flex flex-col w-full mt-16 justify-center mb-10 px-6 sm:px-16 lg:px-32 xl:px-80">
                <ScrollReveal>
                    <div className="text-center mt-16 text-xl sm:text-2xl font-light font-pt-serif uppercase tracking-widest">
                        <h3>Customer Care</h3>
                        <hr className="mt-6 w-5 items-center border-2 mx-auto" />
                    </div>
                    <div className="mt-12 text-center mx-auto mb-16">
                        <p className="font-light text-sm sm:text-sm text-justify">
                            I’m a shipping policy section. I’m a great place to update your customers about your shipping methods, packaging and costs. Use plain, straightforward language to build trust and make sure that your customers stay loyal!
                            I'm the second paragraph in your shipping policy section.<br /><br /> Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font.
                            I’m a great place for you to tell a story and let your users know a little more about you.
                        </p>
                    </div>
                </ScrollReveal>
                <ScrollReveal>
                    <div className="text-center mt-10 text-xl sm:text-2xl font-light font-pt-serif uppercase tracking-widest">
                        <h3>Privacy & Safety</h3>
                        <hr className="mt-6 w-5 items-center border-2 mx-auto" />
                    </div>
                    <div className="mt-12 text-center mx-auto mb-16">
                        <p className="font-light text-sm sm:text-sm text-justify">
                            I’m a shipping policy section. I’m a great place to update your customers about your shipping methods, packaging and costs. Use plain, straightforward language to build trust and make sure that your customers stay loyal!
                            I'm the second paragraph in your shipping policy section.<br /><br /> Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font.
                            I’m a great place for you to tell a story and let your users know a little more about you.
                        </p>
                    </div>
                </ScrollReveal>
                <ScrollReveal>
                    <div className="text-center mt-10 text-xl sm:text-2xl font-light font-pt-serif uppercase tracking-widest">
                        <h3>Payment</h3>
                        <hr className="mt-6 w-5 items-center border-2 mx-auto" />
                    </div>
                    <div className="mt-12 text-center mx-auto mb-16">
                        <ul className="flex flex-col gap-3 text-center font-light text-sm sm:text-sm">
                            <li>Debit Card</li>
                            <li>MTN Mobile Money</li>
                            <li>Telecel Cash</li>
                            <li>AirtelTigo Money</li>
                        </ul>
                    </div>
                </ScrollReveal>
            </div>
            <Footer />
        </div>
    )
}

export default Storepolicy