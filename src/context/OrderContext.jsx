import React, { createContext, useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import toast from 'react-hot-toast'

const OrderContext = createContext()

export function OrderProvider({ children }) {
  const [orders, setOrders] = useLocalStorage('orders', [])

  const placeOrder = (order) => {
    const newOrder = { ...order, id: Date.now() }
    setOrders((prev) => [...prev, newOrder])
    toast.success('Đặt hàng thành công 🎉')
  }

  return (
    <OrderContext.Provider value={{ orders, placeOrder }}>
      {children}
    </OrderContext.Provider>
  )
}

export const useOrder = () => useContext(OrderContext)
