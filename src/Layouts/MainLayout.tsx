import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function MainLayout() {
    return (
        <div className='min-h-screen bg-slate-950 text-white'>
        <Navbar />
        <main className='p-6'>
            <Outlet />
        </main>
        </div>
    )
}