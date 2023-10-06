import React, { useState } from 'react';

const Navbar = () => {
    const navItems = ['About', 'Portfolio', 'Contact'];
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };
    return (
        <div className="bg-transparent py-4 backdrop-blur-xl text-white select-none relative">
            <div className="container mx-auto flex justify-between items-center px-6 sm:px-12">
                <div className="text-2xl font-bold cursor-pointer">H<span className='text-[#02e296]'>J</span></div>
                <button
                    onClick={toggleMobileMenu}
                    className="text-white focus:outline-none sm:hidden"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {mobileMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
                <ul className="hidden sm:flex space-x-6">
                    {navItems.map((nav, index) => (
                        <li key={index}>
                            <a
                                href={`#${nav.toLowerCase()}`}
                                className="hover:text-[#02e296] text-base transition-colors duration-300"
                            >
                                {nav}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="hidden sm:flex items-center relative">
                    <input
                        type="search"
                        name="search"
                        id="search"
                        className="border border-black rounded-md px-2 py-1 pr-8 text-black outline-none"
                        placeholder="Search"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6M9 17a8 8 0 100-16 8 8 0 000 16z"
                        />
                    </svg>
                </div>
            </div>
            <div className={`${mobileMenuOpen ? '' : 'hidden'} md:hidden bg-white w-full absolute left-0 -bottom-1/3 text-black`}>
                hi
            </div>
        </div>
    );
};

export default Navbar;
