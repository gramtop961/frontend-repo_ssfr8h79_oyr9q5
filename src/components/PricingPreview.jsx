import React from 'react'
import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Startup',
    price: '$199',
    bullets: ['Up to 3 agents', '10k conversations', 'Email support']
  },
  {
    name: 'Growth',
    price: '$699',
    bullets: ['Up to 10 agents', '100k conversations', 'Priority support']
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    bullets: ['Unlimited agents', 'SLA & SSO', 'Dedicated success']
  }
]

export default function PricingPreview() {
  return (
    <section className="py-20 bg-gradient-to-b from-emerald-50/40 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black tracking-tight text-slate-900">Plans for every stage</h2>
          <p className="text-slate-600">Annual discounts available. Seamless upgrades.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className={`rounded-3xl p-6 ring-1 ring-emerald-200/50 bg-white shadow-sm ${t.name==='Growth' ? 'relative overflow-hidden' : ''}`}>
              {t.name==='Growth' && <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent" />}
              <div className="relative">
                <div className="text-sm font-semibold text-emerald-700 mb-1">{t.name}</div>
                <div className="text-4xl font-black text-slate-900">{t.price}<span className="text-base text-slate-500 font-medium">/mo</span></div>
                <ul className="mt-4 space-y-2 text-slate-600">
                  {t.bullets.map((b) => <li key={b}>• {b}</li>)}
                </ul>
                <a href="/pricing" className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-600 text-white px-5 py-2.5 text-sm font-semibold shadow hover:-translate-y-0.5 transition">Choose {t.name}</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
