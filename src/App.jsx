import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import ImageSearch from './pages/ImageSearch'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'   
import Login from './pages/Login'
import Register from './pages/Register'
import Admin from './pages/Admin'
import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'
import { OrderProvider } from './context/OrderContext'

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <OrderProvider>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/imagesearch" element={<ImageSearch />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </MainLayout>
        </OrderProvider>
      </CartProvider>
    </AuthProvider>
  )
}