import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CiSearch, CiStar, CiUser } from "react-icons/ci";
import { FaShoppingBag, FaSearch } from "react-icons/fa";
import { apiClient } from '../../utils/apisevis';

const Navbar = () => {

    


    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
                <nav className="flex flex-wrap items-center text-base">
                    <Link
                        to={"/"}
                        className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
                    >
                        <h1>Logo</h1>
                    </Link>
                    <Link to={"/"} className="ml-5 hover:text-gray-900">
                        Bosh saxifa
                    </Link>

                    
                                  
                </nav>

                <div className="flex items-center gap-4">

                    <div className="flex items-center bg-gray-800 px-3 py-2 rounded-full">
                        <input
                            type="text"
                            placeholder="Poisk tovarov"
                            className="bg-transparent outline-none text-sm text-white placeholder-gray-400 flex-1"
                        />
                        <FaSearch className="w-5 h-5 text-gray-400 cursor-pointer" />
                    </div>
                    <CiStar className="w-5 h-5 cursor-pointer text-gray-600 hover:text-gray-900" />
                    <CiUser className="w-5 h-5 cursor-pointer text-gray-600 hover:text-gray-900" />
                    <FaShoppingBag className="w-5 h-5 cursor-pointer text-gray-600 hover:text-gray-900" />
                </div>
            </div>
        </header >
    )

}

export default Navbar