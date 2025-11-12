import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import ImageSearch from "./pages/ImageSearch";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import UserLogin from "./pages/UserLogin";
import AdminLogin from "./pages/Admin/AdminLogin";
import Register from "./pages/Register";
import Success from "./pages/Success";

// --- Admin pages ---
import AdminLayout from "./pages/Admin/AdminLayout";
import Dashboard from "./pages/Admin/Dashboard";
import ManageProducts from "./pages/Admin/ManageProducts";
import ManageOrders from "./pages/Admin/ManageOrders";

// --- Context providers ---
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { OrderProvider } from "./context/OrderContext";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <OrderProvider>
          <Routes>
            {/* --- Main user layout --- */}
            <Route
              path="/"
              element={
                <MainLayout>
                  <Home />
                </MainLayout>
              }
            />
            <Route
              path="/products"
              element={
                <MainLayout>
                  <Products />
                </MainLayout>
              }
            />
            <Route
              path="/products/:id"
              element={
                <MainLayout>
                  <ProductDetail />
                </MainLayout>
              }
            />
            <Route
              path="/imagesearch"
              element={
                <MainLayout>
                  <ImageSearch />
                </MainLayout>
              }
            />
            <Route
              path="/cart"
              element={
                <MainLayout>
                  <Cart />
                </MainLayout>
              }
            />
            <Route
              path="/checkout"
              element={
                <MainLayout>
                  <Checkout />
                </MainLayout>
              }
            />
            <Route
              path="/success"
              element={
                <MainLayout>
                  <Success />
                </MainLayout>
              }
            />
            <Route
              path="/login"
              element={
                <MainLayout>
                  <UserLogin />
                </MainLayout>
              }
            />
            <Route
              path="/register"
              element={
                <MainLayout>
                  <Register />
                </MainLayout>
              }
            />

            {/* ✅ Trang đăng nhập admin — phải đặt riêng ngoài layout admin */}
            <Route path="/admin/login" element={<AdminLogin />} />

            {/* --- Admin routes (sau khi đăng nhập) --- */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="products" element={<ManageProducts />} />
              <Route path="orders" element={<ManageOrders />} />
            </Route>
          </Routes>
        </OrderProvider>
      </CartProvider>
    </AuthProvider>
  );
}
