import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  const handleSearch = (e) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (query.trim()) params.set('q', query)
    navigate(`/products?${params.toString()}`)
  }

  // Nếu đang ở trang sản phẩm, cho phép lọc realtime
  const handleInput = (e) => {
    setQuery(e.target.value)
    if (location.pathname === '/products') {
      const params = new URLSearchParams(window.location.search)
      params.set('q', e.target.value)
      navigate(`/products?${params.toString()}`, { replace: true })
    }
  }

  return (
    <form onSubmit={handleSearch}>
      <input
        className="w-full border rounded px-4 py-2"
        placeholder="Tìm sản phẩm, ví dụ: áo thun, quần jean..."
        value={query}
        onChange={handleInput}
      />
    </form>
  )
}
