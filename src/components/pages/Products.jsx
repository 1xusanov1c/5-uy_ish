import React, { useEffect, useState } from 'react'
import { product } from '../../utils/urls'
import { apiClient } from '../../utils/apisevis'
import { Link } from 'react-router-dom'
import axios from 'axios'

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
            {data?.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
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



