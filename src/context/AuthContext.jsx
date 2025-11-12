import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // ✅ Khi load lại trang, đọc trạng thái login từ localStorage
  useEffect(() => {
    const stored = localStorage.getItem("user_logged_in");
    if (stored) setUser({ name: "User" });
  }, []);

  // ✅ Hàm login (fake tạm)
  const login = () => {
    localStorage.setItem("user_logged_in", true);
    setUser({ name: "User" });
  };

  // ✅ Hàm logout
  const logout = () => {
    localStorage.removeItem("user_logged_in");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Hook tiện dụng
export const useAuth = () => useContext(AuthContext);
