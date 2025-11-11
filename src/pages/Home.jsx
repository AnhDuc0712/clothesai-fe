import React from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../utils/mockData'


export default function Home() {
return (
<div>
<section className="mb-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{products.slice(0,6).map(p => (
<ProductCard key={p.id} product={p} />
))}
</div>
</section>


<section>
<h2 className="text-xl font-semibold mb-4">Danh mục nổi bật</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="bg-white p-6 rounded shadow-sm">Áo thun</div>
<div className="bg-white p-6 rounded shadow-sm">Quần</div>
<div className="bg-white p-6 rounded shadow-sm">Giày</div>
<div className="bg-white p-6 rounded shadow-sm">Phụ kiện</div>
</div>
</section>
</div>
)
}