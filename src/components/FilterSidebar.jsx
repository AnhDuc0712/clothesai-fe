import React, { useState } from 'react'

export default function FilterSidebar({ onFilterChange }) {
  const [brand, setBrand] = useState('')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')

  const handleApply = () => {
    onFilterChange({ brand, minPrice, maxPrice })
  }

  return (
    <div className="bg-white rounded-md shadow-sm p-4 w-full md:w-60">
      <h2 className="text-lg font-semibold mb-4">Bộ lọc</h2>

      <div className="mb-3">
        <label className="text-sm font-medium">Thương hiệu</label>
        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="mt-1 w-full border rounded px-2 py-1 text-sm"
        >
          <option value="">Tất cả</option>
          <option value="Local">Local</option>
          <option value="JeansCo">JeansCo</option>
          <option value="Warm">Warm</option>
          <option value="Lovely">Lovely</option>
          <option value="Sporty">Sporty</option>
          <option value="CapCo">CapCo</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="text-sm font-medium">Giá tối thiểu</label>
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="mt-1 w-full border rounded px-2 py-1 text-sm"
          placeholder="VD: 100000"
        />
      </div>

      <div className="mb-3">
        <label className="text-sm font-medium">Giá tối đa</label>
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="mt-1 w-full border rounded px-2 py-1 text-sm"
          placeholder="VD: 500000"
        />
      </div>

      <button
        onClick={handleApply}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition text-sm"
      >
        Áp dụng
      </button>
    </div>
  )
}
