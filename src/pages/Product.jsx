import React from 'react'
import Navbar from '../Navbar'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Upload, Bot, Building2, Code2 } from 'lucide-react'

export default function Product() {
  return (
    <div className="bg-white text-slate-900 min-h-screen">
      <Navbar />

      <section className="relative pt-20 pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black tracking-tight">From your data to a live AI agent</h1>
          <p className="mt-3 text-slate-600 max-w-2xl">Company → Upload Data → BALVORIS AI → Deployed Agent</p>
        </div>
        <div className="mt-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-6 items-center">
          <div className="rounded-3xl overflow-hidden ring-1 ring-emerald-200/50 shadow-[0_40px_120px_-40px_rgba(16,185,129,0.35)] h-[420px]">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="grid gap-4">
            {[{Icon: Building2, t:'Company'},{Icon: Upload, t:'Upload Data'},{Icon: Bot, t:'BALVORIS AI'},{Icon: Code2, t:'Deployed Agent'}].map(({Icon,t},i)=> (
              <motion.div key={t} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.05 }} className="flex items-center gap-3 rounded-2xl bg-emerald-50 p-4 ring-1 ring-emerald-200/60">
                <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-700 grid place-items-center"><Icon className="h-5 w-5"/></div>
                <div className="font-semibold">{t}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-3xl bg-white ring-1 ring-emerald-200/60 p-6 shadow-sm">
            <div className="font-semibold text-emerald-700 mb-2">Chat simulation</div>
            <div className="rounded-2xl bg-emerald-50 p-4 h-80 overflow-hidden">
              <div className="space-y-3">
                <div className="max-w-[70%] rounded-2xl bg-white p-3 shadow-sm">Hello! I need to track my order.</div>
                <div className="max-w-[70%] rounded-2xl bg-emerald-600 text-white p-3 ml-auto shadow-sm">Sure! Please share your order ID.</div>
                <div className="max-w-[70%] rounded-2xl bg-white p-3 shadow-sm">It’s ABX-0091.</div>
                <div className="max-w-[70%] rounded-2xl bg-emerald-600 text-white p-3 ml-auto shadow-sm">Found it. Your package arrives tomorrow by 5 PM.</div>
              </div>
            </div>
          </div>
          <div className="rounded-3xl bg-white ring-1 ring-emerald-200/60 p-6 shadow-sm">
            <div className="font-semibold text-emerald-700 mb-2">API integration</div>
            <pre className="rounded-xl bg-slate-900 text-emerald-200 p-4 text-sm overflow-auto">
{`curl -X POST $BACKEND_URL/api/agents \\
  -H 'Content-Type: application/json' \\
  -d '{"name":"Support Agent","sources":["faqs.pdf","policies.md"]}'`}
            </pre>
            <a href="/pricing" className="mt-4 inline-flex items-center justify-center rounded-full bg-emerald-600 text-white px-5 py-2.5 text-sm font-semibold shadow">Start now</a>
          </div>
        </div>
      </section>
    </div>
  )
}
