import React from 'react'
import Navbar from '../Navbar'

const plans = [
  { name: 'Startup', monthly: 199, annual: 169, features: ['3 agents', '10k conversations', 'Email support'] },
  { name: 'Growth', monthly: 699, annual: 599, features: ['10 agents', '100k conversations', 'Priority support'] },
  { name: 'Enterprise', monthly: 0, annual: 0, features: ['Unlimited agents', 'SLA & SSO', 'Dedicated success'] },
]

export default function Pricing() {
  const [annual, setAnnual] = React.useState(true)

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <section className="pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h1 className="text-4xl font-black tracking-tight">Pricing</h1>
            <div className="flex items-center gap-2 text-sm">
              <span className={!annual? 'text-emerald-700 font-semibold' : 'text-slate-500'}>Monthly</span>
              <button onClick={() => setAnnual(a => !a)} className="relative inline-flex h-7 w-12 items-center rounded-full bg-emerald-600/20">
                <span className={`inline-block h-6 w-6 transform rounded-full bg-emerald-600 transition ${annual ? 'translate-x-6' : 'translate-x-0.5'}`} />
              </button>
              <span className={annual? 'text-emerald-700 font-semibold' : 'text-slate-500'}>Annual</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {plans.map((p) => (
              <div key={p.name} className={`rounded-3xl p-6 ring-1 ring-emerald-200/60 bg-white shadow-sm ${p.name==='Growth' ? 'relative overflow-hidden' : ''}`}>
                {p.name==='Growth' && <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent" />}
                <div className="relative">
                  <div className="text-sm font-semibold text-emerald-700 mb-1">{p.name}</div>
                  <div className="text-4xl font-black text-slate-900">{p.name==='Enterprise' ? 'Custom' : `$${annual ? p.annual : p.monthly}`}<span className="text-base text-slate-500 font-medium">/mo</span></div>
                  <ul className="mt-4 space-y-2 text-slate-600">
                    {p.features.map((b) => <li key={b}>• {b}</li>)}
                  </ul>
                  <a href="/contact" className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-600 text-white px-5 py-2.5 text-sm font-semibold shadow">Contact sales</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
