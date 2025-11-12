import React from "react";

export default function Dashboard() {
  const products = JSON.parse(localStorage.getItem("products") || "[]");
  const orders = JSON.parse(localStorage.getItem("orders") || "[]");

  const totalRevenue = orders.reduce((sum, o) => sum + (o.total || 0), 0);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Tổng quan</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded p-6 text-center">
          <h2 className="text-lg font-semibold">Sản phẩm</h2>
          <p className="text-3xl font-bold">{products.length}</p>
        </div>
        <div className="bg-white shadow rounded p-6 text-center">
          <h2 className="text-lg font-semibold">Đơn hàng</h2>
          <p className="text-3xl font-bold">{orders.length}</p>
        </div>
        <div className="bg-white shadow rounded p-6 text-center">
          <h2 className="text-lg font-semibold">Doanh thu (VND)</h2>
          <p className="text-3xl font-bold">{totalRevenue.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}
