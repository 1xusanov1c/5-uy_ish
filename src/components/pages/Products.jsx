import React, { useContext, useEffect, useState } from 'react';
import { product } from '../../utils/urls';
import { apiClient } from '../../utils/apisevis';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import img1 from "../../assets/images/Rectangle 1763.jpg";
import img2 from "../../assets/images/Rectangle 1764.jpg";
import img3 from "../../assets/images/Rectangle 1765.jpg";
import img4 from "../../assets/images/Rectangle 1766.jpg";
import { ShopContext } from '../../Context/ShopList';
import { Carousel, Pagination } from 'antd';

const Products = () => {
    const [data, setData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState(null);
    const [total, setTotal] = useState([]);
    const [skip, setSkip] = useState(1);
    const { pushShop } = useContext(ShopContext);

    const getProduct = async () => {
        let res = await apiClient({
            url: category == null
                ? `${product}?limit=20&skip=${(skip - 1) * 20}`
                : `${product}/category/${category}`
        });

        if (res?.status === 200) {
            setData(res?.data?.products);
            let current_page = Array.from({ length: Math.ceil(res?.data?.total / 20) }, (_, i) => i + 1);
            setTotal(current_page);
        }
    };

    useEffect(() => {
        getProduct();
    }, [category, skip]);

    const getCategories = async () => {
        let res = await apiClient({ url: '/products/category-list' });
        setCategories(res?.data);
    };

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <div className="container mx-auto px-5">
            <div className='mt-10'>
                <Carousel autoplay autoplaySpeed={3000} dots>
                    {["https://premkley.ru/data/action.jpg",
                        "https://blog.sf.education/wp-content/uploads/2023/12/1625710906_10-phonoteka-org-p-skidki-art-krasivo-18-1536x864-1.jpg",
                        "https://static.baza.drom.ru/drom/1424503854402_bulletin"
                    ].map((img, index) => (
                        <div key={index}>
                            <img className="w-full h-[50vh] object-cover rounded-lg" src={img} alt="banner" />
                        </div>
                    ))}
                </Carousel>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                    {[img1, img2, img3, img4].map((img, index) => (
                        <img key={index} src={img} alt="Product" className='h-[250px] w-full rounded-lg shadow-md' />
                    ))}
                </div>
            </div>

            {data.length > 0 ? (
                <div className='flex flex-col'>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                        {data.map((item) => (
                            <Link to={`/product/${item.id}`} key={item.id} className="hover:shadow-lg transition">
                                <div className="rounded-lg p-4 bg-white border">
                                    <img
                                        className="w-full object-cover h-[250px] rounded-lg hover:scale-105 transition-transform duration-300"
                                        src={item.thumbnail}
                                        alt={item.title}
                                    />
                                    <p className="mt-2 font-semibold text-lg">{item.title}</p>
                                    <div className='flex justify-between items-center mt-2'>
                                        <p className="text-gray-700">
                                            Narxi: <span className="font-bold">{item.price}$</span>
                                        </p>
                                        <button
                                            className="py-2 px-4 rounded-lg bg-green-500 text-white hover:bg-green-600"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                pushShop(item);
                                            }}
                                        >
                                            Sotib olish
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="flex justify-center mt-5 mb-5">
                        <Pagination
                            current={skip}
                            total={total.length * 20}
                            pageSize={20}
                            onChange={(page) => setSkip(page)}
                            showSizeChanger={false}
                        />
                    </div>
                </div>
            ) : (
                <p className="text-center text-gray-500 mt-5">Ma'lumotlar yo‘q</p>
            )}
        </div>
    );
};

export default Products;
