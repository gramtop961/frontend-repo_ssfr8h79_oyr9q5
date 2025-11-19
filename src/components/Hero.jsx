import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white" />
      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-emerald-100/60 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20 grid lg:grid-cols-2 gap-10 items-center">
        <div className="text-center lg:text-left">
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
            AI Chat Agents. On Demand. Always Available.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="mt-5 text-slate-600 text-lg leading-relaxed">
            BALVORIS creates intelligent AI representatives for companies — accessible in one universal app by any user to submit complaints, inquiries, or support requests.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <a href="/app" className="inline-flex items-center justify-center rounded-full bg-emerald-600 text-white px-6 py-3 text-sm font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-0.5 transition">Launch App</a>
            <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-white text-emerald-700 ring-1 ring-emerald-300/70 px-6 py-3 text-sm font-semibold hover:bg-emerald-50 transition">Request AI Agent</a>
          </motion.div>

          {/* Market size + logos row */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.6 }} className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500">
            <div className="px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">$20B+ opportunity</div>
            <div>Premium. Minimal. Calming.</div>
          </motion.div>
        </div>

        {/* Spline hero */}
        <div className="relative h-[420px] sm:h-[520px] lg:h-[600px] rounded-3xl overflow-hidden ring-1 ring-emerald-200/40 shadow-[0_40px_120px_-40px_rgba(16,185,129,0.35)]">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
