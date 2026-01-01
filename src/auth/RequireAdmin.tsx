import type { JSX } from "react"
import { Navigate } from "react-router-dom"

export function RequireAdmin({ children }: { children: JSX.Element }) {
  const key = sessionStorage.getItem("adminKey")

  if (!key) {
    return <Navigate to="/admin/login" replace />
  }

  return children
}
