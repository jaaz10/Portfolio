'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog } from '@headlessui/react'

export function ProjectCard({ project }) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-x-4">
        <Image src={project.logo} alt="" className="h-7 w-7" unoptimized />
        <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
          {project.name}
        </h2>
      </div>
      <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech.name}
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
            style={{
              backgroundColor: `${tech.color}20`, // 20 is hex for 12% opacity
              color: tech.color,
            }}
          >
            {tech.name}
          </span>
        ))}
      </div>
      {project.link && (
        <div className="mt-4">
          <a
            href={project.link.href}
            className="text-sm text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.link.label} →
          </a>
        </div>
      )}
    </div>
  )
} 