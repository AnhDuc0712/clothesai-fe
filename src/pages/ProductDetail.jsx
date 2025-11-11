import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../utils/mockData'
import { useCart } from '../context/CartContext'

export default function ProductDetail() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const product = products.find(p => String(p.id) === String(id))

  if (!product) return <div>Không tìm thấy sản phẩm</div>

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 bg-white p-6 rounded shadow-sm">
        <img src={product.image} alt={product.title} className="w-full" />
      </div>
      <div className="bg-white p-6 rounded shadow-sm">
        <h1 className="text-2xl font-semibold">{product.title}</h1>
        <div className="text-gray-600 mt-2">{product.brand}</div>
        <div className="text-xl font-bold mt-4">{product.price} VND</div>
        <button
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          onClick={() => addToCart(product)}
        >
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  )
}
