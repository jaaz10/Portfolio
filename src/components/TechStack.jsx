'use client'

import { FaJsSquare, FaReact, FaNodeJs, FaPython, FaDatabase, FaAws, FaGitAlt, FaDocker, FaBriefcase } from 'react-icons/fa'
import { motion } from 'framer-motion'

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

  const getRandomPosition = () => {
    const min = 20
    const max = 380
    return min + Math.random() * (max - min)
  }

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <FaBriefcase className="h-6 w-6 flex-none" />
        <span className="ml-3">Tech Stack</span>
      </h2>
      <div className="relative aspect-square w-full overflow-hidden rounded-lg mt-6">
        <div className="relative w-full h-full">
          {technologies.map((tech) => (
            <motion.div
              key={tech.technology}
              className="absolute text-4xl cursor-pointer group"
              style={{ color: tech.color }}
              initial={{
                x: getRandomPosition(),
                y: getRandomPosition(),
              }}
              animate={{
                x: [
                  getRandomPosition(),
                  getRandomPosition(),
                  getRandomPosition(),
                  getRandomPosition(),
                ],
                y: [
                  getRandomPosition(),
                  getRandomPosition(),
                  getRandomPosition(),
                  getRandomPosition(),
                ],
              }}
              transition={{
                duration: 15 + Math.random() * 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
              whileHover={{
                scale: 1.2,
                filter: 'brightness(1.2)',
                transition: { duration: 0.2 }
              }}
            >
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 -translate-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm whitespace-nowrap">
                {tech.technology}
              </span>
              {tech.icon}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 