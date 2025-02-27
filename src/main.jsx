import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './components/pages/Products.jsx'
import ProductDetail from './components/pages/ProductDetail.jsx'
import { BiCategory } from 'react-icons/bi'
import Cotegory from './components/pages/Cotegory.jsx'
import ShopCantext from './Context/ShopList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopCantext>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='/' element={<Products />} />
            <Route path='/product-detail/:id' element={<ProductDetail />} />
            <Route path='/category' element={<Cotegory />} />
            <Route />
          </Route>
        </Routes>
      </BrowserRouter>
    </ShopCantext>

  </StrictMode>,
)
