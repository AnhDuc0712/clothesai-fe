import React from "react";
import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-3xl font-bold text-green-600 mb-4">
        ✅ Thanh toán thành công!
      </h1>
      <p className="text-gray-700 mb-6">
        Cảm ơn bạn đã đặt hàng tại ClothesAI. Đơn hàng của bạn đã được ghi nhận.
      </p>
      <div className="space-x-3">
        <Link
          to="/products"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Tiếp tục mua sắm
        </Link>
        <Link
          to="/"
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
        >
          Về trang chủ
        </Link>
      </div>
    </div>
  );
}
