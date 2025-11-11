import React, { createContext, useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'


const AuthContext = createContext()


export function AuthProvider({ children }) {
const [user, setUser] = useLocalStorage('user', null)


const login = (email, password) => {
// fake logic: always login success
const name = email.split('@')[0]
setUser({ name, email })
}


const register = (name, email, password) => {
setUser({ name, email })
}


const logout = () => setUser(null)


return (
<AuthContext.Provider value={{ user, login, register, logout }}>
{children}
</AuthContext.Provider>
)
}


export const useAuth = () => useContext(AuthContext)