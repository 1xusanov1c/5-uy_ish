import React, { useState } from "react";
import { CiLock } from "react-icons/ci";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { apiClient } from "../../utils/apisevis";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null); 
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null); 

        try {
            let res = await apiClient.post("/auth/login", {
                username: username,
                password: password,
            });
            if(res?.status === 200){
                const accessToken = res.data.accessToken;
                localStorage.setItem("token", accessToken);
                const refreshToken = res.data.refreshToken;
                localStorage.setItem("refresh", refreshToken);
                navigate('/product');
            }
        } catch (err) {
            setError("Login yoki parol noto'g'ri!");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen p-5 bg-cover bg-center" style={{ backgroundImage: "url('https://avatars.mds.yandex.net/i?id=436329507bc1d1c5dd526bb4a770a46f_l-10933600-images-thumbs&n=13')", backgroundColor: "rgba(0, 0, 0, 0.5)", backgroundBlendMode: "darken" }}>
            <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-lg flex flex-col items-center p-6 sm:p-8">
                <form className="w-full mt-6" onSubmit={handleLogin}>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="username" className="text-white text-lg">Username</label>
                        <div className="relative">
                            <VscAccount className="absolute text-2xl left-3 top-1/2 transform -translate-y-1/2 text-white" />
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Username kiriting"
                                className="pl-10 pr-4 py-3 border rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 mt-4">
                        <label htmlFor="password" className="text-white text-lg">Parol</label>
                        <div className="relative">
                            <CiLock className="absolute text-2xl left-3 top-1/2 transform -translate-y-1/2 text-white" />
                            <input
                                id="password"
                                className="border rounded-xl pl-10 p-3 pr-10 w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-3 flex items-center"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <FaRegEyeSlash className="text-gray-500 text-xl" />
                                ) : (
                                    <IoEyeOutline className="text-gray-500 text-xl" />
                                )}
                            </button>
                        </div>
                    </div>
                    {error && <p className="text-red-500 mt-3 text-sm">{error}</p>}
                    <button
                        type="submit"
                        className="mt-6 w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 text-lg transition duration-200"
                    >
                        Kirish
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
