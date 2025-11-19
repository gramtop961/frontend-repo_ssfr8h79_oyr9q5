import React from 'react'
import Navbar from '../Navbar'
import { motion } from 'framer-motion'

function ChatBubble({ from, children }) {
  const me = from === 'me'
  return (
    <div className={`max-w-[72%] ${me ? 'ml-auto' : ''}`}>
      <div className={`rounded-2xl px-4 py-2 shadow-sm ${me ? 'bg-emerald-600 text-white' : 'bg-white'}`}>{children}</div>
    </div>
  )
}

export default function AppPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50/50 text-slate-900">
      <Navbar />

      <section className="pt-16 pb-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black tracking-tight">The BALVORIS Super‑App</h1>
          <p className="mt-3 text-slate-600 max-w-2xl">Access any company’s AI agent in one place. File complaints, request information, live chat, and track tickets.</p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-6 items-start">
          <div className="rounded-3xl bg-emerald-50 p-5 ring-1 ring-emerald-200/60">
            <div className="rounded-2xl bg-white p-4 ring-1 ring-emerald-200/60 h-[460px] overflow-y-auto">
              <div className="space-y-3">
                <ChatBubble>Welcome to BALVORIS. Which company do you want to reach?</ChatBubble>
                <ChatBubble from="me">Balvoris Telecom</ChatBubble>
                <ChatBubble>What would you like to do?</ChatBubble>
                <ChatBubble from="me">File a network complaint and get ticket status.</ChatBubble>
                <ChatBubble>Complaint recorded (#BV-3841). Live agent is on it. Would you like SMS updates?</ChatBubble>
                <ChatBubble from="me">Yes, enable updates.</ChatBubble>
                <ChatBubble>Done. Anything else?</ChatBubble>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            {['File complaints','Request information','Live chat','Ticket tracking'].map((t,i)=> (
              <motion.div key={t} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.05 }} className="rounded-2xl bg-white p-5 ring-1 ring-emerald-200/60 shadow-sm">
                <div className="font-semibold text-slate-900">{t}</div>
                <p className="text-slate-600 mt-1">Beautiful, WhatsApp-inspired layout with smooth micro‑interactions for effortless conversations.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
