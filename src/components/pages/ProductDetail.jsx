import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { apiClient } from "../../utils/apisevis";
import { ShopContext } from "../../Context/ShopList";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { pushShop} = useContext(ShopContext)


    useEffect(() => {
        const getProductDetail = async () => {
            try {
                let res = await apiClient({ url: `/products/${id}` });
                if (res?.status === 200) {
                    setProduct(res?.data);
                }
            } catch (error) {
                console.error("Xatolik yuz berdi:", error);
            }
        };
        getProductDetail();
    }, [id]);

    if (!product) {
        return <p className="text-center text-gray-500">Ma'lumotlar yo‘q</p>;
    }

    return (
        <div className="container mx-auto  ">
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 mt-[75px]">
                <div className="flex flex-col items-center w-full ">
                <img
                    className="w-full h-[400px] object-contain rounded-lg"
                    src={product?.thumbnail || "https://via.placeholder.com/550x400?text=No+Image"}
                    alt={product?.title}
                />
                <div className="flex gap-2 mt-4">
                    {product?.images?.map((img, index) => (
                        <img
                            key={index}
                            className="w-16 h-16 object-contain border border-gray-300 rounded-lg cursor-pointer hover:border-black"
                            src={img}
                            alt="Thumbnail"
                        />
                    ))}
                </div>
            </div>

            <div>
                <h1 className="text-3xl font-bold mb-2">{product?.title}</h1>
                <p className="text-gray-600 mb-4">{product?.description}</p>
                <p className="text-xl font-semibold text-gray-800">{product?.price} $
                    {product?.discountPercentage && (
                        <span className="ml-2 text-red-500 text-lg">
                            (-{product?.discountPercentage}%)
                        </span>
                    )}
                </p>
                <p className="text-sm text-gray-600">Omborda: {product?.stock} dona</p>
                <p className="text-sm text-gray-600">Kafolat: {product?.warrantyInformation}</p>
                <p className="text-sm text-gray-600">Yetkazib berish: {product?.shippingInformation}</p>
                <p className="text-sm text-gray-600">Mavjudlik holati: {product?.availabilityStatus}</p>

                <button className="mt-4 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800"
                    onClick={() => {
                        pushShop(product)
                    }}>
                    Savatga qo'shish
                </button>

                <div className="mt-4 flex items-center">
                    <span className="text-yellow-500 text-xl">⭐ {product?.rating}</span>
                    <span className="ml-2 text-gray-600">({product?.reviews?.length || 0} fikrlar)</span>
                </div>

                <div className="mt-6 border-t pt-4">
                    <h2 className="text-xl font-semibold">Tavsif</h2>
                    <p className="text-gray-600 mt-2">{product?.description}</p>
                </div>
            </div>

            <div className="mt-6 border-t pt-4 w-full">
                <h2 className="text-xl font-semibold">Sharhlar</h2>
                {product?.reviews?.length > 0 ? (
                    product?.reviews.map((review, index) => (
                        <div key={index} className="mt-4 p-4 border rounded-lg w-full">
                            <p className="text-sm text-gray-700 font-semibold">{review?.reviewerName}</p>
                            <p className="text-sm text-yellow-500">⭐ {review?.rating}</p>
                            <p className="text-sm text-gray-600">{review?.comment}</p>
                            <p className="text-xs text-gray-500">{new Date(review?.date).toLocaleDateString()}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">Sharhlar yo‘q</p>
                )}
            </div>
            </div>
            
        </div>
    );
};

export default ProductDetail;