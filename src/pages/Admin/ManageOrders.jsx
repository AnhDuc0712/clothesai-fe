import React, { useEffect, useState } from "react";

export default function ManageOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(stored);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Quản lý đơn hàng</h1>
      <div className="bg-white shadow rounded p-4">
        {orders.length === 0 ? (
          <p>Chưa có đơn hàng nào.</p>
        ) : (
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2">Khách hàng</th>
                <th className="py-2">Số sản phẩm</th>
                <th className="py-2">Tổng tiền</th>
                <th className="py-2">Ngày đặt</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id} className="border-b">
                  <td>{o.customer.name}</td>
                  <td>{o.items.length}</td>
                  <td>{o.total.toLocaleString()} VND</td>
                  <td>{o.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
