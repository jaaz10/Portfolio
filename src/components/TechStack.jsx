'use client'

import { FaJsSquare, FaReact, FaNodeJs, FaPython, FaDatabase, FaAws, FaGitAlt, FaDocker, FaCode } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function TechStack() {
  const technologies = [
    {
      technology: 'JavaScript',
      icon: <FaJsSquare />,
      color: '#F7DF1E'
    },
    {
      technology: 'React',
      icon: <FaReact />,
      color: '#61DAFB'
    },
    {
      technology: 'Node.js',
      icon: <FaNodeJs />,
      color: '#339933'
    },
    {
      technology: 'Python',
      icon: <FaPython />,
      color: '#3776AB'
    },
    {
      technology: 'SQL',
      icon: <FaDatabase />,
      color: '#336791'
    },
    {
      technology: 'AWS',
      icon: <FaAws />,
      color: '#FF9900'
    },
    {
      technology: 'Git',
      icon: <FaGitAlt />,
      color: '#F05032'
    },
    {
      technology: 'Docker',
      icon: <FaDocker />,
      color: '#2496ED'
    }
  ]

  const PADDING = 6
  const ICON_SIZE = 24
  const MAX_POSITION = 350 - ICON_SIZE - (PADDING * 2)
  const MIN_DISTANCE = 60

  const isTooClose = (pos1, pos2) => {
    const dx = pos1[0] - pos2[0]
    const dy = pos1[1] - pos2[1]
    return Math.sqrt(dx * dx + dy * dy) < MIN_DISTANCE
  }

  const getValidPosition = (existingPositions) => {
    let attempts = 0
    let position

    do {
      position = Math.random() > 0.5 ? 
        getEdgePosition() : 
        [Math.random() * MAX_POSITION, Math.random() * MAX_POSITION]
      
      attempts++
      if (attempts > 50) break
    } while (
      existingPositions.some(existing => isTooClose(position, existing))
    )

    return position
  }

  const getEdgePosition = () => {
    const positions = [
      [0, Math.random() * MAX_POSITION],
      [MAX_POSITION, Math.random() * MAX_POSITION],
      [Math.random() * MAX_POSITION, 0],
      [Math.random() * MAX_POSITION, MAX_POSITION]
    ]
    return positions[Math.floor(Math.random() * positions.length)]
  }

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-800 dark:text-zinc-100">
        <FaCode className="h-6 w-6 flex-none" />
        <span className="ml-3">Tech Stack</span>
      </h2>
      <div className="relative aspect-square w-full max-w-[350px] mx-auto mt-6 rounded-lg">
        <div className="relative w-full h-full">
          {technologies.map((tech, index) => {
            const existingPositions = []
            const positions = Array(4).fill(null).map(() => {
              const newPos = getValidPosition(existingPositions)
              existingPositions.push(newPos)
              return newPos
            })
            
            return (
              <motion.div
                key={tech.technology}
                className="absolute text-3xl cursor-pointer group backdrop-blur-[1px] drop-shadow-lg"
                style={{ 
                  color: tech.color,
                  zIndex: Math.random() * 10
                }}
                initial={{
                  x: positions[0][0],
                  y: positions[0][1],
                }}
                animate={{
                  x: positions.map(p => p[0]),
                  y: positions.map(p => p[1]),
                  zIndex: [1, 2, 1, 2]
                }}
                transition={{
                  duration: 15 + (index * 2),
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                  zIndex: {
                    duration: 0,
                    delay: index * 2
                  }
                }}
                whileHover={{
                  scale: 1.2,
                  filter: 'brightness(1.2)',
                  zIndex: 10,
                  transition: { duration: 0.3 }
                }}
              >
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 -translate-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs whitespace-nowrap bg-white/80 dark:bg-zinc-800/80 px-2 py-1 rounded">
                  {tech.technology}
                </span>
                {tech.icon}
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
} 