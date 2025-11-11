import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import FilterSidebar from '../components/FilterSidebar'
import { products as allProducts } from '../utils/mockData'

export default function Products() {
  const location = useLocation()
  const [filtered, setFiltered] = useState(allProducts)

  const [filters, setFilters] = useState({
    brand: '',
    minPrice: '',
    maxPrice: ''
  })

  // Lấy từ khóa tìm kiếm từ URL (?q=)
  const query = new URLSearchParams(location.search).get('q')?.toLowerCase() || ''

  useEffect(() => {
    let data = [...allProducts]

    // Lọc theo từ khóa
    if (query) {
      data = data.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.brand.toLowerCase().includes(query)
      )
    }

    // Lọc theo brand
    if (filters.brand) {
      data = data.filter((p) => p.brand === filters.brand)
    }

    // Lọc theo khoảng giá
    if (filters.minPrice) {
      data = data.filter(
        (p) => Number(p.price.replace(/,/g, '')) >= Number(filters.minPrice)
      )
    }
    if (filters.maxPrice) {
      data = data.filter(
        (p) => Number(p.price.replace(/,/g, '')) <= Number(filters.maxPrice)
      )
    }

    setFiltered(data)
  }, [query, filters])

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Sidebar filter */}
      <FilterSidebar onFilterChange={setFilters} />

      {/* Product grid */}
      <div className="flex-1">
        <h1 className="text-2xl font-semibold mb-6">Sản phẩm</h1>
        {filtered.length === 0 ? (
          <div className="bg-white p-6 rounded shadow-sm">Không tìm thấy sản phẩm phù hợp.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
