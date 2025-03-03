import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const ShopContext = createContext();

export const ShopListProvider = ({ children }) => {
    const [shop, setShop] = useState([]);

    const pushShop = (obj) => {
        if (shop.length == 0) {
            let current = [...shop]
            current.push({ ...obj, count: 1 })
            setShop(current)
        } else {
            let current = [...shop]
            let finded = current.find((product) => {
                return product.id == obj.id
            })

            if (!finded) {
                current.push({ ...obj, count: 1 })
                setShop(current)
            } else {
                toast.warning('Bu mahsulot allaqachon savatchada mavjud!', {
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

            }
        }
    }


    const incr =(i)=>{
        let current =[...shop]
        if(current[i].stock !== current[i].count){
            current[i].count += 1
        }else{
            toast.info('Mahsulot tugadi', {
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        setShop(current)
    }

    const decr =(i)=>{
        let current =[...shop]
        if(current[i].count > 1){
            current[i].count -= 1
        }else{
            current.splice(i , 1)
        }
        setShop(current)
    }

    const delet =(i)=>{
        let current =[...shop]
        current.splice(i, 1)
        setShop(current)
    }

    return (
        <ShopContext.Provider value={{ shop, setShop, pushShop , decr, incr ,delet}}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopListProvider;