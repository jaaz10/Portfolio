'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog } from '@headlessui/react'

export function ProjectCard({ project }) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-x-4">
        <Image src={project.logo} alt="" className="h-10 w-10" unoptimized />
        <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
          {project.name}
        </h2>
      </div>

      <div className="relative mt-4 w-full h-64 rounded-lg overflow-hidden">
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
          onClick={() => alert('More Info modal coming soon!')}
        >
          More Info →
        </a>
      </div>
    </div>
  )
} 