import axios from "axios"

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

api.interceptors.request.use((config) => {
  const key = sessionStorage.getItem("adminKey")

  if (key) {
    config.headers["x-admin-key"] = key
  }

  return config
})

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      sessionStorage.removeItem("adminKey")
      window.location.href = "/admin/login"
    }
    return Promise.reject(err)
  }
)
