import { createContext, useState } from "react";

export const ShopContext = createContext();

export const ShopListProvider = ({ children }) => {
    const [shop, setShop] = useState([]);

    return (
        <ShopContext.Provider value={{ shop, setShop }}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopListProvider;