import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export default function Header(){
  const [open, setOpen] = useState(false)

  // prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const NavItem = ({to, children}) => (
    <NavLink to={to} end className={({isActive}) => `group px-2 md:px-3 py-1 text-sm md:text-base font-medium ${isActive ? 'text-slate-100' : 'text-slate-300 hover:text-white'}`}>
      <span className="relative">
        <span className="pointer-events-none">{children}</span>
        <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" style={{transformOrigin: 'left'}} />
      </span>
    </NavLink>
  )

  return (
    <header className="site-header">
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="/" className="flex items-center gap-3">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden className="text-cyan-400">
            <rect width="24" height="24" rx="6" fill="#06202A" />
            <path d="M6 16.5V7.5L12 4l6 3.5v9" stroke="#34DCE9" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-lg font-semibold text-slate-100">Israr Khan</span>
        </a>

        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-4">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/projects">Projects</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="ml-4 inline-flex items-center px-4 py-2 rounded-md bg-cyan-400 text-slate-900 font-semibold hover:bg-cyan-500">Resume</a>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setOpen(o => !o)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'} className="relative z-50 p-2 rounded-md bg-slate-800 text-slate-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div aria-hidden={!open} className={`md:hidden fixed inset-x-0 top-0 z-30 transform ${open ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-200` }>
        <div className="bg-slate-900/95 backdrop-blur-md min-h-screen pt-24 px-6">
          <div className="space-y-4">
            <NavLink onClick={() => setOpen(false)} to="/" className="block text-lg text-slate-100">Home</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/about" className="block text-lg text-slate-100">About</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/projects" className="block text-lg text-slate-100">Projects</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/contact" className="block text-lg text-slate-100">Contact</NavLink>
            <a href="/israrKhanResume.pdf" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-4 py-2 bg-cyan-400 text-slate-900 rounded-md">Resume</a>
          </div>
        </div>
      </div>
    </header>
  )
}
