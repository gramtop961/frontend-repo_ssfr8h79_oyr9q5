import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/product', label: 'Product' },
  { to: '/app', label: 'App' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = React.useState(false)
  const location = useLocation()
  React.useEffect(() => setOpen(false), [location.pathname])

  return (
    <header className="sticky top-0 z-40">
      <div className="absolute inset-0 bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl border-b border-emerald-900/5" />
      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg shadow-emerald-500/30 grid place-items-center text-white font-extrabold">B</div>
          <span className="font-black tracking-wider text-slate-900 dark:text-white group-hover:text-emerald-700 transition-colors">BALVORIS</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-emerald-700' : 'text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white'}`}>
              {n.label}
            </NavLink>
          ))}
          <Link to="/app" className="inline-flex items-center justify-center rounded-full bg-emerald-600 text-white px-4 py-2 text-sm font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-0.5 transition-transform">Launch App</Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/70 dark:bg-slate-800/70 shadow-sm">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="md:hidden bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 grid gap-3">
              {nav.map((n) => (
                <Link key={n.to} to={n.to} className="text-slate-800 dark:text-slate-200 font-medium">
                  {n.label}
                </Link>
              ))}
              <Link to="/app" className="inline-flex items-center justify-center rounded-full bg-emerald-600 text-white px-4 py-2 text-sm font-semibold shadow">
                Launch App
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
