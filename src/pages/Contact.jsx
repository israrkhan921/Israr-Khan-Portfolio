import React, {useState} from 'react'

export default function Contact(){
  const [status,setStatus] = useState('')
  function onSubmit(e){
    e.preventDefault()
    const form = new FormData(e.target)
    const name = form.get('name')?.toString().trim()
    const email = form.get('email')?.toString().trim()
    const message = form.get('message')?.toString().trim()
    if(!name || !email || !message){
      setStatus('Please complete all fields')
      return
    }
    setStatus('Thanks — message captured (demo).')
    e.target.reset()
  }

  return (
    <section className="container py-8" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="text-2xl md:text-3xl font-semibold text-slate-100">Let’s Connect</h2>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div className="space-y-3">
          <p className="text-slate-300">Email: <a href="mailto:israrkdp@gmail.com" className="text-cyan-400">israrkdp@gmail.com</a></p>
          <p className="text-slate-300">LinkedIn: <a href="https://www.linkedin.com/in/israr-khan" target="_blank" rel="noreferrer noopener" className="text-cyan-400">linkedin.com/in/israr-khan</a></p>
          <p className="text-slate-300">GitHub: <a href="https://github.com/israrkhan921" target="_blank" rel="noreferrer noopener" className="text-cyan-400">github.com/israrkhan921</a></p>
          <p className="text-slate-300">Twitter: <a href="https://twitter.com/YOUR_TWITTER" target="_blank" rel="noreferrer noopener" className="text-cyan-400">twitter.com/YOUR_TWITTER</a></p>
          <p className="text-slate-300">LeetCode: <a href="https://leetcode.com/YOUR_USERNAME" target="_blank" rel="noreferrer noopener" className="text-cyan-400">leetcode.com/YOUR_USERNAME</a></p>
          <p className="text-slate-300">Facebook: <a href="https://facebook.com/YOUR_PROFILE" target="_blank" rel="noreferrer noopener" className="text-cyan-400">facebook.com/YOUR_PROFILE</a></p>
          <p className="text-slate-300">Discord: <a href="https://discord.gg/YOUR_INVITE" target="_blank" rel="noreferrer noopener" className="text-cyan-400">Join my Discord</a></p>
        </div>

        <form onSubmit={onSubmit} aria-describedby="contact-desc" className="max-w-xl mt-0 space-y-3">
          <p id="contact-desc" className="text-slate-300">Or send a message directly using the form below.</p>
          <label htmlFor="name" className="block text-sm text-slate-200">Name</label>
          <input id="name" name="name" type="text" required aria-required="true" className="w-full p-3 rounded-md bg-slate-900 border border-slate-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <label htmlFor="email" className="block text-sm text-slate-200">Email</label>
          <input id="email" name="email" type="email" required aria-required="true" className="w-full p-3 rounded-md bg-slate-900 border border-slate-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <label htmlFor="message" className="block text-sm text-slate-200">Message</label>
          <textarea id="message" name="message" rows={6} required aria-required="true" className="w-full p-3 rounded-md bg-slate-900 border border-slate-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <div className="mt-2">
            <button type="submit" className="inline-flex items-center px-4 py-2 rounded-md bg-cyan-400 text-slate-900 font-semibold hover:bg-cyan-500 cursor-pointer">Send</button>
          </div>
          {status && <p role="status" className="text-slate-300 mt-2">{status}</p>}
        </form>
      </div>
    </section>
  )
}
