import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopList';
import { HiMinusSm, HiPlusSm } from 'react-icons/hi';
import { Col, Row } from 'antd';
import { MdDeleteOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Shop = () => {
  const shoptext = useContext(ShopContext)

  const getAllSumm = () => {
    let summ = 0
    shoptext.shop.forEach(element => {
      summ += (element?.count * element?.price)
    });

    return parseFloat(summ.toFixed(2));
  }

  return (
    <div className='container mx-auto '>
      <div className='grid grid-cols-2 mt-[75px]'>
        <div className=' flex flex-col gap-y-2 px-4 '>
          <div className="max-h-[500px] overflow-y-auto">
            {
              shoptext.shop.map((item, i) => {
                return <div key={item.id} className=' grid grid-cols-3 bg-[#F5F5F5FF] rounded-xl mb-5 p-3' >
                  <div className='col-span-1'>
                    <img src={item.thumbnail} alt={item.title} />
                  </div>

                  <div className='col-span-2 mt-2'>
                    <h2 className='text-lg font-semibold'>{item.title}</h2>

                    <div className="flex items-center  bg-gray-300 p-2 rounded-md w-[110px] mt-2">
                      <button className="px-1 py-1 bg-gray-500 text-white rounded text-center active:bg-gray-800"
                        onClick={() => {
                          shoptext.decr(i)
                        }}
                      ><HiMinusSm /></button>
                      <span className="px-4 text-lg">{item.count}</span>
                      <button className="px-1 py-1 bg-gray-500 text-white rounded text-center active:bg-gray-800"
                        onClick={() => {
                          shoptext.incr(i)
                        }}
                      ><HiPlusSm /></button>
                    </div>

                    <p className='mt-3'>Kategoriya: {item.category}</p>

                    <div className='flex justify-between p-3 mt-5 '>
                      <p>Narxi: {item.price} $</p>

                      <MdDeleteOutline
                        className="w-6 h-6 text-gray-500 cursor-pointer hover:text-gray-800"
                        onClick={() => shoptext.delet(i)} />
                    </div>

                  </div>
                </div>

              })
            }
          </div>
          <div className=" bg-white shadow-lg p-4 rounded-md">
            <p className="text-lg font-semibold">Umumiy summa: {getAllSumm()} $</p>
          </div>
        </div>


        <div>
          <p className='text-xl font-semibold'>Buyurtmani rasmiylashtirish</p>
          <div className="mb-3">
            <label className="block text-gray-700">Ism</label>
            <input type="text" className="w-full p-2 border rounded-md" placeholder="Ismingiz" />
          </div>

          <div className="mb-3">
            <label className="block text-gray-700">Familiya</label>
            <input type="text" className="w-full p-2 border rounded-md" placeholder="Familiyangiz" />
          </div>

          <div className="mb-3">
            <label className="block text-gray-700">Telefon</label>
            <input type="tel" className="w-full p-2 border rounded-md" placeholder="+998 (00) 000-00-00" />
          </div>

          {/* Yetkazib berish bo‘limi */}
          <h3 className="text-xl font-semibold mb-2">Yetkazib berish</h3>

          <div className="mb-3">
            <label className="block text-gray-700">Shahar</label>
            <input type="text" className="w-full p-2 border rounded-md" placeholder="Toshkent" />
          </div>

          <div className="mb-3">
            <label className="block text-gray-700">Ko‘cha</label>
            <input type="text" className="w-full p-2 border rounded-md" placeholder="Ko‘cha nomi" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Uy</label>
              <input type="text" className="w-full p-2 border rounded-md" placeholder="Uy raqami" />
            </div>

            <div>
              <label className="block text-gray-700">Kvartira / Ofis</label>
              <input type="text" className="w-full p-2 border rounded-md" placeholder="Kvartira yoki ofis" />
            </div>
          </div>

          <div className="mt-3">
            <label className="block text-gray-700">Kuryer uchun izoh</label>
            <input type="text" className="w-full p-2 border rounded-md" placeholder="Qo‘shimcha ma'lumot" />
          </div>

          <div className='flex justify-center'>
            <Link to={"/product"} className="mt-6  items-center bg-blue-500 text-white px-3 py-2 rounded-xl hover:bg-blue-600 mb-5">
              Buyurtmani tasdiqlash
            </Link>
          </div>

        </div>
      </div>
    </div >


  )
}


export default Shop