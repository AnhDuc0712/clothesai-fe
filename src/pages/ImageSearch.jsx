import React, { useState } from 'react'
import ImageUpload from '../components/ImageUpload'


export default function ImageSearch() {
const [result, setResult] = useState(null)


function handleUpload(file) {
// demo: show file name. Replace with real API call to image search service
setResult({ text: 'Kết quả giả lập cho ' + file.name })
}


return (
<div>
<h1 className="text-2xl font-semibold mb-6">Tìm bằng ảnh</h1>
<ImageUpload onUpload={handleUpload} />
{result && (
<div className="mt-6 bg-white p-4 rounded shadow-sm">{result.text}</div>
)}
</div>
)
}