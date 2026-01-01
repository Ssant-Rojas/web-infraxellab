import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../auth/AuthContext"

export default function AdminLogin() {
  const [key, setKey] = useState("")
  const [error, setError] = useState("")
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const ok = await login(key)

    if (!ok) {
      setError("Invalid admin key")
      return
    }

    navigate("/admin")
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Admin Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Admin key"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
        <button type="submit">Enter</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  )
}
