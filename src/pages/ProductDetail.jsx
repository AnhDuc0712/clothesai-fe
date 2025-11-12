import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("products") || "[]");
    const found = stored.find((p) => String(p.id) === String(id));
    setProduct(found);
  }, [id]);

  if (!product) return <p>Không tìm thấy sản phẩm.</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-72 h-72 object-cover rounded"
        />
        <div className="flex-1">
          <h1 className="text-2xl font-semibold mb-2">{product.title}</h1>
          <p className="text-gray-600 mb-4">Thương hiệu: {product.brand}</p>
          <p className="text-xl font-bold text-blue-600 mb-6">
            {product.price} VND
          </p>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            🛒 Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
}
