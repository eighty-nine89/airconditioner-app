import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaEllipsisV, FaTimes } from "react-icons/fa";
// import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp } from "react-icons/fa6";
// import { TbAirConditioning } from "react-icons/tb";
import { Link, useNavigate } from 'react-router-dom';

// Mock product data (replace with actual data)
const initialProducts = [
    { name: "Hisense Air Condition", category: "Air condtioner", price: 0, id: 1, slug: 'products' },
    { name: "Nasco Air Condition", category: "Air condtioner", price: 0, id: 2, slug: 'products' },
    { name: "Bruhm Air Condition", category: "Air condtioner", price: 0, id: 3, slug: 'products' },
    { name: "LG Air Condition", category: "Air condtioner", price: 0, id: 4, slug: 'products' },
    { name: "TCL Air Condition", category: "Air condtioner", price: 0, id: 5, slug: 'products' },
    { name: "Midea Air Condition", category: "Air condtioner", price: 0, id: 6, slug: 'products' },
    { name: "LG Electric Hob", category: "hob", price: 0, id: 7, slug: 'products' },
    { name: "Nasco Electric Hob", category: "hob", price: 0, id: 8, slug: 'products' },
    { name: "Hisense Gas Hob", category: "hob", price: 0, id: 9, slug: 'products' },
    { name: "LG Refrigerator", category: "refrigerator", price: 0, id: 10, slug: 'products' },
    { name: "Hisense Silver Fridge", category: "refrigerator", price: 0, id: 11, slug: 'products' },
    { name: "Hisense Mini Fridge", category: "refrigerator", price: 0, id: 12, slug: 'products' },
    { name: "Nasco Fridge", category: "refrigerator", price: 0, id: 13, slug: 'products' },
    { name: "Nasco Chest Freezer", category: "refrigerator", price: 0, id: 14, slug: 'products' },
    { name: "Nasco Mini Fridge", category: "refrigerator", price: 0, id: 15, slug: 'products' },

];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]); //  Initially empty
    const [showSuggestions, setShowSuggestions] = useState(false); // Control suggestion visibility
    const searchInputRef = useRef(null);
    const navigate = useNavigate();

    // Function to handle search and filter
    const handleSearch = useCallback((query) => {
        setSearchQuery(query);
        if (!query) {
            setFilteredProducts([]); // Clear suggestions when query is empty
            setShowSuggestions(false);
            return;
        }

        const lowerCaseQuery = query.toLowerCase();
        const filtered = initialProducts.filter(product =>
            product.name.toLowerCase().includes(lowerCaseQuery)
        );
        setFilteredProducts(filtered);
        setShowSuggestions(true); // Show suggestions when there's a query
    }, []);

    // Effect to handle search immediately
    useEffect(() => {
        handleSearch(searchQuery);
    }, [searchQuery, handleSearch]);

    // useEffect to focus on input when search icon is clicked.
    useEffect(() => {
        const searchInput = searchInputRef.current;
        if (searchInput) {
            searchInput.addEventListener('focus', () => {
                // do nothing, focus is handled.
            });
        }
    }, []);

    const handleSuggestionClick = (slug) => {
        // Navigate to the product page using React Router
        navigate(`/${slug}`);
        setSearchQuery('');        // Clear the search query
        setShowSuggestions(false); // Hide suggestions after clicking
        if (searchInputRef.current) {
            searchInputRef.current.blur();
        }
    };

    const handleBlur = () => {
        // Use a setTimeout to delay hiding the suggestions.  This gives the
        // handleSuggestionClick time to fire before the suggestions disappear.
        setTimeout(() => {
            setShowSuggestions(false);
        }, 100); // 100ms delay
    };

    const handleFocus = () => {
        if (searchQuery) {
            setShowSuggestions(true);
        }
    };

    return (
        <div className="Navbar cursor-pointer">
            {/* Top Contact Bar */}
            <div className='w-full bg-light-gray fixed z-40 lg:px-64'>
                <div className="flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-evenly mx-auto h-10 whitespace-nowrap">
                    {/* Phone and Email */}
                    <div className='flex flex-col lg:flex-row gap-2 items-center'>
                        {/* phone */}
                        <h4 className="text-xs lg:text-center font-light text-black my-2 lg:my-auto">
                            <span className='font-bold'>Phone:</span> +233 0244523845 or +233 0201588787
                        </h4>
                        {/* email */}
                        <h4 className="text-xs text-center lg:visible invisible font-light text-black my-2 lg:my-auto" onClick={() => window.location.href = 'mailto:megatechcoolingservicesgh@gmail.com'}>
                            <span className='font-bold'>Email: </span>megatechcoolingservicesgh@gmail.com
                        </h4>
                    </div>
                    {/* Open Hours and Social Media */}
                    <div className="flex flex-col lg:flex-row gap-2 text-xs items-center">
                        {/* open hours */}
                        <div className='openhours lg:visible invisible my-2 lg:my-auto'>
                            <h4><span className='font-bold'>Our Timing: </span> Mon - Sat, 8:00 am - 7:00 pm</h4>
                        </div>
                        <div className='socialmedia lg:visible invisible flex flex-row gap-2 my-2 lg:my-auto'>
                            <h4 className='font-bold'> Digital Address:</h4>
                            <div className='flex flex-row gap-2 font-light my-auto'>
                               GA - 000 - 0000
                            </div>
                        </div>
                        {/* social media */}
                        {/* <div className='socialmedia lg:visible invisible flex flex-row gap-2 my-2 lg:my-auto'>
                            <h4 className='font-bold'> Follow Us:</h4>
                            <div className='flex flex-row gap-2 font-light my-auto'>
                                <a href=" " target="_blank" rel="noreferrer"><FaWhatsapp className="w-fit text-dark-gray hover:text-black" /></a>
                                <a href=" " target="_blank" rel="noreferrer"><FaInstagram className="w-fit text-dark-gray hover:text-black" /></a>
                                <a href=" " target="_blank" rel="noreferrer"><FaLinkedin className="w-fit text-dark-gray hover:text-black" /></a>
                                <a href=" " target="_blank" rel="noreferrer"><FaTiktok className="w-fit text-dark-gray hover:text-black" /></a>
                                <a href=" " target="_blank" rel="noreferrer"><FaFacebook className="w-fit text-dark-gray hover:text-black" /></a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* Navbar */}
            <div className="w-full h-24 pt-10 px-5 lg:px-64 flex items-center justify-between relative">
                {/* Logo */}
                <div className='flex flex-row gap-2 lg:my-auto'>
                    {/* <TbAirConditioning className="w-fit text-2xl my-auto" /> */}
                    <img src="../assets/home/ac-favicon.png" alt="Logo" className="w-5 h-5 lg:w-6 lg:h-6 my-auto items-center" />
                    <Link to='/'>
                        <h4 className="font-light font-pt-serif whitespace-nowrap text-sm lg:text-base uppercase ">
                            MegaTech Cooling Services
                        </h4>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden lg:flex flex-row gap-5 text-gray text-sm whitespace-nowrap font-extralight z-30">
                    <li className="hover:text-black"><Link to="/">Home</Link></li>
                    <li className="hover:text-black"><Link to="/services">Services</Link></li>
                    <li className="hover:text-black"><Link to="/products">Products</Link></li>
                    <li className="hover:text-black"><Link to="/aboutus">About Us</Link></li>
                    <li className="hover:text-black"><Link to="/contactus">Contact Us</Link></li>
                </ul>

                {/* Desktop Search */}
                <div className="hidden lg:block lg:text-sm font-light relative">
                    <input
                        type="search"
                        placeholder="Search products here..."
                        className="p-1 lg:w-64 border-x-0 border-t-0 border-2 focus:outline-none border-gray focus:border-black"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        ref={searchInputRef}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                    />
                    {/* Suggestions Box */}
                    {showSuggestions && filteredProducts.length > 0 && (
                        <ul className="absolute z-10 w-64 bg-white border-y-0 border-b-8 border-b-gray rounded-sm shadow-lg mt-1">
                            {filteredProducts.map(product => (
                                <li
                                    key={product.id}
                                    className="px-2 py-2 w-fit hover:text-gray hover:underline cursor-pointer"
                                    onClick={() => handleSuggestionClick(product.slug)}
                                >
                                    {product.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Mobile Hamburger Button */}
                <div className="md:hidden z-50">
                    {menuOpen ? (
                        <FaTimes className="text-2xl cursor-pointer" onClick={() => setMenuOpen(false)} />
                    ) : (
                        <FaEllipsisV className="text-2xl cursor-pointer" onClick={() => setMenuOpen(true)} />
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg transition-all text-gray duration-300 ease-in-out z-40 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex flex-col items-center pt-20 space-y-6 text-lg font-light">
                    <Link to="/" className="hover:text-black" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/services" className="hover:text-black" onClick={() => setMenuOpen(false)}>Services</Link>
                    <Link to="/products" className="hover:text-black" onClick={() => setMenuOpen(false)}>Products</Link>
                    <Link to="/aboutus" className="hover:text-black" onClick={() => setMenuOpen(false)}>About Us</Link>
                    <Link to="/contactus" className="hover:text-black" onClick={() => setMenuOpen(false)}>Contact Us</Link>

                    {/* Mobile Search Bar */}
                    <div className="relative w-3/4">
                        <input
                            type="search"
                            placeholder="Search products here..."
                            className="p-2 w-full border-x-0 border-t-0 border-2 border-slate focus:outline-none focus:border-accent"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                        />
                        {/* Mobile Suggestions Box */}
                        {showSuggestions && filteredProducts.length > 0 && (
                            <ul className="absolute z-10 w-full bg-white border-y-0 border-b-8 border-b-accent rounded-sm shadow-lg mt-1">
                                {filteredProducts.map(product => (
                                    <li
                                        key={product.id}
                                        className="px-4 py-2 hover:bg-accent cursor-pointer"
                                        onClick={() => {
                                            handleSuggestionClick(product.slug);
                                            setMenuOpen(false);
                                        }}
                                    >
                                        {product.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;