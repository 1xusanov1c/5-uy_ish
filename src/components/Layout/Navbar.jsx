import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CiSearch, CiStar, CiUser } from "react-icons/ci";
import { apiClient } from '../../utils/apisevis';
import { FaShopify } from 'react-icons/fa6';
import { ShopContext } from '../../Context/ShopList';

const Navbar = () => {
    const { shop } = useContext(ShopContext)





    return (
        <header className="text-gray-600 body-font fixed w-full top-0 left-0 z-50 shadow-md bg-white h-16 flex items-center">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
                <nav className="flex flex-wrap items-center text-base">
                    <Link
                        to={"/product"}
                        className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
                    >
                        <h1>Logo</h1>
                    </Link>
                    <Link to={"/product"} className="ml-5 hover:text-gray-900">
                        Bosh saxifa
                    </Link>
                    <Link to={"/product/category"} className="ml-5 hover:text-gray-900">
                        Kategoriya
                    </Link>



                </nav>

                <div className="flex items-center gap-4">
                    <CiStar className="w-5 h-5 cursor-pointer text-gray-600 hover:text-gray-900" />
                    <Link to="/product/profil">
                        <img src="https://dummyjson.com/icon/emilys/128" alt="avatar"
                            className="rounded-full border w-[30px] h-[30px] object-cover" />
                    </Link>


                    <Link to={"/product/shop-list"}>
                        <button className='flex items-center  '>
                            <FaShopify className="w-5 h-5 cursor-pointer text-gray-600 hover:text-gray-900" />
                            <sup className='text-[15px]'>{shop.length}</sup>
                        </button></Link>

                </div>
            </div>
        </header >
    )

}

export default Navbar