import React, { useState, useEffect } from "react";

export default function ManageProducts() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    title: "",
    brand: "",
    price: "",
    image: "",
  });

  // 🔹 Load dữ liệu khi component mount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("products") || "[]");
    setProducts(stored);
  }, []);

  // 🔹 Lưu lại localStorage mỗi khi products thay đổi
  const saveToStorage = (data) => {
    localStorage.setItem("products", JSON.stringify(data));
    setProducts(data);
  };

  // 🔹 Thêm sản phẩm mới
  const addProduct = (e) => {
    e.preventDefault();
    if (!form.title || !form.price || !form.image) {
      alert("⚠️ Vui lòng nhập đầy đủ thông tin (bao gồm cả ảnh).");
      return;
    }

    const newProduct = {
      id: Date.now(),
      ...form,
      price: Number(form.price).toLocaleString(),
    };

    const updated = [...products, newProduct];
    saveToStorage(updated);
    setForm({ title: "", brand: "", price: "", image: "" });
  };

  // 🔹 Xóa sản phẩm
  const deleteProduct = (id) => {
    if (window.confirm("Bạn có chắc muốn xóa sản phẩm này?")) {
      const filtered = products.filter((p) => p.id !== id);
      saveToStorage(filtered);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">🧺 Quản lý sản phẩm</h1>

      {/* Form thêm sản phẩm */}
      <form
        onSubmit={addProduct}
        className="bg-white p-4 rounded shadow mb-6 grid md:grid-cols-4 gap-4"
      >
        <input
          placeholder="Tên sản phẩm"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="border px-3 py-2 rounded"
        />
        <input
          placeholder="Thương hiệu"
          value={form.brand}
          onChange={(e) => setForm({ ...form, brand: e.target.value })}
          className="border px-3 py-2 rounded"
        />
        <input
          type="number"
          placeholder="Giá (VND)"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="border px-3 py-2 rounded"
        />
        <input
          placeholder="Link ảnh sản phẩm"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
          className="border px-3 py-2 rounded"
        />

        <button
          type="submit"
          className="col-span-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          ➕ Thêm sản phẩm
        </button>
      </form>

      {/* Danh sách sản phẩm */}
      <div className="bg-white rounded shadow p-4 overflow-x-auto">
        {products.length === 0 ? (
          <p>Chưa có sản phẩm nào.</p>
        ) : (
          <table className="min-w-full text-left border-collapse">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="p-2">Ảnh</th>
                <th className="p-2">Tên</th>
                <th className="p-2">Thương hiệu</th>
                <th className="p-2">Giá</th>
                <th className="p-2 text-center">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id} className="border-b hover:bg-gray-50">
                  <td className="p-2">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="p-2 font-medium">{p.title}</td>
                  <td className="p-2">{p.brand}</td>
                  <td className="p-2">{p.price} VND</td>
                  <td className="p-2 text-center">
                    <button
                      onClick={() => deleteProduct(p.id)}
                      className="text-red-500 hover:underline"
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
