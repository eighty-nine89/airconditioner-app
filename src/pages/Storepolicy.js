import React from 'react';
import { Preloader } from '../components/Preloader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaXTwitter } from 'react-icons/fa6';

const Storepolicy = () => {
    return (
        <div className='Storepolicy cursor-pointer'>
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
            {/* Store Policy title */}
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
                            At MegaTech Cooling Services, we're committed to providing you with exceptional service and ensuring your complete satisfaction with your air conditioning purchase. Your comfort is our priority!

                            <br /><br />Our Pledge to You:

                            <br /><br /> <span className='font-bold'>Experience Guidance:</span> Our knowledgeable staff will listen to your needs and help you select the perfect air conditioner for your home or business, offering clear explanations and answering all your questions.
                            <br /> <span className='font-bold'>Quality Products:</span> We only stock reliable, high-performance air conditioners from trusted brands, ensuring you get a product that meets our rigorous standards.
                            <br /><span className='font-bold'>Transparent Pricing:</span> You'll receive clear and upfront pricing for all products and services, with no hidden fees. We'll provide detailed quotes so you know exactly what to expect.
                            <br /><span className='font-bold'>Professional Installation:</span> If you opt for our installation services, our certified technicians will ensure a safe, efficient, and tidy setup, minimizing disruption to your routine.
                            <br /><span className='font-bold'>After-Sales Support:</span> We're here for you even after your purchase. If you have any questions, concerns, or need assistance with your air conditioner, don't hesitate to reach out. We're happy to help with troubleshooting, warranty claims, and general advice.
                            <br /><span className='font-bold'>Fair Returns & Exchange:</span> We understand that sometimes things don't work out. Please refer to our separate Returns and Exchange Policy for details on eligible items, timeframes, and conditions. Our goal is to make the process as straightforward as possible.
                            <br /><span className='font-bold'>Responsive Communication:</span> We aim to respond to all inquiries promptly and efficiently, whether you contact us in-store, by phone, or email.
                            <br />How to Reach Us:

                            <br /><br />If you have any feedback, suggestions, or require assistance, please:

                            <br />Speak to any member of our staff in-store.
                            <br /><br />Call us at <span className='font-bold'>+233 0244523845 or +233 0201588787</span>.
                            <br /><br />Email us at <span className='font-bold'>megatechcoolingservicesgh@gmail.com</span>.
                            <br /><br />Your satisfaction is the measure of our success!
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
                            At MegaTech Cooling Services, we are dedicated to protecting your privacy and ensuring a safe shopping environment for all our customers and staff.

                            <br/><br/>Your Privacy Matters:

                            <br/><br/><span className='font-bold'>Information Collection:</span> We collect personal information (like your name, address, phone number, and email) only when it's necessary to process your purchase, arrange delivery or installation, provide customer support, or when you voluntarily provide it to us (e.g., for newsletters or warranty registration).
                            <br/><span className='font-bold'>Use of Information:</span> Your information is used solely for the purposes for which it was collected. We will not share, sell, or rent your personal information to third parties for marketing purposes without your explicit consent.
                            <br/><span className='font-bold'>Data Security:</span> We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. This includes secure data storage and restricted access to sensitive information.
                            <br/><span className='font-bold'>Payment Security: </span> All in-store credit card transactions are processed securely using industry-standard encryption. We do not store your full credit card details after a transaction is completed.
                            <br/><span className='font-bold'>Access and Correction:</span> You have the right to access and correct your personal information held by us. Please contact us if you wish to review or update your details.
                            <br/><span className='font-bold'>Website Privacy:</span> If we have a website, please refer to our separate online Privacy Policy for details on data collection, cookies, and online security practices.
                            <br/><br/>Your Safety and Ours:

                            <br/><br/><span className='font-bold'>Store Environment:</span> We strive to maintain a clean, well-lit, and accessible store environment for your comfort and safety. Please be mindful of your surroundings, especially when moving large items.
                            <br/><span className='font-bold'>Product Handling:</span> Our staff is trained in safe handling procedures for air conditioning units. Please do not attempt to lift or move heavy products without assistance.
                            <br/><span className='font-bold'>Professional Advice:</span> While our staff can provide general advice, please consult with a qualified electrician or HVAC professional for complex electrical or installation questions beyond our scope.
                            <br/><span className='font-bold'>Emmergency Procedures:</span> In the unlikely event of an emergency, please follow the instructions of our staff. Emergency exits are clearly marked.
                            <br/><span className='font-bold'>Security Monitoring:</span> For the safety and security of our customers, staff, and property, our premises may be equipped with security cameras. Recordings are used solely for security purposes and are accessed only by authorized personnel.
                            <br/><span className='font-bold'>No Solicitation:</span> To maintain a focused and secure environment for our customers, we generally do not permit unauthorized solicitation or distribution of materials on our premises.
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