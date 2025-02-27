import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CiSearch, CiStar, CiUser } from "react-icons/ci";
import { apiClient } from '../../utils/apisevis';
import { FaShopify } from 'react-icons/fa6';
import { ShopContext } from '../../Context/ShopList';

const Navbar = () => {
    const {shop} = useContext(ShopContext)




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
                    <Link to={"/category"} className="ml-5 hover:text-gray-900">
                        Kategoriya
                    </Link>



                </nav>

                <div className="flex items-center gap-4">
                    <CiStar className="w-5 h-5 cursor-pointer text-gray-600 hover:text-gray-900" />
                    <CiUser className="w-5 h-5 cursor-pointer text-gray-600 hover:text-gray-900" />
                    <button className='flex items-center  '>
                        <FaShopify className="w-5 h-5 cursor-pointer text-gray-600 hover:text-gray-900" />
                        <sup className='text-[15px]'>{shop.length}</sup>
                    </button>

                </div>
            </div>
        </header >
    )

}

export default Navbar