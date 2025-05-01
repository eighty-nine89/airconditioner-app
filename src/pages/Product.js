import React from 'react';
import { Preloader } from '../components/Preloader';
import Navbar from '../components/Navbar';
import '../styles/customCards.css';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaXTwitter } from 'react-icons/fa6';

const Product = () => {
    return (
        <div className='Product cursor-pointer'>
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
            {/* all products */}
            <div className='body mx-auto md:px-10 lg:px-40 ml-5'>
                <div className='mt-4 capitalize lg:px-20 px-5 mx-auto'>
                    <h3 className='text-3xl font-light font-pt-serif'>all products</h3>
                    <p className='text-gray text-start justify-start mt-4 -mb-12 text-sm'>15 Products</p>
                </div>
                <div className="background">
                    <div className="centering">
                        <div className="articles">
                            <ScrollReveal>
                                <article className='shadow'>
                                    <figure>
                                        <img
                                            src="./assets/products/hisense.jpg"
                                            alt="air conditioner"
                                        />
                                    </figure>
                                    <div className="article-preview">
                                        <div className='flex flex-row justify-between'>
                                            <h3 className='text-2xl font-light capitalize'>hisense air conditioner</h3>
                                        </div>
                                        <p className='text-sm mt-2 text-gray'>
                                            Air conditioning sales focus on providing cooling comfort, with features like adjustable temperatures, multiple operating modes (cool, heat, dry, fan only), and energy-saving modes.
                                            Smart ACs offer additional convenience through mobile app control, voice commands, and integration with smart home systems
                                        </p>
                                    </div>
                                </article>
                            </ScrollReveal>
                            {/* electric hob */}
                            <ScrollReveal>
                                <article className='shadow'>
                                    <figure>
                                        <img
                                            src="../assets/products/lgelectric.webp"
                                            alt="oven"
                                        />
                                    </figure>
                                    <div className="article-preview">
                                        <div className='flex flex-row justify-between'>
                                            <h3 className='text-2xl font-light capitalize'>LG electric hob</h3>
                                        </div>
                                        <p className='text-sm mt-2 text-gray'>
                                            Upgrade your kitchen with incredible deals on refrigerators! Whether you're looking for a sleek and modern French door fridge,
                                            a spacious side-by-side, a reliable top-freezer model, or a compact option for smaller spaces, now is the perfect time to buy this product.
                                        </p>
                                    </div>
                                </article>
                            </ScrollReveal>
                            {/* air conditioner */}
                            <ScrollReveal>
                                <article className='shadow'>
                                    <figure>
                                        <img
                                            src="../assets/products/Nasco.jpg"
                                            alt="air conditioner"
                                        />
                                    </figure>
                                    <div className="article-preview">
                                        <div className='flex flex-row justify-between'>
                                            <h3 className='text-2xl font-light capitalize'>Nasco air conditioner</h3>
                                        </div>
                                        <p className='text-sm mt-2 text-gray'>
                                            Air conditioning sales focus on providing cooling comfort, with features like adjustable temperatures, multiple operating modes (cool, heat, dry, fan only),
                                            and energy-saving modes. Smart ACs offer additional convenience through mobile app control, voice commands, and integration with smart home systems
                                        </p>
                                    </div>
                                </article>
                            </ScrollReveal>
                            <ScrollReveal>
                                <article className='shadow'>
                                    <figure>
                                        <img
                                            src="./assets/products/tcl.png"
                                            alt="air conditioner"
                                        />
                                    </figure>
                                    <div className="article-preview">
                                        <div className='flex flex-row justify-between'>
                                            <h3 className='text-2xl font-light capitalize'>TCL air conditioner</h3>
                                        </div>
                                        <p className='text-sm mt-2 text-gray'>
                                            Air conditioning sales focus on providing cooling comfort, with features like adjustable temperatures, multiple operating modes (cool, heat, dry, fan only),
                                            and energy-saving modes. Smart ACs offer additional convenience through mobile app control, voice commands, and integration with smart home systems
                                        </p>
                                    </div>
                                </article>
                            </ScrollReveal>
                            <ScrollReveal>
                                <article className='shadow'>
                                    <figure>
                                        <img
                                            src="./assets/products/lgrefrigerator.avif"
                                            alt="refrigerator"
                                        />
                                    </figure>
                                    <div className="article-preview">
                                        <div className='flex flex-row justify-between'>
                                            <h3 className='text-2xl font-light capitalize'>LG refrigerator</h3>
                                        </div>
                                        <p className='text-sm mt-2 text-gray'>
                                            Upgrade your kitchen with incredible deals on refrigerators! Whether you're looking for a sleek and modern French door fridge,
                                            a spacious side-by-side, a reliable top-freezer model, or a compact option for smaller spaces, now is the perfect time to buy this product.
                                        </p>
                                    </div>
                                </article>
                            </ScrollReveal>
                            <ScrollReveal>
                                <article className='shadow'>
                                    <figure>
                                        <img
                                            src="../assets/products/hisenserefrigerator.webp"
                                            alt="refrigerator"
                                        />
                                    </figure>
                                    <div className="article-preview">
                                        <div className='flex flex-row justify-between'>
                                            <h3 className='text-2xl font-light capitalize'>Hisense silver fridge</h3>
                                        </div>
                                        <p className='text-sm mt-2 text-gray'>
                                            Upgrade your kitchen with incredible deals on refrigerators! Whether you're looking for a sleek and modern French door fridge,
                                            a spacious side-by-side, a reliable top-freezer model, or a compact option for smaller spaces, now is the perfect time to buy this product.
                                        </p>
                                    </div>
                                </article>
                            </ScrollReveal>
                            <ScrollReveal>
                                <article className='shadow'>
                                    <figure>
                                        <img
                                            src="./assets/products/hisenserefrigeratormini.jpg"
                                            alt="refrigerator"
                                        />
                                    </figure>
                                    <div className="article-preview">
                                        <div className='flex flex-row justify-between'>
                                            <h3 className='text-2xl font-light capitalize'>Hisense Mini Fridge</h3>
                                        </div>
                                        <p className='text-sm mt-2 text-gray'>
                                            Upgrade your kitchen with incredible deals on refrigerators! Whether you're looking for a sleek and modern French door fridge,
                                            a spacious side-by-side, a reliable top-freezer model, or a compact option for smaller spaces, now is the perfect time to buy this product.
                                        </p>
                                    </div>
                                </article>
                            </ScrollReveal>
                            {/* air conditioners */}
                            <ScrollReveal>
                                <article className='shadow'>
                                    <figure>
                                        <img
                                            src="../assets/products/bruhm.jpg"
                                            alt="air conditioner"
                                        />
                                    </figure>
                                    <div className="article-preview">
                                        <div className='flex flex-row justify-between'>
                                            <h3 className='text-2xl font-light capitalize'>Bruhm air conditioner</h3>
                                        </div>
                                        <p className='text-sm mt-2 text-gray'>
                                            Air conditioning sales focus on providing cooling comfort, with features like adjustable temperatures, multiple operating modes (cool, heat, dry, fan only),
                                            and energy-saving modes. Smart ACs offer additional convenience through mobile app control, voice commands, and integration with smart home systems
                                        </p>
                                    </div>
                                </article>
                            </ScrollReveal>
                            <ScrollReveal>
                                <article className='shadow'>
                                    <figure>
                                        <img
                                            src="./assets/products/midea.webp"
                                            alt="air conditioner"
                                        />
                                    </figure>
                                    <div className="article-preview">
                                        <div className='flex flex-row justify-between'>
                                            <h3 className='text-2xl font-light capitalize'>Midea air conditioner</h3>
                                        </div>
                                        <p className='text-sm mt-2 text-gray'>
                                            Air conditioning sales focus on providing cooling comfort, with features like adjustable temperatures, multiple operating modes (cool, heat, dry, fan only),
                                            and energy-saving modes. Smart ACs offer additional convenience through mobile app control, voice commands, and integration with smart home systems
                                        </p>
                                    </div>
                                </article>
                            </ScrollReveal>
                            <ScrollReveal>
                                <article className='shadow'>
                                    <figure>
                                        <img
                                            src="../assets/products/lg.webp"
                                            alt="air conditioner"
                                        />
                                    </figure>
                                    <div className="article-preview">
                                        <div className='flex flex-row justify-between'>
                                            <h3 className='text-2xl font-light capitalize'>LG air conditioner</h3>
                                        </div>
                                        <p className='text-sm mt-2 text-gray'>
                                            Air conditioning sales focus on providing cooling comfort, with features like adjustable temperatures, multiple operating modes (cool, heat, dry, fan only),
                                            and energy-saving modes. Smart ACs offer additional convenience through mobile app control, voice commands, and integration with smart home systems
                                        </p>
                                    </div>
                                </article>
                            </ScrollReveal>
                            {/* refrigerators */}
                            <ScrollReveal>
                                <article className='shadow'>
                                    <figure>
                                        <img
                                            src="../assets/products/nascorefrigerator.jpg"
                                            alt="refrigerator"
                                        />
                                    </figure>
                                    <div className="article-preview">
                                        <div className='flex flex-row justify-between'>
                                            <h3 className='text-2xl font-light capitalize'>nasco fridge</h3>
                                        </div>
                                        <p className='text-sm mt-2 text-gray'>
                                            Upgrade your kitchen with incredible deals on refrigerators! Whether you're looking for a sleek and modern French door fridge,
                                            a spacious side-by-side, a reliable top-freezer model, or a compact option for smaller spaces, now is the perfect time to buy this product.
                                        </p>
                                    </div>
                                </article>
                            </ScrollReveal>
                            <ScrollReveal>
                                <article className='shadow'>
                                    <figure>
                                        <img
                                            src="./assets/products/nascochestfreezer.jpeg"
                                            alt="refrigerator"
                                        />
                                    </figure>
                                    <div className="article-preview">
                                        <div className='flex flex-row justify-between'>
                                            <h3 className='text-2xl font-light capitalize'>nasco chest freezer</h3>
                                        </div>
                                        <p className='text-sm mt-2 text-gray'>
                                            Upgrade your kitchen with incredible deals on refrigerators! Whether you're looking for a sleek and modern French door fridge,
                                            a spacious side-by-side, a reliable top-freezer model, or a compact option for smaller spaces, now is the perfect time to buy this product.
                                        </p>
                                    </div>
                                </article>
                            </ScrollReveal>
                            <ScrollReveal>
                                <article className='shadow'>
                                    <figure>
                                        <img
                                            src="../assets/products/nascomini.jpg"
                                            alt="refrigerator"
                                        />
                                    </figure>
                                    <div className="article-preview">
                                        <div className='flex flex-row justify-between'>
                                            <h3 className='text-2xl font-light capitalize'>nasco mini fridge</h3>
                                        </div>
                                        <p className='text-sm mt-2 text-gray'>
                                            Upgrade your kitchen with incredible deals on refrigerators! Whether you're looking for a sleek and modern French door fridge,
                                            a spacious side-by-side, a reliable top-freezer model, or a compact option for smaller spaces, now is the perfect time to buy this product.
                                        </p>
                                    </div>
                                </article>
                            </ScrollReveal>
                            {/* ovens */}
                            <ScrollReveal>
                                <article className='shadow'>
                                    <figure>
                                        <img
                                            src="../assets/products/nascohob.webp"
                                            alt="oven"
                                        />
                                    </figure>
                                    <div className="article-preview">
                                        <div className='flex flex-row justify-between'>
                                            <h3 className='text-2xl font-light capitalize'>nasco electric hob & oven</h3>
                                        </div>
                                        <p className='text-sm mt-2 text-gray'>
                                            Upgrade your kitchen with incredible deals on refrigerators! Whether you're looking for a sleek and modern French door fridge,
                                            a spacious side-by-side, a reliable top-freezer model, or a compact option for smaller spaces, now is the perfect time to buy this product.
                                        </p>
                                    </div>
                                </article>
                            </ScrollReveal>
                            <ScrollReveal>
                                <article className='shadow'>
                                    <figure>
                                        <img
                                            src="./assets/products/hisensegas.png"
                                            alt="oven"
                                        />
                                    </figure>
                                    <div className="article-preview">
                                        <div className='flex flex-row justify-between'>
                                            <h3 className='text-2xl font-light capitalize'>Hisense Gas Hob</h3>
                                        </div>
                                        <p className='text-sm mt-2 text-gray'>
                                            Upgrade your kitchen with incredible deals on refrigerators! Whether you're looking for a sleek and modern French door fridge,
                                            a spacious side-by-side, a reliable top-freezer model, or a compact option for smaller spaces, now is the perfect time to buy this product.
                                        </p>
                                    </div>
                                </article>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Product