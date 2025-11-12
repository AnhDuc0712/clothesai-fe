import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    address: "",
  });

  const total = cart.reduce(
    (sum, p) => sum + Number(p.price.replace(/,/g, "")) * p.qty,
    0
  );

  const handleCheckout = (e) => {
    e.preventDefault();
    if (!customer.name || !customer.email || !customer.address) {
      alert("⚠️ Vui lòng nhập đầy đủ thông tin khách hàng.");
      return;
    }

    if (cart.length === 0) {
      alert("Giỏ hàng trống, không thể thanh toán!");
      return;
    }

    const newOrder = {
      id: Date.now(),
      customer,
      items: cart,
      total,
      createdAt: new Date().toLocaleString("vi-VN"),
    };

    // 🔹 Lưu vào localStorage.orders
    const storedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    storedOrders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(storedOrders));

    // 🔹 Xóa giỏ hàng
    clearCart();

    // 🔹 Thông báo & chuyển trang
    alert("✅ Thanh toán thành công! Đơn hàng của bạn đã được lưu.");
    navigate("/success");
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">💳 Thanh toán</h1>

      {/* Nếu giỏ hàng trống */}
      {cart.length === 0 ? (
        <div className="bg-white p-6 rounded shadow text-center">
          Giỏ hàng của bạn đang trống.
        </div>
      ) : (
        <form
          onSubmit={handleCheckout}
          className="bg-white p-6 rounded shadow space-y-4"
        >
          <h2 className="text-lg font-semibold">Thông tin khách hàng</h2>
          <input
            type="text"
            placeholder="Họ và tên"
            value={customer.name}
            onChange={(e) =>
              setCustomer({ ...customer, name: e.target.value })
            }
            className="border w-full px-3 py-2 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            value={customer.email}
            onChange={(e) =>
              setCustomer({ ...customer, email: e.target.value })
            }
            className="border w-full px-3 py-2 rounded"
          />
          <textarea
            placeholder="Địa chỉ giao hàng"
            value={customer.address}
            onChange={(e) =>
              setCustomer({ ...customer, address: e.target.value })
            }
            className="border w-full px-3 py-2 rounded"
          />

          <h2 className="text-lg font-semibold mt-4">Tóm tắt đơn hàng</h2>
          <ul className="divide-y divide-gray-200">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between py-2 text-sm text-gray-700"
              >
                <span>
                  {item.title} × {item.qty}
                </span>
                <span>
                  {(Number(item.price.replace(/,/g, "")) * item.qty).toLocaleString()}{" "}
                  VND
                </span>
              </li>
            ))}
          </ul>

          <div className="text-right font-semibold text-lg mt-4">
            Tổng cộng: {total.toLocaleString()} VND
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            ✅ Xác nhận thanh toán
          </button>
        </form>
      )}
    </div>
  );
}
