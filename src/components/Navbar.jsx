import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();

  // 🔢 Tính tổng số lượng sản phẩm trong giỏ (phòng trường hợp cart chưa load)
  const totalQty = Array.isArray(cart)
    ? cart.reduce((sum, item) => sum + (item.qty || 0), 0)
    : 0;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4 px-6">
        {/* --- Logo --- */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/src/assets/logo.svg" alt="logo" className="w-8 h-8" />
          <span className="font-semibold text-lg text-gray-800">ClothesAI</span>
        </Link>

        {/* --- Search bar --- */}
        <div className="flex-1 mx-6 max-w-lg">
          <SearchBar />
        </div>

        {/* --- Navigation --- */}
        <nav className="flex items-center gap-5 text-sm">
          <Link
            to="/imagesearch"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Tìm bằng ảnh
          </Link>

          {/* 🛒 Giỏ hàng + badge */}
          <div className="relative">
            <Link
              to="/cart"
              className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition"
            >
              <span role="img" aria-label="cart" className="text-lg">
                🛒
              </span>
              <span>Giỏ hàng</span>
            </Link>

            {totalQty > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                {totalQty}
              </span>
            )}
          </div>

          {/* 👤 Auth section */}
          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-gray-600 font-medium">
                👋 Xin chào, {user.name}
              </span>
              <button
                onClick={handleLogout}
                className="text-blue-600 hover:underline font-medium"
              >
                Đăng xuất
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="text-blue-600 hover:underline font-medium"
            >
              Đăng nhập
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
