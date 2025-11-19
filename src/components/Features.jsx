import React from 'react'
import { MessageSquare, ShieldCheck, Rocket, Sparkles, Workflow, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: MessageSquare,
    title: 'WhatsApp-inspired UI',
    desc: 'Familiar, sleek chat interface tuned for clarity and speed.'
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-grade privacy',
    desc: 'Your data is sandboxed with strict access controls.'
  },
  {
    icon: Rocket,
    title: 'Rapid deployment',
    desc: 'Train and launch a new agent in hours, not weeks.'
  },
  {
    icon: Sparkles,
    title: 'Contextual intelligence',
    desc: 'Understands tone, intent, and company policy nuances.'
  },
  {
    icon: Workflow,
    title: 'Workflow automation',
    desc: 'Escalations, ticketing, and follow-ups end-to-end.'
  },
  {
    icon: Globe,
    title: 'Universal super-app',
    desc: 'Any user can reach any company’s agent in one place.'
  }
]

export default function Features() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-emerald-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">Built for effortless support</h2>
          <p className="mt-4 text-slate-600">Soft gradients, breathable spacing, and delightful micro-interactions.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group rounded-3xl bg-white p-6 ring-1 ring-emerald-200/40 hover:ring-emerald-300/60 shadow-sm hover:shadow-lg/50 transition overflow-hidden">
              <div className="h-12 w-12 rounded-2xl bg-emerald-100 text-emerald-700 grid place-items-center mb-4">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-1.5 text-slate-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
