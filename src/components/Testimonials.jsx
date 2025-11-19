import React from 'react'
import { motion } from 'framer-motion'

const items = [
  {
    name: 'Aarav Mehta',
    role: 'COO, Fintra',
    quote: 'We replaced a 12-person L1 team with BALVORIS. NPS up 23 points, resolution time down 68%.'
  },
  {
    name: 'Sarah Collins',
    role: 'Head of CX, Lumen Health',
    quote: 'The WhatsApp-like UI makes adoption instant. Our agents learned in minutes; customers love it.'
  },
  {
    name: 'Diego Alvarez',
    role: 'Founder, AeroParcel',
    quote: 'Deployed our first agent in two days. Ticket backlog vanished in a week.'
  }
]

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black tracking-tight text-slate-900">Loved by modern teams</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.blockquote key={t.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-3xl bg-white p-6 ring-1 ring-emerald-200/40 shadow-sm">
              <p className="text-slate-700">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-slate-500">
                <span className="font-semibold text-slate-900">{t.name}</span> • {t.role}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
