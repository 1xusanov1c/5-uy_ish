import React, { useContext, useEffect, useState } from 'react'
import { product } from '../../utils/urls'
import { apiClient } from '../../utils/apisevis'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import img1 from "../../assets/images/Rectangle 1763.jpg";
import img2 from "../../assets/images/Rectangle 1764.jpg";
import img3 from "../../assets/images/Rectangle 1765.jpg";
import img4 from "../../assets/images/Rectangle 1766.jpg";
import { ShopContext } from '../../Context/ShopList'
import { Carousel } from 'antd'



const Products = () => {
    const [data, setData] = useState()

    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState(null)
    const [total, setTotal] = useState(0)
    const [skip, setSkip] = useState(1)
    const { shop, setShop } = useContext(ShopContext)
    const { pushShop } = useContext(ShopContext)



    const getProduct = async () => {
        let res = await apiClient({
            url: category == null ? product + `?limit=20&skip=${(skip - 1) * 20}` : product + `/category/${category}`
        })


        if (res?.status === 200) {
            setData(res?.data?.products)
            let current_page = []
            for (let i = 1; i <= Math.ceil(res?.data?.total / 20); i++) {
                current_page.push(i)
            }
            setTotal(current_page)


        }
    }

    useEffect(() => {
        getProduct()
    }, [category, skip])

    const getCategories = async () => {
        let res = await apiClient({
            url: '/products/category-list'
        })

        setCategories(res?.data)
    }


    useEffect(() => {
        getCategories()
    }, [])


    return (
        <div className="container mx-auto  ">
            <div className='mt-[75px]'>
                <Carousel
                    autoplay
                    autoplaySpeed={3000}
                    dots={true}
                    style={{ width: '100%', height: '50vh' }}>
                    <div>
                        <img style={{ width: '100%', height: '50vh', objectFit: 'cover' }} src="https://premkley.ru/data/action.jpg" alt="aksiya" />
                    </div>
                    <div>
                        <img style={{ width: '100%', height: '50vh', objectFit: 'cover' }} src="https://blog.sf.education/wp-content/uploads/2023/12/1625710906_10-phonoteka-org-p-skidki-art-krasivo-18-1536x864-1.jpg" alt="aksiya" />
                    </div>
                    <div>
                        <img style={{ width: '100%', height: '50vh', objectFit: 'cover' }} src="https://static.baza.drom.ru/drom/1424503854402_bulletin" alt="aksiya" />
                    </div>

                </Carousel>
                <div className='grid grid-cols-4 gap-3  mt-5'>
                    <img src={img1} alt="Product 1" className='h-[250px] w-full ' />
                    <img src={img2} alt="Product 1" className='h-[250px] w-full ' />
                    <img src={img3} alt="Product 1" className='h-[250px] w-full ' />
                    <img src={img4} alt="Product 1" className='h-[250px] w-full ' />
                </div>
            </div>
            {data?.length > 0 ? (
                <div className='flex flex-col '>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-10 mb-10">
                        {data.map((item) => (
                            <Link to={`/product/${item.id}`} key={item.id}>
                                <div className="rounded-xl hover:shadow-xl p-3 bg-white">
                                    <img
                                        className="w-full object-contain h-[250px] rounded-lg hover:scale-105 transition-transform duration-300"
                                        src={item?.thumbnail}
                                        alt={item?.title}
                                    />
                                    <p className="mt-2 font-semibold">{item?.title}</p>
                                    <div className='flex justify-between items-center'>
                                        <p className="text-gray-600">
                                            Narxi: <span className="font-bold">{item?.price}$</span>
                                        </p>
                                        <button className='py-2 px-3 rounded-xl mt-2 bg-green-500 text-white active:bg-green-800'
                                            onClick={(e) => {
                                                e.preventDefault();
                                                pushShop(item)

                                            }}>
                                            Sotib olish
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className='flex justify-center mt-5'>

                        {
                            total.map((item) => {
                                return <button
                                    key={item}
                                    className={`py-2 px-3 rounded-lg ml-2 border my-5 ${skip == item && "bg-indigo-500"}`}
                                    onClick={() => {
                                        setSkip(item)
                                        // console.log(item);

                                    }}>
                                    {item}
                                </button>


                            })
                        }
                    </div>
                </div>

            ) : (
                <p className="text-center text-gray-500">Ma'lumotlar yo‘q</p>
            )}
        </div>
    )
}

export default Products



