import React, { useState } from 'react';

// Removed imports for Navbar, Preloader, Footer, ScrollReveal as they are external components
// and replaced react-icons with simple text/SVG placeholders for self-containment.

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
        <div className='Gallery cursor-pointer font-sans'> {/* Added font-sans for general styling */}
            {/* Replaced Preloader with a simple div */}
            <div className="flex items-center justify-center h-screen bg-gray-100 hidden">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
            </div>

            {/* Replaced Navbar with a simple header */}
            <header className="bg-gray-800 text-white p-4 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold">My Gallery App</h1>
                    <nav>
                        <ul className="flex space-x-4">
                            <li><a href="#" className="hover:text-gray-300">Home</a></li>
                            <li><a href="#" className="hover:text-gray-300">About</a></li>
                            <li><a href="#" className="hover:text-gray-300">Gallery</a></li>
                            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Sticky Social Media Bar - Replaced Link with a and react-icons with text/simple SVG */}
            <div className="fixed top-1/2 right-4 transform -translate-y-1/2 flex flex-col gap-4 z-50">
                <a href={'#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition hover:scale-110 duration-500 transform ease-in-out"
                    aria-label="Facebook"
                >
                    {/* Replaced FaFacebook with text */}
                    FB
                </a>
                <a href={'#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 hover:bg-gray-800 text-white rounded-full p-2 transition hover:scale-110 duration-500 transform ease-in-out"
                    aria-label="Twitter"
                >
                    {/* Replaced FaXTwitter with text */}
                    X
                </a>
                <a href={'#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-600 hover:bg-pink-700 text-white rounded-full p-2 transition hover:scale-110 duration-500 transform ease-in-out"
                    aria-label="Instagram"
                >
                    {/* Replaced FaInstagram with text */}
                    IG
                </a>
                <a href={'#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white rounded-full p-2 transition hover:scale-110 duration-500 transform ease-in-out"
                    aria-label="WhatsApp"
                >
                    {/* Replaced FaWhatsapp with text */}
                    WA
                </a>
            </div>

            {/* Gallery title */}
            <div className='flex flex-col lg:px-64 lg:mx-auto lg:mt-5 mt-5 lg:mb-10 mb-5 px-4 gap-5 relative'>
                {/* Removed ScrollReveal wrapper */}
                <div className='lg:pt-10 pt-10 text-center mb-5'>
                    <h1 className='text-3xl font-serif font-light capitalize'>our Gallery</h1> {/* Changed font-pt-serif to font-serif for broader compatibility */}
                    <hr className='mt-5 w-6 text-center mx-auto border-2' />
                </div>

                {/* Dynamic Gallery Content */}
                {/* Removed ScrollReveal wrapper */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {currentImages.map((image, index) => (
                        <div key={index} className='w-full h-56 overflow-hidden rounded-lg shadow-xl'>
                            <img
                                src={image}
                                alt={`gallery image ${indexOfFirstImage + index + 1}`}
                                className='w-full h-full object-cover transform hover:scale-105 hover:shadow-2xl transition duration-500 ease-in-out'
                                // Fallback for broken images
                                onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/600x400/cccccc/333333?text=Image+Not+Found`; }}
                            />
                        </div>
                    ))}
                </div>

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
                            {/* Replaced SVG with a simple arrow */}
                            &#8249;
                        </button>

                        {/* Page Numbers */}
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i + 1}
                                onClick={() => paginate(i + 1)}
                                className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium ${
                                    currentPage === i + 1 ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600' : 'text-gray-700 hover:bg-gray-50'
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
                            {/* Replaced SVG with a simple arrow */}
                            &#8250;
                        </button>
                    </nav>
                </div>
            </div>
            {/* Replaced Footer with a simple footer */}
            <footer className="bg-gray-800 text-white p-4 mt-10">
                <div className="container mx-auto text-center">
                    <p>&copy; {new Date().getFullYear()} My Gallery. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Gallery;
