import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useOrder } from '../context/OrderContext'
import { useNavigate } from 'react-router-dom'

export default function Checkout() {
  const { cart, clearCart } = useCart()
  const { placeOrder } = useOrder()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', address: '', phone: '' })

  const total = cart.reduce((sum, p) => sum + Number(p.price.replace(/,/g, '')) * p.qty, 0)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (cart.length === 0) return alert('Giỏ hàng trống!')
    if (!form.name || !form.address || !form.phone) return alert('Vui lòng nhập đầy đủ thông tin!')

    const orderData = {
      customer: form,
      items: cart,
      total,
      createdAt: new Date().toLocaleString(),
    }

    placeOrder(orderData)
    clearCart()
    navigate('/')
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Thanh toán</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Form thông tin */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Thông tin người nhận</h2>
          <input
            placeholder="Họ và tên"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border px-3 py-2 mb-3 rounded"
          />
          <input
            placeholder="Địa chỉ"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            className="w-full border px-3 py-2 mb-3 rounded"
          />
          <input
            placeholder="Số điện thoại"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full border px-3 py-2 mb-3 rounded"
          />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Xác nhận đặt hàng
          </button>
        </form>

        {/* Tổng kết giỏ hàng */}
        <div className="bg-white p-6 rounded shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Đơn hàng của bạn</h2>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between mb-2 text-sm">
              <span>
                {item.title} × {item.qty}
              </span>
              <span>{Number(item.price.replace(/,/g, '')) * item.qty} VND</span>
            </div>
          ))}
          <div className="mt-4 text-right font-semibold">Tổng: {total.toLocaleString()} VND</div>
        </div>
      </div>
    </div>
  )
}
