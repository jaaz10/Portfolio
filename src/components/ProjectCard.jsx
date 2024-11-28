'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog } from '@/components/Dialog'

function getTechColor(tech) {
  // Frontend Technologies
  if (['react', 'wordpress', 'material ui'].some(t => tech.toLowerCase().includes(t))) {
    return "bg-sky-100 text-sky-800 dark:bg-sky-800/30 dark:text-sky-300 border-sky-200 dark:border-sky-800/50 hover:bg-sky-200 dark:hover:bg-sky-800/40"
  }

  // Backend Technologies
  if (['python', 'django', 'java', 'spring boot'].some(t => tech.toLowerCase().includes(t))) {
    return "bg-emerald-100 text-emerald-800 dark:bg-emerald-800/30 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/50 hover:bg-emerald-200 dark:hover:bg-emerald-800/40"
  }

  // Database Technologies
  if (['mysql', 'postgresql', 'firebase'].some(t => tech.toLowerCase().includes(t))) {
    return "bg-amber-100 text-amber-800 dark:bg-amber-800/30 dark:text-amber-300 border-amber-200 dark:border-amber-800/50 hover:bg-amber-200 dark:hover:bg-amber-800/40"
  }

  // Testing & DevOps
  if (['junit', 'docker'].some(t => tech.toLowerCase().includes(t))) {
    return "bg-indigo-100 text-indigo-800 dark:bg-indigo-800/30 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800/50 hover:bg-indigo-200 dark:hover:bg-indigo-800/40"
  }

  // PHP & Related
  if (['php', 'wordpress plugins'].some(t => tech.toLowerCase().includes(t))) {
    return "bg-purple-100 text-purple-800 dark:bg-purple-800/30 dark:text-purple-300 border-purple-200 dark:border-purple-800/50 hover:bg-purple-200 dark:hover:bg-purple-800/40"
  }

  // Default/Other
  return "bg-rose-100 text-rose-800 dark:bg-rose-800/30 dark:text-rose-300 border-rose-200 dark:border-rose-800/50 hover:bg-rose-200 dark:hover:bg-rose-800/40"
}

export function ProjectCard({ project, projectDetails }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="w-full">
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={project.logo} alt="" className="h-8 w-8" unoptimized />
      </div>
      <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
        {project.name}
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{project.description}</p>
      
      <div className="relative z-10">
        {project.technologies && (
          <>
            <p className="mt-6 mb-2 text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
              Technologies used:
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className={`px-2 py-1 rounded-full ${getTechColor(tech)}`}>
                  {tech}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
} 