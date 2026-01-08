import React from 'react'
import projects from '../utils/projects'
import ProjectCard from '../components/ProjectCard'

export default function Projects(){
  return (
    <section className="container py-8" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="text-2xl md:text-3xl font-semibold mb-6 text-slate-100">Selected projects</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}
