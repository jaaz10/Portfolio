'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog } from '@headlessui/react'

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
  const details = projectDetails[project.name]

  return (
    <div className="w-full flex flex-col h-full">
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
                <span
                  key={tech}
                  className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium border ${getTechColor(tech)}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="relative z-10 mt-auto pt-6 flex items-center justify-between">
        <a 
          href={project.link.href} 
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-zinc-400 hover:text-teal-500 dark:text-zinc-200 transition-colors"
        >
          Visit Website →
        </a>
        
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-sm font-medium text-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
        >
          More Info →
        </button>
      </div>

      <Dialog 
        open={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
        
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-2xl rounded-xl bg-white p-6 shadow-lg dark:bg-zinc-800/90">
            <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-700/40 pb-3">
              <Dialog.Title className="text-base sm:text-lg font-medium text-zinc-900 dark:text-zinc-100">
                {project.name}
              </Dialog.Title>
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded-full p-2 hover:bg-zinc-100 dark:hover:bg-zinc-700/60"
                aria-label="Close"
              >
                <svg className="h-5 w-5 text-zinc-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            <div className="mt-4 space-y-6 overflow-y-auto max-h-[calc(100vh-8rem)]">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Image 
                    src={project.logo} 
                    alt="" 
                    className="h-12 w-12" 
                    unoptimized 
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium border ${getTechColor(tech)}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Overview
                </h3>
                <div className="mt-2 prose prose-sm dark:prose-invert">
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 whitespace-pre-line">
                    {details.fullDescription}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Challenges
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 whitespace-pre-line">
                  {details.challenges}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Outcome
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 whitespace-pre-line">
                  {details.outcome}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-700/40">
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-4 py-2 text-sm font-medium text-white bg-teal-500 rounded-md hover:bg-teal-600 dark:hover:bg-teal-400 transition-colors"
                >
                  Visit Website
                  <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  )
} 