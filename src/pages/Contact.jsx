import React from 'react'
import Navbar from '../Navbar'

export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <section className="pt-16 pb-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black tracking-tight">Contact</h1>
          <p className="mt-3 text-slate-600">We’d love to hear from you. Reach us anytime.</p>

          <div className="mt-6 grid gap-6">
            <div className="rounded-2xl bg-emerald-50 p-4 ring-1 ring-emerald-200/60">
              <div className="font-semibold text-slate-900">Email</div>
              <a href="mailto:balvoris@gmail.com" className="text-emerald-700">balvoris@gmail.com</a>
            </div>
            <div className="rounded-2xl bg-emerald-50 p-4 ring-1 ring-emerald-200/60">
              <div className="font-semibold text-slate-900">Phone</div>
              <a href="tel:+917835958768" className="text-emerald-700">+91 7835958768</a>
            </div>
          </div>

          <form className="mt-8 rounded-3xl bg-white p-6 ring-1 ring-emerald-200/60 shadow-sm grid gap-4">
            <div>
              <label className="text-sm text-slate-600">Name</label>
              <input className="mt-1 w-full rounded-xl border border-emerald-200/60 bg-emerald-50 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm text-slate-600">Email</label>
              <input type="email" className="mt-1 w-full rounded-xl border border-emerald-200/60 bg-emerald-50 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400" placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-sm text-slate-600">Message</label>
              <textarea rows="5" className="mt-1 w-full rounded-xl border border-emerald-200/60 bg-emerald-50 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Tell us about your needs" />
            </div>
            <button type="button" className="inline-flex items-center justify-center rounded-full bg-emerald-600 text-white px-5 py-2.5 text-sm font-semibold shadow">Send</button>
          </form>

          <div className="mt-8 text-sm text-slate-500">
            Instagram: <a href="https://instagram.com/balvoris" target="_blank" rel="noreferrer" className="text-emerald-700">@balvoris</a> • LinkedIn: <a href="https://linkedin.com/company/balvoris" target="_blank" rel="noreferrer" className="text-emerald-700">BALVORIS</a>
          </div>
        </div>
      </section>
    </div>
  )
}
