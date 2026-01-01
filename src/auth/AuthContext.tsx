import { createContext, useContext, useState, useEffect } from "react"

type AuthContextType = {
  isAuthenticated: boolean
  login: (key: string) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const key = sessionStorage.getItem("adminKey")
    if (key) setIsAuthenticated(true)
  }, [])

  const login = async (key: string) => {
  try {
    const res = await fetch(
      import.meta.env.VITE_API_URL + "/api/admin/messages",
      {
        headers: {
          "x-admin-key": key,
        },
      }
    )

    if (!res.ok) {
      throw new Error("Invalid admin key")
    }

    setIsAuthenticated(true)
    return true
  } catch {
    sessionStorage.removeItem("adminKey")
    setIsAuthenticated(false)
    return false
  }
  }


  const logout = () => {
    sessionStorage.removeItem("adminKey")
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider")
  return ctx
}
