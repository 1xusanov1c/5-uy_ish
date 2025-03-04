import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './components/pages/Products.jsx'
import ProductDetail from './components/pages/ProductDetail.jsx'
import Cotegory from './components/pages/Cotegory.jsx'
import ShopContext from './Context/ShopList.jsx'
import Login from './components/pages/Login.jsx'
import Shop from './components/pages/Shop.jsx'
import { ToastContainer } from 'react-toastify'
import Profil from './components/pages/Profil.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer />
    <ShopContext>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} /> {/* Asosiy sahifa - Login */}
          <Route path='/product' element={<App />}>
            <Route index element={<Products />} />
            <Route path=':id' element={<ProductDetail />} />
            <Route path='category' element={<Cotegory />} />
            <Route path='shop-list' element={<Shop />} />
            <Route path="profil" element={<Profil />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </ShopContext>
  </StrictMode>,
)