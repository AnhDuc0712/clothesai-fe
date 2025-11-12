import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("admin_logged_in");
    if (isLoggedIn) navigate("/admin");
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "123456") {
      localStorage.setItem("admin_logged_in", "true");
      alert("✅ Đăng nhập Admin thành công!");
      navigate("/admin");
    } else {
      alert("❌ Sai tài khoản hoặc mật khẩu!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-700">
          Đăng nhập Admin
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Tài khoản"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            🔐 Đăng nhập
          </button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">
          Tài khoản: <strong>admin</strong> / Mật khẩu: <strong>123456</strong>
        </p>
      </div>
    </div>
  );
}
