import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CiStar } from "react-icons/ci";
import { FaShopify } from 'react-icons/fa6';
import { HiMenu, HiX } from "react-icons/hi"; // Burger menyu ikonkalari
import { ShopContext } from '../../Context/ShopList';

const Navbar = () => {
    const { shop } = useContext(ShopContext);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="text-gray-600 body-font fixed w-full top-0 left-0 z-50 shadow-md bg-white h-16 flex items-center">
            <div className="container mx-auto px-4 flex items-center justify-between">
                
                {/* Logo */}
                <Link to={"/product"} className="font-medium text-gray-900 text-lg">
                    Logo
                </Link>

                {/* Burger menyu tugmasi (faqat mobil ekranlar uchun) */}
                <button className="md:hidden text-gray-700 text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <HiX /> : <HiMenu />}
                </button>

                {/* Menyu */}
                <nav className={`absolute top-16 left-0 w-full bg-white shadow-md md:static md:flex md:shadow-none md:w-auto md:space-x-5 ${menuOpen ? "block" : "hidden"}`}>
                    <Link to={"/product"} className="block p-3 md:p-0 hover:text-gray-900">
                        Bosh saxifa
                    </Link>
                    <Link to={"/product/category"} className="block p-3 md:p-0 hover:text-gray-900">
                        Kategoriya
                    </Link>
                </nav>

                {/* Ikonkalar */}
                <div className="flex items-center gap-4">
                    <CiStar className="w-5 h-5 cursor-pointer text-gray-600 hover:text-gray-900" />
                    
                    <Link to="/product/profil">
                        <img 
                            src="https://dummyjson.com/icon/emilys/128" 
                            alt="avatar"
                            className="rounded-full border w-[30px] h-[30px] object-cover"
                        />
                    </Link>

                    <Link to={"/product/shop-list"}>
                        <button className='relative flex items-center'>
                            <FaShopify className="w-5 h-5 text-gray-600 hover:text-gray-900" />
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                {shop.length}
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar;
