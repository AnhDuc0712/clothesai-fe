import { useCart } from '../context/CartContext'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div className="bg-white rounded-md shadow-sm p-4 flex flex-col">
      <div className="h-48 grid place-items-center mb-4 bg-gray-50 rounded">
        <img src={product.image} alt={product.title} className="max-h-full" />
      </div>
      <div className="text-sm font-medium">{product.title}</div>
      <div className="text-xs text-gray-500 mt-1">{product.brand}</div>
      <div className="text-lg font-semibold mt-2">{product.price} VND</div>
      <button
        onClick={() => addToCart(product)}
        className="mt-3 bg-blue-600 text-white py-1 rounded hover:bg-blue-700 transition"
      >
        + Thêm vào giỏ
      </button>
    </div>
  )
}
