import React from 'react'
import Navbar from '../Navbar'

export default function About() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <section className="pt-16 pb-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black tracking-tight">About Us</h1>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Founded by Hitansh Sharma, BALVORIS is building universally accessible customer support. We believe every person should reach any company’s support instantly, with clarity and dignity.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Vision: “Making customer support universally accessible.” We craft calming, minimal interfaces and intelligent AI agents that resolve issues quickly and transparently.
          </p>
        </div>
      </section>
    </div>
  )
}
