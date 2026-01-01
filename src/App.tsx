import { Routes, Route } from "react-router-dom"

import Home from "@/pages/Home"
import Services from "@/pages/Services"
import Contact from "@/pages/Contact"
import MainLayout from "./Layouts/MainLayout"
import AdminLogin from "./pages/admin/AdminLogin"
import { RequireAdmin } from "./auth/RequireAdmin"
import Dashboard from "./pages/admin/Dashboard"

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/login" element={<AdminLogin />}/>

        <Route
          path="/admin"
          element={
            <RequireAdmin>
              <Dashboard />
            </RequireAdmin>
          }
        />
      </Route>
    </Routes>
  )
}
