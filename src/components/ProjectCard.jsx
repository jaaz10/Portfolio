'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog } from '@headlessui/react'
import { FaWordpress, FaReact, FaNodeJs, FaFigma } from 'react-icons/fa'
import { SiTailwindcss, SiMysql, SiMongodb, SiSupabase, SiPhp, SiExpo, SiNextdotjs } from 'react-icons/si'
import { TbPlugConnected } from 'react-icons/tb'

const techIcons = {
  'WordPress': <FaWordpress />,
  'Custom WP Plugins': <TbPlugConnected />,
  'PHP': <SiPhp />,
  'MySQL': <SiMysql />,
  'React + Next.js': <FaReact />,
  'Tailwind CSS': <SiTailwindcss />,
  'Supabase': <SiSupabase />,
  'Node.js + Express': <FaNodeJs />,
  'Figma': <FaFigma />,
  'React Native + Expo': <SiExpo />,
  'MongoDB': <SiMongodb />,
  'Next.js': <SiNextdotjs />
}

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
      <div className="mt-4">
        <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100 mb-2">
          Technologies Used:
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-teal-400/10 text-teal-500 dark:text-teal-400 hover:bg-teal-400/20 transition-colors"
            >
              <span className="mr-1.5">{techIcons[tech]}</span>
              {tech}
            </span>
          ))}
        </div>
      </div>
      {project.link && (
        <div className="mt-4">
          <a
            href={project.link.href}
            className="text-sm text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.link.href !== '#' ? 'View live project →' : 'Coming soon →'}
          </a>
        </div>
      )}
    </div>
  )
} 