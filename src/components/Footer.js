import React from 'react';
// import { TbAirConditioning } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='Footer cursor-pointer'>
            <div className='flex flex-col lg:flex-row lg:justify-between w-full mx-auto px-6 lg:px-52 mb-10 gap-10 md:gap-0'>
                <div className='flex flex-col mt-5 text-sm lg:items-start items-center'>
                    <div className='lg:mx-auto lg:items-start text-center'>
                        <Link to="/" className='flex flex-row gap-2 items-center'>
                        <img src="../assets/home/ac-favicon.png" alt="Logo" className="w-5 h-5 lg:w-6 lg:h-6 my-auto items-center" />
                        <h4 className='text-lg uppercase font-light font-pt-serif text-center text-decoration-none'>MegaTech Cooling Services</h4>
                        </Link>
                    </div>
                    <p className='font-light lg:text-center text-xl font-dancingScript'>MegaTech, Cooling Time...</p>
                </div>
                <div className='items-center text-center mt-5'>
                    <ul className='flex flex-col gap-4 lg:gap-4 whitespace-nowrap font-light text-sm'>
                        <Link to="/products"><li className='hover:text-black text-dark-gray capitalize' target='_blank' rel='noreferrer'>Products</li></Link>
                        <Link to="/aboutus"><li className='hover:text-black text-dark-gray capitalize' target='_blank' rel='noreferrer'>About Us</li></Link>
                        <Link to="/services"><li className='hover:text-black text-dark-gray capitalize' target='_blank' rel='noreferrer'>Services</li></Link>
                        <Link to="/contactus"><li className='hover:text-black text-dark-gray capitalize' target='_blank' rel='noreferrer'>Contact us</li></Link>
                    </ul>
                </div>
                <div className='items-center text-center mt-5'>
                    <ul className='flex flex-col gap-4 md:gap-4 whitespace-nowrap font-light text-sm'>
                        <Link to=""><li className='hover:text-black text-dark-gray capitalize' target='_blank' rel='noreferrer'>Instagram</li></Link>
                        <Link to=""><li className='hover:text-black text-dark-gray capitalize' target='_blank' rel='noreferrer'>facebook</li></Link>
                        <Link to=""><li className='hover:text-black text-dark-gray capitalize' target='_blank' rel='noreferrer'>Whatsapp</li></Link>
                        <Link to=""><li className='hover:text-black text-dark-gray capitalize' target='_blank' rel='noreferrer'>LinkedIn</li></Link>
                    </ul>
                </div>
                <div className='items-center text-center mt-5'>
                    <ul className='flex flex-col gap-4 lg:gap-4 whitespace-nowrap font-light text-sm'>
                        <Link to="/gallery"><li className='hover:text-black text-dark-gray capitalize'>Gallery</li></Link>
                        <Link to="/faqs"><li className='hover:text-black text-dark-gray capitalize'>FAQs</li></Link>
                        <Link to="/deliverypolicy"><li className='hover:text-black text-dark-gray capitalize'>Delivery & service policy</li></Link>
                        <Link to="/storepolicy"><li className='hover:text-black text-dark-gray capitalize'>Store Policy</li></Link>
                    </ul>
                </div>
                <div className='items-center text-start mt-5 w-full lg:w-auto'>
                    <h4 className='font-bold text-xl tracking-wider lg:text-start text-center'>Join Us!</h4>
                    <p className='text-sm lg:text-sm text-center text-gray'>subscribe to our newstletter</p>
                    <form action={'https://formsubmit.co/megatechcoolingservicesgh@gmail.com'} method='POST'>
                        <div className='flex flex-col mt-2 font-light text-sm'>
                            <label htmlFor='email'>Email<span className='text-red'>*</span></label>
                            <input
                                type='email'
                                name='email'
                                placeholder='Enter email here'
                                title='subscribe to receive new producs update'
                                className='mt-2 border-2 border-x-0 border-t-0 border-y border-gray focus:border-black focus:outline-none border-slate w-full'
                                required
                            />
                        </div>
                        <button type='submit' className='p-2 text-sm border border-accent text-accent font-light mt-2 tracking-widest hover:bg-gray hover:text-white w-full md:w-auto'>
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <div className='text-center w-full mt-4 text-xs bg-light-gray p-3 font-light'>
                <p>&copy;2025 by Air conditioner store. All rights Reserved. Developed by <span className='underline hover:text-gray'><Link to={"https://samuelawuetey.onrender.com"} target='_blank' rel='noreferrer'>89Devs</Link></span></p>
            </div>
        </div>
    )
}

export default Footer