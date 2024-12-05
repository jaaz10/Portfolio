'use client'

import { FaWordpress, FaReact, FaNodeJs, FaFigma } from 'react-icons/fa'
import { SiTailwindcss, SiMysql, SiMongodb, SiSupabase, SiPhp, SiExpo, SiNextdotjs } from 'react-icons/si'
import { TbPlugConnected } from 'react-icons/tb'

export function TechStack() {
  const technologies = {
    'Frontend': [
      { name: 'React + Next.js', icon: <FaReact /> },
      { name: 'React Native + Expo', icon: <SiExpo /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    ],
    'Backend': [
      { name: 'Node.js + Express', icon: <FaNodeJs /> },
      { name: 'PHP', icon: <SiPhp /> },
      { name: 'WordPress', icon: <FaWordpress /> },
      { name: 'Custom WP Plugins', icon: <TbPlugConnected /> },
    ],
    'Database': [
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Supabase', icon: <SiSupabase /> },
    ],
    'Design': [
      { name: 'Figma', icon: <FaFigma /> },
    ],
  }

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-800 dark:text-zinc-100">
        <FaReact className="h-6 w-6 flex-none" />
        <span className="ml-3">Tech Stack</span>
      </h2>
      <div className="mt-6 space-y-4">
        {Object.entries(technologies).map(([category, techs]) => (
          <div key={category}>
            <h3 className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-2">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {techs.map((tech) => (
                <span
                  key={tech.name}
                  className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-teal-400/10 text-teal-500 dark:text-teal-400 hover:bg-teal-400/20 transition-colors"
                >
                  <span className="mr-1.5">{tech.icon}</span>
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 