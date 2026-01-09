import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../components/Image'

export default function About(){
  return (
    <section className="container py-8" aria-labelledby="about-heading">
      <h2 id="about-heading" className="text-2xl font-semibold">About</h2>

      <div className="mt-4 flex flex-col sm:flex-row items-start gap-6">
        <div className="flex-shrink-0">
          <Image src="/avatar.png" alt="Israr Khan — Frontend Engineer" className="rounded-full w-32 h-32 sm:w-40 sm:h-40 object-cover shadow-lg" />
        </div>

        <div>
          <p className="text-slate-300">
            I am a Frontend Engineer with experience in building and maintaining production websites in remote startup environments. I focus on accessibility, usability, performance, and clean component architecture. I also have experience with headless CMS (Contentful), REST APIs, and basic full-stack development.
          </p>

          <h3 className="mt-4 font-medium text-slate-100">Summary</h3>
          <ul className="list-disc pl-5 text-slate-300">
            <li>Skilled in React, Next.js, Tailwind CSS, HTML5, CSS3, and responsive design</li>
            <li>Experience integrating APIs, dynamic content, and CMS</li>
            <li>Passionate about maintainable, reusable, and accessible UI components</li>
          </ul>
        </div>
      </div>

      <section className="mt-8" aria-labelledby="skills-heading">
        <h3 id="skills-heading" className="text-xl font-semibold">Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
          <div className="p-4 bg-slate-800 rounded-lg shadow-sm"> 
            <strong className="text-slate-100">Frontend</strong>
            <p className="text-slate-300 text-sm mt-2">React, Next.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive Design, Accessibility (WCAG), Semantic HTML</p>
          </div>
          <div className="p-4 bg-slate-800 rounded-lg shadow-sm"> 
            <strong className="text-slate-100">Backend / Full-Stack</strong>
            <p className="text-slate-300 text-sm mt-2">Node.js, Express.js, MongoDB, MySQL, REST APIs</p>
          </div>
          <div className="p-4 bg-slate-800 rounded-lg shadow-sm"> 
            <strong className="text-slate-100">CMS & APIs</strong>
            <p className="text-slate-300 text-sm mt-2">Contentful, API Integration</p>
          </div>
          <div className="p-4 bg-slate-800 rounded-lg shadow-sm"> 
            <strong className="text-slate-100">Tools & Deployment</strong>
            <p className="text-slate-300 text-sm mt-2">Git, GitHub, Vercel, Railway, Netlify, npm, Chrome DevTools</p>
          </div>
          <div className="p-4 bg-slate-800 rounded-lg shadow-sm"> 
            <strong className="text-slate-100">Soft Skills</strong>
            <p className="text-slate-300 text-sm mt-2">Remote collaboration, Problem solving, Code reviews, Mentoring</p>
          </div>
        </div>
      </section>

      <section className="mt-8" aria-labelledby="projects-summary-heading">
        <h3 id="projects-summary-heading" className="text-xl font-semibold">Selected Projects</h3>
        <p className="text-muted mt-2">See the Projects page for full details and links to live sites and source code.</p>
      </section>

      <section className="mt-8" aria-labelledby="work-heading">
        <h3 id="work-heading" className="text-xl font-semibold">Work Experience</h3>
        <article className="mt-3 p-4 bg-[#071226] rounded">
          <h4 className="font-semibold">Frontend Engineer / Website Administrator — Grand Yfiel Studio Inc.</h4>
          <p className="text-muted text-sm mt-1">Built and maintained company website using React, Next.js, Tailwind CSS, and Contentful CMS. Managed content updates, feature work, bug fixes, and deployments. Integrated APIs, optimized performance, and improved accessibility across devices.</p>
          <p className="text-muted text-xs mt-2"><strong>Tech:</strong> React, Next.js, Tailwind CSS, Contentful, Git, Vercel</p>
        </article>
      </section>

      <section className="mt-8" aria-labelledby="education-heading">
        <h3 id="education-heading" className="text-xl font-semibold">Education</h3>
        <p className="text-muted mt-2">Bachelor of Science in Computer Science (In Progress)<br />University of Paktia — Expected Graduation: 2027</p>
      </section>

      <div className="mt-8 flex gap-3 flex-wrap">
        <Link to="/contact"><button className="inline-flex items-center px-4 py-2 border border-slate-700 text-slate-300 rounded-md hover:bg-slate-800 cursor-pointer">Contact Me</button></Link>
        <a href="/israrKhanResume.pdf" target="_blank" rel="noreferrer"><button className="ml-4 inline-flex items-center px-4 py-2 rounded-md bg-cyan-400 text-slate-900 font-semibold hover:bg-cyan-500 cursor-pointer">Download CV</button></a>
      </div>
    </section>
  )
}
