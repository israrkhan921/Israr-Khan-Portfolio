import React from 'react'
import Image from './Image'
import { Link } from 'react-router-dom'

export default function ProjectCard({project}){
  return (
    <article aria-labelledby={`proj-${project.id}`} className="bg-slate-800 p-4 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition">
      <Link to={`/projects/${project.id}`} className="block rounded overflow-hidden">
        <Image alt={project.title} src={project.image} className="w-full h-44 object-cover" />
      </Link>
      <div className="mt-3">
        <h3 id={`proj-${project.id}`} className="text-lg font-semibold text-slate-100">
          <Link to={`/projects/${project.id}`} className="hover:underline">{project.title}</Link>
        </h3>
        <p className="text-slate-400 text-sm mt-1">{project.description}</p>
        <div className="mt-3 flex gap-2 flex-wrap">
          {project.tags.map(t => (
            <span key={t} className="text-xs bg-slate-700 text-slate-200 px-2 py-1 rounded">{t}</span>
          ))}
        </div>
        <div className="mt-4 flex gap-3">
          {project.live ? (
            <a href={project.live} aria-label={`Open ${project.title} live`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-cyan-400 text-slate-900 font-medium hover:bg-cyan-500">
              View
            </a>
          ) : (
            <Link to={`/projects/${project.id}`} className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-slate-700 text-slate-200 font-medium hover:bg-slate-600">Details</Link>
          )}

          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} source`} className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-700 text-slate-200 hover:border-slate-500">
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
