import React, { useContext, useEffect, useState } from 'react';
import { apiClient } from '../../utils/apisevis';
import { category_list, product } from '../../utils/urls';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { ShopContext } from '../../Context/ShopList';

const Category = () => {
    const [data, setData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState(null);
    const [total, setTotal] = useState(0)
    const [skip, setSkip] = useState(1)
    const [search, setSearch] = useState(null)

    const { shop, setShop } = useContext(ShopContext)


    const getProduct = async () => {
        let res = await apiClient({
            url: category == null ? product + `?limit=21&skip=${(skip - 1) * 20}` : product + `/category/${category}?limit=21&skip=${(skip - 1) * 20} `
        })


        if (res?.status === 200) {
            setData(res?.data?.products)
            createPagination(res.data.total)


        }
    }

    useEffect(() => {
        getProduct();
    }, [category, skip]);


    const getCategories = async () => {
        let res = await apiClient({ url: category_list });
        setCategories(res?.data || []);
    };

    useEffect(() => {
        getCategories();
    }, []);

    const searchHandle = async () => {
        let res = await apiClient({
            url: `/products/search?q=${search}`
        })
        if (res?.status == 200) {
            setData(res.data.products)
            createPagination(res.data.total)
        }
    }

    const createPagination = (total) => {
        let current_page = []
        for (let i = 1; i <= Math.ceil(total / 21); i++) {
            current_page.push(i)
        }
        setTotal(current_page)

    }

    return (
        <div className="container mx-auto">
            <div className='grid grid-cols-4 mt-10 mb-10 gap-3'>
                <div className="col-span-1 border rounded-3xl p-3 h-[1300px]">
                    <div className="flex items-center bg-gray-800 px-3 py-2 rounded-full text-white">
                        <input
                            onChange={(val) => {
                                setSearch(val.target.value)
                            }}
                            type="text"
                            className="bg-transparent outline-none text-sm text-white placeholder-gray-400 flex-1"
                        />
                        <FaSearch className="w-5 h-5 text-gray-400 cursor-pointer" onClick={() => { searchHandle() }}
                        />
                    </div>
                    <ul>
                        <li
                            className={`py-2 px-3 border rounded-xl mt-2 ${category === null ? "bg-yellow-400" : ""}`}
                            onClick={() => setCategory(null)}
                        >
                            Barchasi
                        </li>
                        {categories.map((res) => (
                            <li
                                key={res}
                                className={`py-2 px-3 border rounded-xl mt-2 ${category === res ? "bg-yellow-400" : ""}`}
                                onClick={() => {
                                    setCategory(res)
                                    setSkip(1)
                                }}>
                                {res}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-span-3 border rounded-3xl mb-10">
                    {data.length > 0 ? (
                        <div className='col-span-3'>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
                                {data.map((item) => (
                                    <Link to={`/product-detail/${item.id}`} key={item.id}>
                                        <div className="rounded-xl hover:shadow-xl p-3 bg-white">
                                            <img
                                                className="w-full object-contain h-[250px] rounded-lg hover:scale-105 transition-transform duration-300"
                                                src={item.thumbnail}
                                                alt={item.title}
                                            />
                                            <p className="mt-2 font-semibold">{item.title}</p>
                                            <div className='flex justify-between items-center'>
                                                <p className="text-gray-600">
                                                    Narxi: <span className="font-bold">{item.price}$</span>
                                                </p>
                                                <button className='py-2 px-3 rounded-xl mt-2 bg-green-500 text-white active:bg-green-800'
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        let current = [...shop]
                                                        current.push(item)
                                                        setShop(current)
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
            </div>
        </div>
    );
};

export default Category;
