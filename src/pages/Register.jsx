import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'


export default function Register() {
const { register } = useAuth()
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const navigate = useNavigate()


const handleRegister = (e) => {
e.preventDefault()
register(name, email, password)
navigate('/')
}


return (
<div className="max-w-md mx-auto bg-white p-6 rounded shadow-sm">
<h1 className="text-xl font-semibold mb-4">Đăng ký</h1>
<form onSubmit={handleRegister}>
<input value={name} onChange={e => setName(e.target.value)} className="w-full border px-3 py-2 mb-3" placeholder="Họ tên" />
<input value={email} onChange={e => setEmail(e.target.value)} className="w-full border px-3 py-2 mb-3" placeholder="Email" />
<input value={password} onChange={e => setPassword(e.target.value)} className="w-full border px-3 py-2 mb-3" placeholder="Mật khẩu" type="password" />
<button type="submit" className="w-full bg-green-600 text-white py-2 rounded">Đăng ký</button>
</form>
</div>
)
}