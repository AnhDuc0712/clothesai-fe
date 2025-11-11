import React, { createContext, useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import toast from 'react-hot-toast'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useLocalStorage('cartItems', [])

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(p => p.id === product.id)
      if (existing) {
        toast.success(`Đã tăng số lượng ${product.title}`)
        return prev.map(p => p.id === product.id ? { ...p, qty: p.qty + 1 } : p)
      }
      toast.success(`Đã thêm ${product.title} vào giỏ`)
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const removeFromCart = (id) => {
    setCart(prev => {
      const removed = prev.find(p => p.id === id)
      if (removed) toast(`❌ Đã xóa ${removed.title}`)
      return prev.filter(p => p.id !== id)
    })
  }

  const clearCart = () => {
    toast('🧹 Đã xóa toàn bộ giỏ hàng')
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
