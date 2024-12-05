'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog } from '@headlessui/react'

export function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-x-4">
        <Image src={project.logo} alt="" className="h-10 w-10" unoptimized />
        <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
          {project.name}
        </h2>
      </div>

      <div className="relative mt-4 w-full h-72 rounded-lg overflow-hidden">
        <img
          src={project.screenshot}
          alt={`Screenshot of ${project.name}`}
          className="w-full h-full object-cover"
        />
      </div>

      <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>

      <div className="mt-4">
        <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100 mb-2">
          Technologies Used:
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-400/10 text-teal-500 dark:text-teal-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-between">
        {project.link && (
          <a
            href={project.link.href}
            className="text-sm text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.link.href !== '#' ? 'View live project →' : 'Coming soon →'}
          </a>
        )}

        <a
          href="#"
          className="text-sm text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300"
          onClick={() => setIsOpen(true)}
        >
          More Info →
        </a>
      </div>

      {/* Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className="relative bg-white dark:bg-zinc-800 rounded-lg max-w-lg mx-auto p-6">
            <Dialog.Title className="text-lg font-bold">{project.name}</Dialog.Title>
            <Dialog.Description className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {/* Add your README-like content here */}
              <p>{project.description}</p>
              <div className="mt-4">
                <h3 className="text-sm font-semibold">Screenshots:</h3>
                <div className="flex gap-2 mt-2">
                  {/* Replace with actual screenshots */}
                  <img src={project.screenshot} alt="Screenshot 1" className="w-1/3 h-24 object-cover rounded" />
                  <img src={project.screenshot} alt="Screenshot 2" className="w-1/3 h-24 object-cover rounded" />
                  <img src={project.screenshot} alt="Screenshot 3" className="w-1/3 h-24 object-cover rounded" />
                </div>
              </div>
            </Dialog.Description>
            <button
              className="mt-4 text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  )
} 