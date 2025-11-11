import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'


export default function Login() {
const { login } = useAuth()
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const navigate = useNavigate()


const handleLogin = (e) => {
e.preventDefault()
login(email, password)
navigate('/')
}


return (
<div className="max-w-md mx-auto bg-white p-6 rounded shadow-sm">
<h1 className="text-xl font-semibold mb-4">Đăng nhập</h1>
<form onSubmit={handleLogin}>
<input value={email} onChange={e => setEmail(e.target.value)} className="w-full border px-3 py-2 mb-3" placeholder="Email" />
<input value={password} onChange={e => setPassword(e.target.value)} className="w-full border px-3 py-2 mb-3" placeholder="Mật khẩu" type="password" />
<button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Đăng nhập</button>
</form>
</div>
)
}