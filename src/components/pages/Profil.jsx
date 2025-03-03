import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Profil = () => {
  const [user, setUser] = useState(null);
  const [avatar, setAvatar] = useState(null);

  // API'dan ma'lumot olish
  useEffect(() => {
    fetch("https://dummyjson.com/users/1") // 1-foydalanuvchi
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setAvatar(data.image);
      })
      .catch((error) => console.error("Xatolik yuz berdi:", error));
  }, []);

  // Rasm yuklash funksiyasi
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  if (!user) {
    return <div className="text-center text-xl">Yuklanmoqda...</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 mt-[75px]">
      <div className="bg-white p-6 rounded-lg shadow-md w-[900px] flex">
        {/* Forma va ma'lumotlar */}
        <div className="w-2/3">
          {/* Sarlavha */}
          <h1 className="text-3xl font-bold text-black">SHAXSIY KABINET</h1>

          {/* Forma */}
          <div className="grid grid-cols-2 gap-4 mt-4 border p-4 rounded-md">
            {/* Login va FIO */}
            <div>
              <label className="block font-medium">Login:</label>
              <input type="text" value={user.username} className="w-full p-2 border rounded-md bg-gray-100" readOnly />
            </div>
            <div>
              <label className="block font-medium">To‘liq ism:</label>
              <input type="text" value={`${user.firstName} ${user.lastName}`} className="w-full p-2 border rounded-md bg-gray-100" readOnly />
            </div>

            {/* Email va Telegram */}
            <div>
              <label className="block font-medium">Email manzil:</label>
              <input type="email" value={user.email} className="w-full p-2 border rounded-md bg-gray-100" readOnly />
            </div>
            <div>
              <label className="block font-medium">Telegram ID:</label>
              <input type="text" placeholder="Telegram ID yo‘q" className="w-full p-2 border rounded-md bg-gray-100" readOnly />
            </div>

            {/* Telefon va Plastik karta */}
            <div>
              <label className="block font-medium">Telefon raqam:</label>
              <input type="text" value={user.phone} className="w-full p-2 border rounded-md bg-gray-100" readOnly />
            </div>
            <div>
              <label className="block font-medium">Plastik karta raqami:</label>
              <input type="text" value={user.bank.cardNumber} className="w-full p-2 border rounded-md bg-gray-100" readOnly />
            </div>

            {/* Qo‘shimcha ma’lumot */}
            <div className="col-span-2">
              <label className="block font-medium">Qo‘shimcha ma’lumot:</label>
              <textarea rows="3" value={`Yosh: ${user.age}, Universitet: ${user.university}`} className="w-full p-2 border rounded-md bg-gray-100" readOnly></textarea>
            </div>
            <div>
                <Link to={'/product'} className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg cursor-pointer">
                Bosh sahifaga otish 
                </Link>
            </div>
          </div>
        </div>

        {/* Avatar bo‘limi */}
        <div className="w-1/3 flex flex-col items-center justify-center">
          <div className="w-32 h-32 border-2 border-gray-300 rounded-full overflow-hidden">
            {avatar ? (
              <img src={avatar} alt="Avatar" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500">
                + Avatar
              </div>
            )}
          </div>
          <label className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer">
            Rasm yuklash
            <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Profil;
