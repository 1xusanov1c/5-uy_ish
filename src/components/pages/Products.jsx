import React, { useEffect, useState } from 'react'
import { product } from '../../utils/urls'
import { apiClient } from '../../utils/apisevis'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // Agar navigation kerak bo‘lsa
import { Navigation } from "swiper/modules";
import img1 from "../../assets/images/Rectangle 1763.jpg";
import img2 from "../../assets/images/Rectangle 1764.jpg";
import img3 from "../../assets/images/Rectangle 1765.jpg";
import img4 from "../../assets/images/Rectangle 1766.jpg";



const Products = () => {
    const [data, setData] = useState()

    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState(null)

    const getCategories = async () => {
        let res = await apiClient({
            url: '/products/category-list'
        })

        setCategories(res?.data)
    }


    useEffect(() => {
        getCategories()
    }, [])

    const getProduct = async () => {
        let res = await apiClient({
            url: product
        })
        console.log(res);


        if (res?.status === 200) {
            setData(res?.data?.products)
        }
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <div className="container mx-auto ">
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper w-full h-[400px] object-cover ">
                    <SwiperSlide><img className='object-contain' src="https://premkley.ru/data/action.jpg" alt="aksiya" /></SwiperSlide>
                    <SwiperSlide><img className='' src="https://blog.sf.education/wp-content/uploads/2023/12/1625710906_10-phonoteka-org-p-skidki-art-krasivo-18-1536x864-1.jpg" alt="aksiya" /></SwiperSlide>
                </Swiper>
                <div className='grid grid-cols-4 gap-3  mt-5'>
                    <img src={img1} alt="Product 1" className='h-[250px] w-full ' />
                    <img src={img2} alt="Product 1" className='h-[250px] w-full ' />
                    <img src={img3} alt="Product 1" className='h-[250px] w-full ' />
                    <img src={img4} alt="Product 1" className='h-[250px] w-full ' />
                </div>
            </div>
            {data?.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
                    {data.map((item) => (
                        <Link to={`/product-detail/${item.id}`} key={item.id}>
                            <div className="rounded-xl hover:shadow-xl p-3 bg-white">
                                <img
                                    className="w-full object-contain h-[250px] rounded-lg hover:scale-105 transition-transform duration-300"
                                    src={item.images}
                                    alt={item.title}
                                />
                                <p className="mt-2 font-semibold">{item.title}</p>
                                <p className="text-gray-600">
                                    Narxi: <span className="font-bold">{item.price}$</span>
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">Ma'lumotlar yo‘q</p>
            )}
        </div>
    )
}

export default Products



