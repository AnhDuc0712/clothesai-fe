import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalRevenue: 0,
    recentOrders: [],
  });

  useEffect(() => {
    // Lấy dữ liệu từ localStorage
    const products = JSON.parse(localStorage.getItem("products") || "[]");
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");

    const totalRevenue = orders.reduce((sum, o) => sum + (o.total || 0), 0);
    const recentOrders = orders.slice(-5).reverse(); // 5 đơn gần nhất

    setStats({
      totalProducts: products.length,
      totalOrders: orders.length,
      totalRevenue,
      recentOrders,
    });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">📊 Dashboard tổng quan</h1>

      {/* --- Thống kê tổng --- */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow rounded p-6 text-center">
          <h2 className="text-gray-600 mb-2">Tổng sản phẩm</h2>
          <p className="text-3xl font-bold text-blue-600">
            {stats.totalProducts}
          </p>
        </div>
        <div className="bg-white shadow rounded p-6 text-center">
          <h2 className="text-gray-600 mb-2">Tổng đơn hàng</h2>
          <p className="text-3xl font-bold text-green-600">
            {stats.totalOrders}
          </p>
        </div>
        <div className="bg-white shadow rounded p-6 text-center">
          <h2 className="text-gray-600 mb-2">Tổng doanh thu</h2>
          <p className="text-3xl font-bold text-orange-600">
            {stats.totalRevenue.toLocaleString()} VND
          </p>
        </div>
      </div>

      {/* --- Danh sách đơn gần đây --- */}
      <div className="bg-white rounded shadow p-6">
        <h2 className="text-lg font-semibold mb-4">🕒 Đơn hàng gần đây</h2>
        {stats.recentOrders.length === 0 ? (
          <p>Chưa có đơn hàng nào.</p>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="p-2">Khách hàng</th>
                <th className="p-2">Sản phẩm</th>
                <th className="p-2">Tổng tiền</th>
                <th className="p-2">Ngày đặt</th>
              </tr>
            </thead>
            <tbody>
              {stats.recentOrders.map((o) => (
                <tr key={o.id} className="border-b hover:bg-gray-50">
                  <td className="p-2">{o.customer.name}</td>
                  <td className="p-2">{o.items.length}</td>
                  <td className="p-2 text-blue-600 font-semibold">
                    {o.total.toLocaleString()} VND
                  </td>
                  <td className="p-2">{o.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
