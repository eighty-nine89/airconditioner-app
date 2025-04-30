import React from 'react';
import { Preloader } from '../components/Preloader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

const Deliverypolicy = () => {
    return (
        <div className='Deliverypolicy cursor-pointer'>
            <Preloader />
            <Navbar />
            {/* Page Title */}
            <ScrollReveal>
                <div className='text-center font-bold uppercase text-3xl sm:text-4xl lg:text-2xl tracking-widest mt-10 px-6 sm:px-20 lg:px-80 mx-auto'>
                    delivery & return policy
                </div>
            </ScrollReveal>

            <div className='bg-light-gray flex flex-col w-full mt-16 justify-center mb-10 px-6 sm:px-16 lg:px-32 xl:px-80 mx-auto'>

                {/* Delivery Policy Section */}
                <ScrollReveal>
                    <div className='text-center mt-10 text-xl sm:text-2xl lg:text-xl font-semibold uppercase tracking-widest'>
                        <h3>Delivery policy</h3>
                        <hr className='mt-6 w-8 border-2 mx-auto' />
                    </div>
                </ScrollReveal>
                <ScrollReveal>
                    <div className='mt-8 text-center mb-12'>
                        <p className='font-light text-sm sm:text-sm text-justify'>
                            <span className='capitalize text-base font-semibold'>1. Delivery Coverage</span><br />
                            We offer delivery services within all major cities and towns in Ghana. For areas outside our standard delivery zones, additional charges or alternative arrangements may apply.
                            <br />
                            <span className='capitalize text-base font-semibold'>2. Delivery timelines</span><br />

                            Orders within Accra and Tema are typically delivered within 1–3 business days.<br />

                            Nationwide deliveries are completed within 3–7 business days, depending on the location and availability of products.<br />

                            <span className='capitalize text-base font-semibold'>3. Delivery charges</span><br />

                            Delivery is free for purchases above a specified amount (e.g., GHS 3,000) within Accra and Tema.

                            Charges for other areas are based on distance and will be communicated at the time of purchase.<br />

                            <span className='capitalize text-base font-semibold'>4. Delivery procedures</span><br />
                            Our team will contact you before delivery to confirm your address and availability. All items will be carefully packaged and handled to avoid damage in transit.<br />

                            <span className='capitalize text-base font-semibold'>5. installation services</span><br />
                            Installation services are offered at the time of delivery for AC units and other large appliances, if previously arranged. Separate charges may apply unless part of a promotional package.
                        </p>
                    </div>
                </ScrollReveal>
                {/* Return & Exchange Policy Section */}
                <ScrollReveal>
                    <div className='text-center mt-10 text-xl sm:text-2xl lg:text-xl font-semibold uppercase tracking-widest'>
                        <h3>Return & Exchange policy</h3>
                        <hr className='mt-6 w-8 border-2 mx-auto' />
                    </div>
                </ScrollReveal>
                <ScrollReveal>
                    <div className='mt-8 text-center mb-10'>
                        <p className='font-light text-sm sm:text-sm text-justify'>
                            <span className='capitalize text-base font-semibold'>1. return window</span><br />
                            Customers may return or request an exchange for purchased items within 7 days of delivery, provided the item is unused, in its original condition, and includes all packaging and documentation. <br />

                            <span className='capitalize text-base font-semibold'>2. eligible reutrn</span><br />
                            Returns are accepted in the following cases:

                            Wrong item delivered

                            Defective or damaged product upon delivery

                            Product not functioning as expected due to manufacturer faults<br />

                            <span className='capitalize text-base font-semibold'>3. Non-refundable items</span><br />

                            Used or installed products

                            Items with physical damage not reported within 24 hours of delivery

                            Customized or specially ordered products <br />

                            <span className='capitalize text-base font-semibold'>4. exchange policy</span><br />
                            Eligible items may be exchanged for the same product or another of equal value. If the replacement item is of a higher price, the customer will be required to pay the difference. <br />

                            <span className='capitalize text-base font-semibold'>5. return procedure</span><br />
                            To initiate a return or exchange, contact our customer service with your invoice number and description of the issue. Our team will arrange a pickup or provide drop-off instructions. <br />

                            <span className='capitalize text-base font-semibold'>6. refunds</span><br />
                            Refunds for eligible returns will be processed within 7–10 business days after the returned product has been inspected and approved.
                        </p>
                    </div>
                </ScrollReveal>
                {/* service policy */}
                <ScrollReveal>
                    <div className='text-center mt-10 text-xl sm:text-2xl lg:text-xl font-semibold uppercase tracking-widest'>
                        <h3>Service Policy</h3>
                        <hr className='mt-6 w-8 border-2 mx-auto' />
                    </div>
                </ScrollReveal>
                <ScrollReveal>
                    <div className='mt-8 text-center mb-10'>
                        <p className='font-light text-sm sm:text-sm text-justify'>
                            <span className='capitalize text-base font-semibold'>1. Scope of Services</span><br />
                            Megatech Cooling Services provides expert services in:<br />

                            ⦿ Sales and professional installation of air conditioners

                            ⦿ Routine and emergency AC maintenance <br />

                            ⦿ Gas cooker and oven repairs <br />

                            ⦿ Refrigerator and freezer diagnostics and repairs <br />

                            ⦿ Preventive servicing of cooling and heating appliances <br />
                            <span className='capitalize text-base font-semibold '>2. service scheduling</span><br />
                            ⦿ Appointments can be scheduled via phone, WhatsApp, or our website. <br />

                            ⦿ We offer same-day service for emergency repairs, subject to technician availability. <br />

                            ⦿ Customers will receive confirmation and estimated arrival time prior to the technician’s visit. <br />

                            <span className='capitalize text-base font-semibold'>3. service hours</span><br />

                            ⦿ Monday to Saturday: 8:00 AM – 6:00 PM <br />

                            ⦿ Sunday & Holidays: Emergency services only (by prior arrangement) <br />

                            <span className='capitalize text-base font-semibold'>4. service warranty</span><br />
                            ⦿ All repairs and installations come with a 30-day service warranty. <br />

                            ⦿ Replacement parts supplied by Megatech Cooling Services carry manufacturer warranties, which may vary by product. <br />
                        </p>
                    </div>
                </ScrollReveal>
            </div>
            <Footer />
        </div>
    )
}

export default Deliverypolicy