import React from 'react'

export default function Footer(){
  return (
    <footer className="border-t border-slate-800 pt-8 pb-6 bg-transparent" role="contentinfo">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

        <div className="space-y-2">
          <div className="text-lg font-semibold text-slate-100">Israr Khan</div>
          <p className="text-slate-400 text-sm">Frontend Engineer — crafting accessible, high-performance interfaces.</p>
        </div>

        <div>
          <h4 className="text-sm font-medium text-slate-200 mb-2">Site</h4>
          <nav aria-label="Footer sitemap">
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="/" className="hover:text-slate-100">Home</a></li>
              <li><a href="/projects" className="hover:text-slate-100">Projects</a></li>
              <li><a href="/about" className="hover:text-slate-100">About</a></li>
              <li><a href="/contact" className="hover:text-slate-100">Contact</a></li>
            </ul>
          </nav>
        </div>

        <div>
          <h4 className="text-sm font-medium text-slate-200 mb-2">Contact</h4>
          <p className="text-slate-400 text-sm">Reach out for freelance work or collaboration:</p>
          <a href="mailto:israr@example.com" className="inline-block mt-3 px-3 py-2 rounded-md border border-slate-700 text-slate-100 hover:bg-slate-800 text-sm">israrkdp@gmail.com</a>
        </div>

        <div className="md:text-right">
          <h4 className="text-sm font-medium text-slate-200 mb-2">Social</h4>
          <div className="flex gap-2 justify-start md:justify-end">
            <a href="https://github.com/israrkhan921" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 rounded-md bg-slate-800 text-slate-200 hover:bg-cyan-600 hover:text-slate-900 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.94 3.2 9.13 7.64 10.61.56.1.76-.24.76-.54 0-.27-.01-1-.02-1.96-3.1.67-3.75-1.5-3.75-1.5-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.68.08-.68 1.13.08 1.73 1.16 1.73 1.16 1 .72 2.62.51 3.25.39.1-.3.4-.51.72-.63-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.17-3-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.17.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.19-1.48 3.15-1.17 3.15-1.17.62 1.57.23 2.73.11 3.02.73.78 1.17 1.78 1.17 3 0 4.29-2.62 5.24-5.11 5.51.41.35.76 1.04.76 2.1 0 1.52-.01 2.75-.01 3.12 0 .3.2.65.77.54C19.05 20.88 22.25 16.69 22.25 11.75 22.25 5.48 17.27.5 12 .5z" />
              </svg>
            </a>

            <a href="https://x.com/israrkhansayed" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-10 h-10 rounded-md bg-slate-800 text-slate-200 hover:bg-cyan-600 hover:text-slate-900 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M23 4.56c-.77.34-1.6.57-2.47.67a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.3 3.9A12.14 12.14 0 0 1 3.15 3.15a4.28 4.28 0 0 0 1.32 5.71 4.23 4.23 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.2c-.47.13-.98.2-1.5.2-.36 0-.72-.03-1.06-.1a4.28 4.28 0 0 0 3.99 2.97A8.58 8.58 0 0 1 1 19.54a12.1 12.1 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2v-.56A8.7 8.7 0 0 0 23 4.56z" />
              </svg>
            </a>

            <a href="https://leetcode.com/u/Israrkhan921" target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="w-10 h-10 rounded-md bg-slate-800 text-slate-200 hover:bg-cyan-600 hover:text-slate-900 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M21 3H3v18h18V3zM9.5 17.5l-1.4-1.4L13.2 11l1.4 1.4L9.5 17.5zM16.5 9.5L12 5v2.5l3.5 3.5V9.5z" />
              </svg>
            </a>

            <a href="https://discord.com/users/israr0838" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="w-10 h-10 rounded-md bg-slate-800 text-slate-200 hover:bg-cyan-600 hover:text-slate-900 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20.1 3H3.9A1.9 1.9 0 0 0 2 4.9v10.2A1.9 1.9 0 0 0 3.9 17h11.3l-0.5-1.7 1.2 1 1.1 0.9 1.9 1.4V4.9A1.9 1.9 0 0 0 20.1 3zM8.6 12.1c-0.9 0-1.6-0.8-1.6-1.7s0.7-1.7 1.6-1.7c0.9 0 1.6 0.8 1.6 1.7s-0.7 1.7-1.6 1.7zm6.8 0c-0.9 0-1.6-0.8-1.6-1.7s0 .7-.54-.54v-.5a4 .4a4 .4a4 .4a4 .4a4 .4a4 .4a4 .4a4 .4a4 .4a4 .4a4 .4a4 .4a4 .5l-.5-.5l-.5-.5l-.5-.5l-.5-.5l-.5-.5l-.5-.5l-.5-.5l-.5-.5l-.5-.5l-.5-.5l-.5-.5l-.5-.5l-.5-.5l-.5 -.3z" />
              </svg>
            </a>
          </div>
        </div>

      </div>

      <div className="container mx-auto text-center text-slate-500 text-sm mt-6">© {new Date().getFullYear()} Israr Khan — Built with accessibility and performance in mind.</div>
    </footer>
  )
}
