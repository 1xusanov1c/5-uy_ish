import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black text-white body-font">
            <div className="container px-5 py-10 mx-auto">
                <div className="flex flex-wrap md:text-left text-center order-first">
                    
                    {/* Birinchi ustun */}
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-300 tracking-widest text-sm mb-3">CATEGORIES</h2>
                        <nav className="list-none mb-4 space-y-2">
                            <li><Link className="hover:text-gray-400">First Link</Link></li>
                            <li><Link className="hover:text-gray-400">Second Link</Link></li>
                            <li><Link className="hover:text-gray-400">Third Link</Link></li>
                            <li><Link className="hover:text-gray-400">Fourth Link</Link></li>
                        </nav>
                    </div>

                    {/* Ikkinchi ustun */}
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-300 tracking-widest text-sm mb-3">ABOUT</h2>
                        <nav className="list-none mb-4 space-y-2">
                            <li><Link className="hover:text-gray-400">Company Info</Link></li>
                            <li><Link className="hover:text-gray-400">Careers</Link></li>
                            <li><Link className="hover:text-gray-400">Press</Link></li>
                            <li><Link className="hover:text-gray-400">Contact</Link></li>
                        </nav>
                    </div>

                    {/* Uchinchi ustun */}
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-300 tracking-widest text-sm mb-3">HELP</h2>
                        <nav className="list-none mb-4 space-y-2">
                            <li><Link className="hover:text-gray-400">FAQs</Link></li>
                            <li><Link className="hover:text-gray-400">Shipping & Returns</Link></li>
                            <li><Link className="hover:text-gray-400">Order Tracking</Link></li>
                            <li><Link className="hover:text-gray-400">Support</Link></li>
                        </nav>
                    </div>

                    {/* To‘rtinchi ustun - Subscribe */}
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-300 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
                        <div className="flex flex-col items-center md:items-start">
                            <input type="text" id="footer-field" name="footer-field" placeholder="Email kiriting"
                                className="w-full bg-gray-800 text-white rounded border border-gray-600 focus:border-indigo-500 text-base py-2 px-3 mb-2"
                            />
                            <button className="bg-indigo-500 text-white py-2 px-6 rounded hover:bg-indigo-600">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-gray-400 text-sm mt-2 text-center md:text-left">
                            Eng so‘ngi yangiliklardan xabardor bo‘ling!
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
