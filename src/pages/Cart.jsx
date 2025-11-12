import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, p) => sum + Number(p.price.replace(/,/g, "")) * p.qty,
    0
  );

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Giỏ hàng</h1>
      {cart.length === 0 ? (
        <div className="bg-white p-6 rounded shadow-sm">
          Giỏ hàng đang rỗng.
        </div>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded shadow-sm flex justify-between items-center"
            >
              <div>
                <div className="font-medium">{item.title}</div>
                <div className="text-sm text-gray-600">
                  Số lượng: {item.qty}
                </div>
              </div>
              <div>
                <button
                  className="text-red-500 text-sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Xóa
                </button>
              </div>
            </div>
          ))}

          {/* Tổng tiền */}
          <div className="bg-white p-4 rounded shadow-sm text-right font-semibold">
            Tổng: {total.toLocaleString()} VND
          </div>

          {/* Nhóm nút hành động */}
          <div className="flex justify-end gap-3">
            <button
              onClick={clearCart}
              className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              🗑️ Xóa tất cả
            </button>
            <button
              onClick={() => navigate("/checkout")}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              💳 Thanh toán
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
