import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  const location = useLocation();

  // 🔸 Kiểm tra xem đang ở trang admin không
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hiển thị Navbar/Footer chỉ khi KHÔNG phải admin */}
      {!isAdminPage && <Navbar />}

      <main className="flex-1 container py-8">{children}</main>

      {!isAdminPage && <Footer />}
    </div>
  );
}
