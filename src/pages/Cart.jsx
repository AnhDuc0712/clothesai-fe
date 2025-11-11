import React from 'react'
import { useCart } from '../context/CartContext'


export default function Cart() {
const { cart, removeFromCart, clearCart } = useCart()


const total = cart.reduce((sum, p) => sum + Number(p.price.replace(/,/g, '')) * p.qty, 0)


return (
<div>
<h1 className="text-2xl font-semibold mb-6">Giỏ hàng</h1>
{cart.length === 0 ? (
<div className="bg-white p-6 rounded shadow-sm">Giỏ hàng đang rỗng.</div>
) : (
<div className="space-y-4">
{cart.map(item => (
<div key={item.id} className="bg-white p-4 rounded shadow-sm flex justify-between items-center">
<div>
<div className="font-medium">{item.title}</div>
<div className="text-sm text-gray-600">Số lượng: {item.qty}</div>
</div>
<div>
<button className="text-red-500 text-sm" onClick={() => removeFromCart(item.id)}>Xóa</button>
</div>
</div>
))}
<div className="bg-white p-4 rounded shadow-sm text-right font-semibold">Tổng: {total.toLocaleString()} VND</div>
<button onClick={clearCart} className="bg-gray-700 text-white px-4 py-2 rounded">Xóa tất cả</button>
</div>
)}
</div>
)
}