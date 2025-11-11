import React, { useState } from 'react'


export default function ImageUpload({ onUpload }) {
const [fileName, setFileName] = useState('')


function handleChange(e) {
const file = e.target.files?.[0]
if (file) {
setFileName(file.name)
if (onUpload) onUpload(file)
}
}


return (
<div className="p-4 bg-white rounded-md shadow-sm">
<label className="block text-sm mb-2">Upload ảnh</label>
<input type="file" accept="image/*" onChange={handleChange} />
{fileName && <div className="mt-2 text-xs text-gray-500">{fileName}</div>}
</div>
)
}