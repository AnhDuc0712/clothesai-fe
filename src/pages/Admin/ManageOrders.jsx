import React, { useEffect, useState } from "react";

export default function ManageOrders() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // 🔹 Load dữ liệu từ LocalStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(stored);
  }, []);

  // 🔹 Format tiền tệ
  const formatCurrency = (value) =>
    value?.toLocaleString("vi-VN", { style: "currency", currency: "VND" });

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">📦 Quản lý đơn hàng</h1>

      {/* Nếu không có đơn hàng */}
      {orders.length === 0 ? (
        <div className="bg-white p-6 rounded shadow-sm">
          Hiện chưa có đơn hàng nào.
        </div>
      ) : (
        <div className="bg-white rounded shadow p-4 overflow-x-auto">
          <table className="min-w-full text-left border-collapse">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="p-2">Khách hàng</th>
                <th className="p-2">Số sản phẩm</th>
                <th className="p-2">Tổng tiền</th>
                <th className="p-2">Ngày đặt</th>
                <th className="p-2 text-center">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id} className="border-b hover:bg-gray-50">
                  <td className="p-2">{o.customer?.name || "Không rõ"}</td>
                  <td className="p-2">{o.items?.length || 0}</td>
                  <td className="p-2">{formatCurrency(o.total || 0)}</td>
                  <td className="p-2">{o.createdAt}</td>
                  <td className="p-2 text-center">
                    <button
                      onClick={() => setSelectedOrder(o)}
                      className="text-blue-600 hover:underline"
                    >
                      Xem chi tiết
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* 🔹 Modal xem chi tiết đơn hàng */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-[500px] relative">
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-black"
              onClick={() => setSelectedOrder(null)}
            >
              ✖
            </button>
            <h2 className="text-xl font-semibold mb-4">Chi tiết đơn hàng</h2>
            <p>
              <strong>Khách hàng:</strong> {selectedOrder.customer?.name}
            </p>
            <p>
              <strong>Ngày đặt:</strong> {selectedOrder.createdAt}
            </p>
            <p className="mt-2 font-semibold">Danh sách sản phẩm:</p>
            <ul className="list-disc list-inside text-sm text-gray-700 mb-3">
              {selectedOrder.items.map((item) => (
                <li key={item.id}>
                  {item.title} × {item.qty} —{" "}
                  {formatCurrency(
                    Number(item.price.replace(/,/g, "")) * item.qty
                  )}
                </li>
              ))}
            </ul>
            <p className="font-bold text-right text-blue-600">
              Tổng tiền: {formatCurrency(selectedOrder.total)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
