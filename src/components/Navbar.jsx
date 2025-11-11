import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SearchBar from './SearchBar'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const { user, logout } = useAuth()
  const { cart } = useCart()
  const navigate = useNavigate()

  // 🔢 Tính tổng số lượng sản phẩm trong giỏ
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4 relative">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/src/assets/logo.svg" alt="logo" className="w-8 h-8" />
          <span className="font-semibold text-lg">ClothesAI</span>
        </Link>

        {/* Search bar */}
        <div className="flex-1 mx-6">
          <SearchBar />
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-4 text-sm relative">
          <Link to="/imagesearch">Image Search</Link>

          {/* 🛒 Cart icon + badge */}
          <div className="relative">
            <Link to="/cart" className="flex items-center gap-1">
              <span role="img" aria-label="cart" className="text-lg">🛒</span>
              <span>Cart</span>
            </Link>
            {totalQty > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                {totalQty}
              </span>
            )}
          </div>

          {/* Auth section */}
          {user ? (
            <>
              <span className="text-gray-600">Hi, {user.name}</span>
              <button
                onClick={() => {
                  logout()
                  navigate('/')
                }}
                className="text-blue-600 hover:underline"
              >
                Đăng xuất
              </button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </nav>
      </div>
    </header>
  )
}
