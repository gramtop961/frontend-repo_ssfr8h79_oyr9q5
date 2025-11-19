import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import PageTransitions from './pages/_PageTransitions'
import Landing from './pages/Landing'
import Product from './pages/Product'
import AppPage from './pages/AppPage'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Contact from './pages/Contact'

export default function Router() {
  const location = useLocation()
  return (
    <PageTransitions locationKey={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<Landing />} />
        <Route path="/product" element={<Product />} />
        <Route path="/app" element={<AppPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </PageTransitions>
  )
}
