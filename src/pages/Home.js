import React, { useRef, Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { PiMapPinArea } from 'react-icons/pi';
import { MdOutlineEmail } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';
import { IoTimeOutline } from 'react-icons/io5';
import { LiaToolsSolid } from 'react-icons/lia';
import { CiSettings } from 'react-icons/ci';
import { FaScaleBalanced, FaUserCheck, FaXTwitter } from 'react-icons/fa6';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Preloader } from '../components/Preloader';
import ScrollReveal from '../components/ScrollReveal';
import '../styles/customButton.css';
import '../styles/customGallery.css';


// Use lazy loading for components
const Navbar = lazy(() => import('../components/Navbar'));
const Footer = lazy(() => import('../components/Footer'));
const Gallery = lazy(() => import('../components/Gallery'));

const Home = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollOffset = 300;
    const newScrollLeft =
      direction === "left"
        ? container.scrollLeft - scrollOffset
        : container.scrollLeft + scrollOffset;

    container.scrollTo({ left: newScrollLeft, behavior: "smooth" });
  };

  return (
    <div className='text-center text-2xl cursor-pointer'>
      {/* search engine optimization */}
      <Helmet>
        <title>Megatech Cooling Services</title>
        <meta name="description" content="Megatech Cooling Services offers top-notch air conditioning installation, repair, and maintenance services in Ghana. We specialize in AC sales, general maintenance, and repair of gas and electric ovens, and refrigerators.  Your trusted partner for all cooling and appliance needs." />
        <meta name="keywords" content="AC installation, AC repair, air conditioning services, refrigerator repair, oven repair, appliance maintenance, Accra services, cooling services, HVAC, electrical engineering services, electric oven, electric and gas oven, oven repairs, fridge repairs" />
        <meta property="og:title" content="Megatech Cooling Services - Megatech, cooling time..." />
        <meta property="og:description" content="Expert AC services, refrigerator repairs, and oven maintenance. Serving Accra with quality and reliability." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.megatechghana.com/" />
      </Helmet>
      <Suspense fallback={<Preloader />}>
        <Preloader />
        <Navbar />
      </Suspense>
      <div className='relative'>
        <img src="../assets/home/ac.webp" alt="Air Conditioner" className='w-full lg:h-96 lg:object-cover object-contain' />
        <div className='absolute left-20 top-7 lg:top-1/2 lg:left-72 transform -translate-x-1/2 -translate-y-1/2 font-bold text-xl lg:text-4xl'>
          {/* buttons */}
          <div className='flex flex-row gap-16 justify-center align-middle mt-32 whitespace-nowrap lg:visible xl:visible invisible'>
            <span className='mt-16 justify-center items-center'>
              <Link to="/products" className='customBtn1'>
                Our Products
              </Link>
            </span>
          </div>
        </div>
      </div>
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
      {/* our services */}
      <div className='relative bg-light-gray'>
        <ScrollReveal>
          <div className='pt-10'>
            <Link to={'services'}><h1 className='text-3xl font-pt-serif font-light'>Our Services</h1></Link>
            <hr className='mt-5 w-6 mx-auto text-center items-center border-2 lg:mx-auto' />
          </div>
        </ScrollReveal>
        {/* our services */}
        <div className='flex flex-col lg:px-40 px-5 mx-auto gap-5'>
          <ScrollReveal>
            <div className='flex flex-col lg:flex-row justify-center items-center flex-1 w-full h-full mx-auto mt-10 lg:px-0 lg:mt-10 gap-5 lg:gap-10'>
              <div className='otherProduct'>
                <img src='../assets/ourservices/acrepairs.jpg' alt='air condition' className='w-full h-48 object-cover transform hover:scale-105 transition duration-500 ease-in-out rounded-xl shadow-lg' />
                <p className='text-gray text-base capitalize mt-2'>Air conditioner sales & Installation</p>
                <p className='text-justify mt-2 tracking-tighter font-light text-sm capitalize'>
                  We offer a wide range of high-quality air conditioning units suitable for both residential and commercial use. Our expert technicians ensure seamless installation,
                  optimizing performance and energy efficiency while maintaining safety and compliance with industry standards.
                </p>

              </div>
              <div className='otherProduct'>
                <img src='../assets/ourservices/openac.jpg' alt='air condition' className='w-full h-48 object-cover transform hover:scale-105 transition duration-500 ease-in-out rounded-xl shadow-lg' />
                <p className='text-base text-gray capitalize mt-2'>General Maintainance Services</p>
                <p className='text-justify tracking-tighter mt-2 font-light text-sm capitalize'>
                  Our general maintenance services cover routine inspections, cleaning, and minor repairs for home and commercial appliances. Regular
                  maintenance helps extend equipment lifespan, improve performance, and prevent costly breakdowns.
                </p>
              </div>
              <div className='otherProduct'>
                <img src='../assets/ourservices/gasrepair.jpg' alt='air condition' className='w-full h-48 object-cover transform hover:scale-105 transition duration-500 ease-in-out rounded-xl shadow-lg' />
                <p className='text-gray text-base capitalize mt-2'>Reparation of Gas & Electric Ovens</p>
                <p className='text-justify mt-2 tracking-tighter font-light text-sm capitalize'>
                  We specialize in diagnosing and repairing faults in both gas and electric ovens. Whether it’s a malfunctioning heating element, ignition issue, or control panel fault,
                  our trained technicians restore your oven’s functionality with reliable and safe solutions.
                </p>
              </div>
              <div className='otherProduct'>
                <img src='../assets/ourservices/refrigerator.jpg' alt='air condition' className='w-full h-48 object-cover transform hover:scale-105 transition duration-500 ease-in-out rounded-xl shadow-lg' />
                <p className='text-gray text-base capitalize mt-2'>refrigerator repairs</p>
                <p className='text-justify mt-2 tracking-tighter font-light text-sm capitalize'>
                  Our refrigerator repair service addresses issues such as poor cooling, unusual noises, compressor faults, and gas leaks. We handle repairs for all
                  major brands and models, ensuring quick restoration to preserve your food and comfort.
                </p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal animationClass="animate-slide-left mb-10 lg:mb-10" threshold={0.2} delay={300}>
            <Link to='/services' className='mb-10 lg:mb-10'>
              <button type='submit' className='border-x border-y mt-3 hover:text-white hover:bg-dark-gray text-sm pl-4 pr-4 rounded-md p-2 capitalize'>learn more</button>
            </Link>
          </ScrollReveal>
        </div>
      </div>
      {/* why us */}
      <div className='relative lg:mb-10 mb-10 lg:px-0 mx-auto w-full'>
        <ScrollReveal>
          <div className='pt-10'>
            <h1 className='text-3xl font-pt-serif font-light capitalize'>Why us</h1>
            <hr className='mt-5 w-6 text-center items-center mx-auto border-2 lg:mx-auto' />
          </div>
        </ScrollReveal>
        {/* why  us features */}
        <ScrollReveal>
          <div className='flex flex-col flex-2 lg:pt-10 lg:pb-16 lg:flex-row justify-between items-center w-full h-full mx-auto lg:px-80 mb-10 lg:mb-10 mt-5 gap-2 lg:gap-1'>
            <div className="flex flex-col justify-center items-center text-center w-full h-full lg:gap-5 gap-5">
              <div className='flex flex-col lg:flex-row items-center lg:gap-5 gap-5 text-lg text-gray capitalize'>
                <LiaToolsSolid className='text-6xl text-gray hover:text-black' />
                <p>Highly effective services </p>
              </div>
              <div className='flex flex-col lg:flex-row items-center lg:gap-5 gap-5 text-lg text-gray capitalize'>
                <CiSettings className='text-6xl text-gray hover:text-black' />
                <p>customize resolution</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-full lg:gap-5 gap-5">
              <div className='flex flex-col lg:flex-row items-center lg:gap-5 gap-5 text-lg text-gray capitalize'>
                <FaUserCheck className='text-6xl text-gray hover:text-black' />
                <p>Expect teams of professionals </p>
              </div>
              <div className='flex flex-col lg:flex-row items-center lg:gap-5 gap-5 text-lg text-gray capitalize'>
                <FaScaleBalanced className='text-6xl text-gray hover:text-black' />
                <p>Norminal prices of products </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
      {/* about us */}
      <ScrollReveal>
        <div className='relative flex flex-row justify-between gap-10 items-center w-full h-80 bg-light-gray lg:mb-10 mb-10'>
          {/* Image */}
          <div className='flex-1 lg:visible invisible justify-center items-center w-full h-full'>
            <img src="../assets/home/ac.jpg" alt="Air Conditioner" className='w-full h-80 object-cover' />
          </div>
          {/* About us */}
          <div className='flex flex-col lg:flex-1 justify-center items-center w-full h-full'>
            <Link to={'/aboutus'}><h1 className='text-3xl font-pt-serif font-light'>About us</h1></Link>
            <hr className='mt-5 w-6 text-center items-center border-2 lg:mx-auto' />
            <p className='text-justify mt-5 tracking-tighter font-light text-sm capitalize pr-14 pl-4'>
              Megatech cooling services is a registered firm that provides air-conditioning and electrical
              engineering services such as: refrigeration, air condition repairs, servicing, maintenance and
              installation; general electrical wiring and repairs; commercial and domestic appliances maintenance
              and servicing; cooking stoves and gas cookers repairs and installation; refrigerator and freezer repairs
              and installation; and electric motor maintenance and electric system conditions.
            </p>
            <span className='justify-center text-center mt-2'>
              <Link to="/aboutus"><p className='capitalize text-gray hover:text-black font-light text-base lg:text-base underline text-center'>read More</p></Link>
            </span>
          </div>
        </div>
      </ScrollReveal>
      {/* our work */}
      <div className='w-full flex flex-col text-center justify-center px-4 sm:px-10 lg:px-52 xl:px-80 mx-auto'>
        <ScrollReveal>
          <div className='text-center'>
            <h1 className='text-3xl font-pt-serif font-light capitalize'><span className="text-gray">watch:</span> our  work</h1>
            <hr className='mt-5 w-6 text-center items-center border-2 mx-auto lg:mx-auto' />
          </div>
        </ScrollReveal>
      </div>
      <ScrollReveal animationClass="animate-slide-left" threshold={0.2} delay={300}>
        {/* video */}
        <div className='backgroundImg mt-16 mb-16 px-4 sm:px-10 lg:px-32 xl:px-80'>
          <video className='w-full h-auto rounded-lg shadow-md' controls loop>
            <source src="../assets/video/acinstallationvideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </ScrollReveal>
      {/* Gallery */}
      <Suspense fallback={<div>Loading Gallery...</div>}>
        <Gallery />
      </Suspense>
      {/* clients */}
      <div className="mt-5 px-4 lg:px-52">
        <ScrollReveal>
          <div className="text-center mt-2 fade-in">
            <h1 className='text-3xl font-pt-serif font-light capitalize'>Our clients</h1>
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
      {/* Contact Us */}
      <div className='relative lg:px-64 bg-light-gray'>
        <ScrollReveal>
          <div className='lg:pt-10 pt-10'>
            <Link to={'/contactus'}><h1 className='text-3xl font-pt-serif font-light capitalize'>contact us</h1></Link>
            <hr className='mt-5 w-6 text-center mx-auto items-center border-2 lg:mx-auto' />
          </div>
        </ScrollReveal>
        {/* information */}
        <div className='flex flex-col lg:flex-row justify-between items-center w-full h-full mx-auto mt-5 lg:px-0 lg:mt-10 lg:pb-16 pb-16 gap-2'>
          <ScrollReveal>
            <div className='lg:border-r lg:border-y-0 border-b text-justify tracking-tighter mt-3 text-sm pl-4 pr-4 p-6'>
              <div className='flex justify-center items-center'>
                <PiMapPinArea className='text-3xl text-gray hover:text-black' />
              </div>
              <h3 className='text-center text-lg text-gray hover:text-black mt-1 mb-1  capitalize'> Our Office Address</h3>
              <p className='whitespace-nowrap lg:text-base'>
                Adjen Kotoku, Amasaman, Accra
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className='lg:border-r lg:border-y-0 border-b text-justify tracking-tighter mt-3 text-sm pl-4 pr-4 p-6'>
              <div className="justify-center items-center text-center">
                <div className='flex justify-center items-center'>
                  <MdOutlineEmail className='text-3xl text-gray hover:text-black' />
                </div>
                <h3 className='text-center text-lg text-gray hover:text-black mt-1 mb-1  capitalize'> general enquires</h3>
                <p className='whitespace-nowrap lg:text-base' onClick={() => window.location.href = 'mailto:megatechcoolingservicesgh@gmail.com'}>
                  megatechcoolingservicesgh@gmail.com
                </p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className='lg:border-r lg:border-y-0 border-b text-justify tracking-tighter mt-3 text-sm pl-4 pr-4 p-6'>
              <div className='flex justify-center items-center'>
                <FiPhoneCall className='text-3xl text-gray hover:text-black' />
              </div>
              <h3 className='text-center text-lg text-gray hover:text-black mt-1 mb-1  capitalize'> Call Us</h3>
              <p className='whitespace-nowrap lg:text-base text-center'>
                +233 0244523845 | +233 0201588787
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className='text-justify tracking-tighter mt-3 text-sm pl-4 pr-4 p-6'>
              <div className='flex justify-center items-center'>
                <IoTimeOutline className='text-3xl text-gray hover:text-black' />
              </div>
              <h3 className='text-center text-lg text-gray hover:text-black mt-1 mb-1  capitalize'> Our timings</h3>
              <p className='whitespace-nowrap lg:text-base'>
                Monday - Saturday
              </p>
              <p className='whitespace-nowrap lg:text-base'>
                8:00 am - 7:00 pm
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
      {/* get direction */}
      <div className='relative lg:mb-10 mb-10 lg:px-0 lg:mt-10 mt-5'>
        <ScrollReveal>
          <div>
            <h1 className='text-3xl font-pt-serif font-light capitalize'>get direction</h1>
            <hr className='mt-5 w-6 text- mx-auto items-center border-2 lg:mx-auto' />
          </div>
        </ScrollReveal>
        {/* embedded link */}
        <ScrollReveal animationClass="animate-slide-left" threshold={0.2} delay={300}>
          <div className='text-center justify-center mx-auto mt-10 lg:px-52 lg:mt-10 mb-10 lg:mb-10 gap-2 lg:gap-1 lg:pb-10 pb-10'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8529.392427774788!2d-0.3009868!3d5.7067147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfa0205c8a47a9%3A0x96835ac19d3c7dc!2sAmasaman!5e1!3m2!1sen!2sgh!4v1745943686241!5m2!1sen!2sgh"
              width="100%"
              height={450}
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Embed - Amasaman"
            />
          </div>
        </ScrollReveal>
      </div>
      {/* Testimonials */}
      <ScrollReveal>
        <div className="w-full bg-gray-100 py-10 px-4 sm:px-10 lg:px-40 mb-5 lg:mb-10 bg-light-gray relative">
          <h1 className="text-3xl font-eb-garamond font-semibold text-center capitalize">
            What our customers say
          </h1>
          <hr className="mt-5 w-6 text-center mx-auto border-2" />

          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
          >
            ◀
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
          >
            ▶
          </button>

          <div
            ref={scrollRef}
            className="overflow-x-auto flex space-x-6 mt-10 px-2 no-scrollbar"
          >
            {[
              {
                name: "John Dankwa",
                message: "Fantastic service! They installed our AC quickly and professionally.",
                image: "../assets/home/user.jpg",
              },
              {
                name: "Jane Akua Ansong",
                message: "Reliable maintenance and very courteous technicians.",
                image: "../assets/home/female2.jpg",
              },
              {
                name: "Michael Debrah",
                message: "Great customer care and fast responses. Highly recommend!",
                image: "../assets/home/male1.jpg",
              },
              {
                name: "Esther Tetteh",
                message: "Great products and AC installation.",
                image: "../assets/home/female1.png",
              },
              {
                name: "Sampson Asare",
                message: "Fast responds for maintainance and great service.",
                image: "../assets/home/male2.jpg",
              },
              {
                name: "Peter Ntem",
                message: "Great customer for my gas and oven repairs.",
                image: "../assets/home/male3.jpg",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="min-w-[280px] max-w-sm bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center lg:mb-5 mb-5"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 object-cover rounded-full mb-4 shadow-md"
                />
                <p className="text-sm italic text-gray-600 mb-4">"{testimonial.message}"</p>
                <h4 className="font-semibold text-base">{testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
      {/* footer */}
      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default Home
