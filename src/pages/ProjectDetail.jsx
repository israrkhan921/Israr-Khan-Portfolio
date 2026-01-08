import React from 'react'
import { useParams, Link } from 'react-router-dom'
import projects from '../utils/projects'
import Image from '../components/Image'

export default function ProjectDetail(){
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if(!project){
    return (
      <section className="container py-8">
        <h2 className="text-xl font-semibold">Project not found</h2>
        <p className="text-muted">No project matches the requested id.</p>
        <Link to="/projects" className="text-accent">Back to projects</Link>
      </section>
    )
  }

  return (
    <section className="container py-8" aria-labelledby="proj-title">
      <Link to="/projects" className="text-cyan-400">← Back to projects</Link>
      <h1 id="proj-title" className="text-3xl md:text-4xl font-bold mt-3 text-slate-100">{project.title}</h1>
      <p className="text-slate-300 mt-2 max-w-prose">{project.description}</p>
      <div className="mt-6">
        <Image src={project.image} alt={project.title} className="w-full max-h-96 object-cover rounded-md shadow-lg" />
      </div>

      <div className="mt-8 grid gap-6">
        <section>
          <h2 className="font-semibold text-slate-100">Problem</h2>
          <p className="text-slate-300">{project.problem}</p>
        </section>

        <section>
          <h2 className="font-semibold text-slate-100">Solution</h2>
          <p className="text-slate-300">{project.solution}</p>
        </section>

        <section>
          <h2 className="font-semibold text-slate-100">Architecture</h2>
          <p className="text-slate-300">{project.architecture}</p>
        </section>

        <section>
          <h2 className="font-semibold text-slate-100">Challenges</h2>
          <p className="text-slate-300">{project.challenges}</p>
        </section>

        <section>
          <h2 className="font-semibold text-slate-100">What I learned</h2>
          <p className="text-slate-300">{project.learnings}</p>
        </section>
      </div>

      <div className="mt-6 flex gap-3">
        {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 bg-cyan-400 text-slate-900 rounded-md">View live</a>}
        {project.repo && <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 border border-slate-700 text-slate-200 rounded-md">Source</a>}
      </div>
    </section>
  )
}
