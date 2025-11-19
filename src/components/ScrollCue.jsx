import React from 'react'

export default function ScrollCue() {
  return (
    <div className="relative flex items-center justify-center mt-10">
      <div className="h-9 w-5 rounded-full border border-emerald-300/80 flex items-start justify-center p-1">
        <div className="h-2 w-1 rounded-full bg-emerald-500 animate-[scroll_1.6s_ease-in-out_infinite]" />
      </div>
      <style>{`@keyframes scroll { 0%{transform:translateY(0);opacity:1} 70%{transform:translateY(14px);opacity:.1} 100%{opacity:0} }`}</style>
    </div>
  )
}
