import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../components/Image'

export default function Home(){
  return (
    <section className="container py-12" aria-labelledby="home-heading">
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h1 id="home-heading" className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-100">
            Hi, I’m Israr Khan
            <span className="block text-xl md:text-2xl font-semibold text-slate-300">Frontend Engineer (React / Next.js) with Full-Stack Experience</span>
          </h1>
          <p className="text-slate-400 mt-4 max-w-prose">I build responsive, accessible, and high-performance web applications. I focus on clean components, fast experiences, and thoughtful UX.</p>
          <div className="flex gap-3 mt-6 flex-wrap">
            <Link to="/projects" className="inline-flex items-center px-4 py-2 bg-cyan-400 hover:bg-cyan-500 text-slate-900 rounded-md font-semibold">View my work</Link>
            <Link to="/contact" className="inline-flex items-center px-4 py-2 border border-slate-700 text-slate-300 rounded-md hover:bg-slate-800">Contact</Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <Image src="/avatar.png" alt="Israr Khan — Frontend Engineer" className="rounded-full w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-cover shadow-xl" />
        </div>
      </div>
    </section>
  )
}
