'use client'

import { FaWordpress, FaReact, FaNodeJs, FaFigma } from 'react-icons/fa'
import { SiTailwindcss, SiMysql, SiMongodb, SiSupabase, SiPhp, SiExpo, SiNextdotjs } from 'react-icons/si'
import { TbPlugConnected } from 'react-icons/tb'

export function TechStack() {
  const technologies = [
    // Clearing Vision Stack
    { name: 'WordPress', icon: <FaWordpress /> },
    { name: 'Custom WP Plugins', icon: <TbPlugConnected /> },
    { name: 'PHP', icon: <SiPhp /> },
    { name: 'MySQL', icon: <SiMysql /> },
    
    // DogFoster Stack
    { name: 'React + Next.js', icon: <FaReact /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'Supabase', icon: <SiSupabase /> },
    { name: 'Node.js + Express', icon: <FaNodeJs /> },
    { name: 'Figma', icon: <FaFigma /> },
    
    // ¿Cómo Se Dice? Stack
    { name: 'React Native + Expo', icon: <SiExpo /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-800 dark:text-zinc-100">
        <FaReact className="h-6 w-6 flex-none" />
        <span className="ml-3">Tech Stack</span>
      </h2>
      <div className="relative w-full mt-6">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
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
    </div>
  )
} 