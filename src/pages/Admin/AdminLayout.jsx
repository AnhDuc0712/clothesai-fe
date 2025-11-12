import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function AdminLayout() {
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold text-blue-600">ClothesAI Admin</h1>
        </div>
        <nav className="p-4 space-y-2">
          <Link
            to="/admin"
            className={`block p-2 rounded ${
              pathname === "/admin"
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            📊 Dashboard
          </Link>
          <Link
            to="/admin/products"
            className={`block p-2 rounded ${
              pathname.includes("products")
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            🧺 Quản lý sản phẩm
          </Link>
          <Link
            to="/admin/orders"
            className={`block p-2 rounded ${
              pathname.includes("orders")
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            📦 Đơn hàng
          </Link>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
