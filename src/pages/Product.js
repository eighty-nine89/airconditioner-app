import React from 'react';
import { Preloader } from '../components/Preloader';
import Navbar from '../components/Navbar';
import '../styles/customCards.css';
import Footer from '../components/Footer';

const Product = () => {
    return (
        <div className='Product cursor-pointer'>
            <Preloader />
            <Navbar />
            <div className='body mx-auto md:px-10 lg:px-40 ml-5'>
                <div className='mt-4 capitalize lg:px-20 px-5 mx-auto'>
                    <h3 className='text-3xl font-semibold'>all products</h3>
                    <p className='text-gray text-start justify-start mt-4 -mb-12 text-sm'>6 Products</p>
                </div>
                <div className="background">
                    <div className="centering">
                        <div className="articles">
                            <article className='shadow'>
                                <figure>
                                    <img
                                        src="./assets/products/airconditioner3.jpg"
                                        alt="air conditioner"
                                    />
                                </figure>
                                <div className="article-preview">
                                    <div className='flex flex-row justify-between'>
                                        <h3 className='text-2xl font-light capitalize'>hisense air conditioner</h3>
                                    </div>
                                    <p className='text-sm mt-2 text-gray'>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                        Praesent in mauris eu tortor porttitor accumsan.
                                    </p>
                                    <p className='priceTag text-center mt-2 text-4xl'>₵ 4180.<span className='text-xs'>00</span></p>
                                </div>
                            </article>
                            <article className='shadow'>
                                <figure>
                                    <img
                                        src="../assets/products/airconditioner2.jpg"
                                        alt="air conditioner"
                                    />
                                </figure>
                                <div className="article-preview">
                                    <div className='flex flex-row justify-between'>
                                        <h3 className='text-2xl font-light capitalize'>Nasco air conditioner</h3>
                                    </div>
                                    <p className='text-sm mt-2 text-gray'>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                        Praesent in mauris eu tortor porttitor accumsan.
                                    </p>
                                    <p className='priceTag text-center mt-2 text-4xl'>₵ 3580.<span className='text-xs'>00</span></p>
                                </div>
                            </article>
                            <article className='shadow'>
                                <figure>
                                    <img
                                        src="./assets/products/airconditioner3.jpg"
                                        alt="air conditioner"
                                    />
                                </figure>
                                <div className="article-preview">
                                    <div className='flex flex-row justify-between'>
                                        <h3 className='text-2xl font-light capitalize'>hisense air conditioner</h3>
                                    </div>
                                    <p className='text-sm mt-2 text-gray'>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                        Praesent in mauris eu tortor porttitor accumsan.
                                    </p>
                                    <p className='priceTag text-center mt-2 text-4xl'>₵ 4180.<span className='text-xs'>00</span></p>
                                </div>
                            </article>
                            <article className='shadow'>
                                <figure>
                                    <img
                                        src="../assets/products/airconditioner2.jpg"
                                        alt="air conditioner"
                                    />
                                </figure>
                                <div className="article-preview">
                                    <div className='flex flex-row justify-between'>
                                        <h3 className='text-2xl font-light capitalize'>Nasco air conditioner</h3>
                                    </div>
                                    <p className='text-sm mt-2 text-gray'>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                        Praesent in mauris eu tortor porttitor accumsan.
                                    </p>
                                    <p className='priceTag text-center mt-2 text-4xl'>₵ 3580.<span className='text-xs'>00</span></p>
                                </div>
                            </article>
                            <article className='shadow'>
                                <figure>
                                    <img
                                        src="./assets/products/airconditioner3.jpg"
                                        alt="air conditioner"
                                    />
                                </figure>
                                <div className="article-preview">
                                    <div className='flex flex-row justify-between'>
                                        <h3 className='text-2xl font-light capitalize'>hisense air conditioner</h3>
                                    </div>
                                    <p className='text-sm mt-2 text-gray'>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                        Praesent in mauris eu tortor porttitor accumsan.
                                    </p>
                                    <p className='priceTag text-center mt-2 text-4xl'>₵ 4180.<span className='text-xs'>00</span></p>
                                </div>
                            </article>
                            <article className='shadow'>
                                <figure>
                                    <img
                                        src="../assets/products/airconditioner2.jpg"
                                        alt="air conditioner"
                                    />
                                </figure>
                                <div className="article-preview">
                                    <div className='flex flex-row justify-between'>
                                        <h3 className='text-2xl font-light capitalize'>Nasco air conditioner</h3>
                                    </div>
                                    <p className='text-sm mt-2 text-gray'>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                        Praesent in mauris eu tortor porttitor accumsan.
                                    </p>
                                    <p className='priceTag text-center mt-2 text-4xl'>₵ 3580.<span className='text-xs'>00</span></p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Product