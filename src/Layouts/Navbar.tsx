import { NavLink } from 'react-router-dom'

const linkClass =
  'text-slate-300 hover:text-white transition'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
      <h1 className="text-lg font-bold">InfraxelLab</h1>
      <div className="flex gap-6">
        <NavLink to="/" className={({ isActive }) => isActive ? "text-white font-semibold" : linkClass }> Home </NavLink>
        <NavLink to="/services" className={({ isActive }) => isActive ? "text-white font-semibold" : linkClass }> Services </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "text-white font-semibold" : linkClass }> Contact </NavLink>
      </div>
    </nav>
  )
}
