import React from 'react'
import Navbar from '../Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import PricingPreview from '../components/PricingPreview'

function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row gap-4 items-center justify-between text-sm text-slate-500">
        <div className="font-semibold text-slate-700">BALVORIS</div>
        <div className="flex items-center gap-4">
          <a href="mailto:balvoris@gmail.com" className="hover:text-emerald-700">balvoris@gmail.com</a>
          <a href="tel:+917835958768" className="hover:text-emerald-700">+91 7835958768</a>
          <a href="https://instagram.com/balvoris" target="_blank" className="hover:text-emerald-700" rel="noreferrer">Instagram</a>
          <a href="https://linkedin.com/company/balvoris" target="_blank" className="hover:text-emerald-700" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

export default function Landing() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <PricingPreview />
    </div>
  )
}
