import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // Re-added original import
import { Preloader } from '../components/Preloader'; // Re-added original import
import Footer from '../components/Footer'; // Re-added original import
import ScrollReveal from '../components/ScrollReveal'; // Re-added original import
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Re-added original import
import { Link } from 'react-router-dom'; // Re-added original import
import { FaXTwitter } from 'react-icons/fa6'; // Re-added original import

const Gallery = () => {
    // Array of all image paths for the gallery
    const allImages = [
        "../assets/gallery/mega1.jpg",
        "../assets/ourservices/openac.jpg",
        "../assets/gallery/IMG-20250527-WA0015.jpg",
        "../assets/gallery/IMG-20250527-WA0008.jpg",
        "../assets/gallery/IMG-20250527-WA0020.jpg",
        "../assets/gallery/IMG-20250527-WA0017.jpg",
        "../assets/gallery/IMG-20250527-WA0016.jpg",
        "../assets/gallery/IMG-20250527-WA0018.jpg",
        "../assets/gallery/IMG-20250527-WA0007.jpg",
        "../assets/gallery/IMG-20250527-WA0019.jpg",
        "../assets/gallery/IMG-20250527-WA0026.jpg",
        "../assets/gallery/IMG-20250527-WA0027.jpg",
        "../assets/gallery/IMG-20250527-WA0028.jpg",
        "../assets/gallery/IMG-20250527-WA0021.jpg",
        "../assets/gallery/IMG-20250527-WA0038.jpg",
        // Add more image paths here if you have them
    ];

    // State to manage the current page number
    const [currentPage, setCurrentPage] = useState(1);
    // Number of images to display per page
    const imagesPerPage = 9;

    // Calculate the start and end index for images on the current page
    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    // Get the images for the current page
    const currentImages = allImages.slice(indexOfFirstImage, indexOfLastImage);

    // Calculate the total number of pages
    const totalPages = Math.ceil(allImages.length / imagesPerPage);

    // Function to change the current page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Function to go to the previous page
    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Function to go to the next page
    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className='Gallery cursor-pointer'>
            <Preloader /> {/* Original Preloader component */}
            <Navbar /> {/* Original Navbar component */}
            {/* Sticky Social Media Bar */}
            <ScrollReveal animationClass="animate-fade-in" threshold={0.5}> {/* Original ScrollReveal wrapper */}
                <div className="fixed top-1/2 right-4 transform -translate-y-1/2 flex flex-col gap-4 z-50">
                    {/* Original Link component */}
                    <Link to={' '}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-fbcolor hover:bg-fbcolor text-white rounded-full p-2 transition hover:scale-110 duration-500 transform ease-in-out"
                        aria-label="Facebook"
                    >
                        <FaFacebook size={26} /> {/* Original FaFacebook icon */}
                    </Link>
                    {/* Original Link component */}
                    <Link to={' '}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black hover:bg-black text-white rounded-full p-2 transition hover:scale-110 duration-500 transform ease-in-out"
                        aria-label="Twitter"
                    >
                        <FaXTwitter size={26} /> {/* Original FaXTwitter icon */}
                    </Link>
                    {/* Original Link component */}
                    <Link to={' '}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-insta-color hover:bg-insta-color text-white rounded-full p-2 transition hover:scale-110 duration-500 ease-in-out"
                        aria-label="Instagram"
                    >
                        <FaInstagram size={26} /> {/* Original FaInstagram icon */}
                    </Link>
                    {/* Original Link component */}
                    <Link to={' '}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-whatsapp-color hover:bg-whatsapp-color text-white rounded-full p-2 transition hover:scale-110 duration-500 transform ease-in-out"
                        aria-label="WhatsApp"
                    >
                        <FaWhatsapp size={26} /> {/* Original FaWhatsapp icon */}
                    </Link>
                </div>
            </ScrollReveal>
            {/* Gallery title */}
            <div className='flex flex-col lg:px-64 lg:mx-auto lg:mt-5 mt-5 lg:mb-10 mb-5 px-4 gap-5 relative'>
                <ScrollReveal> {/* Original ScrollReveal wrapper */}
                    <div className='lg:pt-10 pt-10 text-center mb-5'>
                        <h1 className='text-3xl font-pt-serif font-light capitalize'>our Gallery</h1> {/* Original font-pt-serif */}
                        <hr className='mt-5 w-6 text-center mx-auto border-2' />
                    </div>
                </ScrollReveal>

                {/* Dynamic Gallery Content */}
                <ScrollReveal> {/* Original ScrollReveal wrapper */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {currentImages.map((image, index) => (
                            <div key={index} className='w-full h-56 overflow-hidden rounded-lg shadow-xl'>
                                <img
                                    src={image}
                                    alt={`gallery images ${indexOfFirstImage + index + 1}`}
                                    className='w-full h-full object-cover transform hover:scale-105 hover:shadow-2xl transition duration-500 ease-in-out'
                                    // Fallback for broken images
                                    onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/600x400/cccccc/333333?text=Image+Not+Found`; }}
                                />
                            </div>
                        ))}
                    </div>
                </ScrollReveal>

                {/* Pagination Controls */}
                <div className="flex justify-center mt-8">
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        {/* Previous Button */}
                        <button
                            onClick={goToPreviousPage}
                            disabled={currentPage === 1}
                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <span className="sr-only">Previous</span>
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 010 1.06L9.06 10l3.73 3.71a.75.75 0 11-1.06 1.06l-4.25-4.25a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0z" clipRule="evenodd" />
                            </svg>
                        </button>

                        {/* Page Numbers */}
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i + 1}
                                onClick={() => paginate(i + 1)}
                                className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium transition-colors duration-200 ${
                                    currentPage === i + 1
                                        ? 'z-10 bg-light-gray border-dark-gray text-black'
                                        : 'text-gray hover:bg-white'
                                }`}
                            >
                                {i + 1}
                            </button>
                        ))}

                        {/* Next Button */}
                        <button
                            onClick={goToNextPage}
                            disabled={currentPage === totalPages}
                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <span className="sr-only">Next</span>
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 010-1.06L10.94 10 7.21 6.29a.75.75 0 111.06-1.06l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </nav>
                </div>
            </div>
            <Footer /> 
        </div>
    )
}

export default Gallery;
