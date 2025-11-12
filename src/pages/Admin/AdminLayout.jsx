import React, { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function AdminLayout() {
  const navigate = useNavigate();

  // 🧩 Kiểm tra đăng nhập admin
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("admin_logged_in");
    if (!isLoggedIn) {
      navigate("/admin/login", { replace: true }); // ✅ chuyển đúng route
    }
  }, [navigate]);

  // 🧩 Xử lý đăng xuất
  const handleLogout = () => {
    if (window.confirm("Bạn có chắc muốn đăng xuất?")) {
      localStorage.removeItem("admin_logged_in");
      navigate("/admin/login", { replace: true }); // ✅ về đúng trang login admin
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* --- Sidebar cố định --- */}
      <aside className="w-64 bg-white border-r shadow-sm fixed h-full flex flex-col justify-between">
        {/* Header */}
        <div>
          <div className="p-6 border-b">
            <h1 className="text-xl font-bold text-blue-700">ClothesAI Admin</h1>
          </div>

          {/* Menu */}
          <nav className="p-4 space-y-2">
            <NavLink
              to="/admin"
              end
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                  isActive
                    ? "bg-blue-100 text-blue-600 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <span>📊</span> Dashboard
            </NavLink>

            <NavLink
              to="/admin/products"
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                  isActive
                    ? "bg-blue-100 text-blue-600 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <span>🧺</span> Quản lý sản phẩm
            </NavLink>

            <NavLink
              to="/admin/orders"
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                  isActive
                    ? "bg-blue-100 text-blue-600 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <span>📦</span> Đơn hàng
            </NavLink>
          </nav>
        </div>

        {/* --- Footer sidebar (Admin info + logout) --- */}
        <div className="border-t p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="https://i.pravatar.cc/40?img=11"
              alt="Admin Avatar"
              className="w-10 h-10 rounded-full border"
            />
            <div>
              <p className="font-semibold text-gray-700 text-sm">Admin</p>
              <p className="text-xs text-gray-500">Quản trị viên</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="text-red-500 hover:text-red-600 text-lg"
            title="Đăng xuất"
          >
            🚪
          </button>
        </div>
      </aside>

      {/* --- Nội dung chính --- */}
      <main className="flex-1 ml-64 p-8">
        <Outlet />
      </main>
    </div>
  );
}
