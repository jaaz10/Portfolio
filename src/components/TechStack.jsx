'use client'

import { FaJsSquare, FaReact, FaNodeJs, FaPython, FaDatabase, FaAws, FaGitAlt, FaDocker, FaBriefcase } from 'react-icons/fa'
import { motion } from 'framer-motion'

export function TechStack() {
  const technologies = [
    {
      technology: 'JavaScript',
      category: 'Programming Language',
      icon: <FaJsSquare />,
      proficiency: 'Advanced',
      years: '3+ years',
      color: '#F7DF1E'
    },
    {
      technology: 'React',
      category: 'Frontend Framework',
      icon: <FaReact />,
      proficiency: 'Advanced',
      years: '2+ years',
      color: '#61DAFB'
    },
    {
      technology: 'Node.js',
      category: 'Backend Runtime',
      icon: <FaNodeJs />,
      proficiency: 'Intermediate',
      years: '2+ years',
      color: '#339933'
    },
    {
      technology: 'Python',
      category: 'Programming Language',
      icon: <FaPython />,
      proficiency: 'Intermediate',
      years: '2+ years',
      color: '#3776AB'
    },
    {
      technology: 'SQL',
      category: 'Database',
      icon: <FaDatabase />,
      proficiency: 'Advanced',
      years: '3+ years',
      color: '#336791'
    },
    {
      technology: 'AWS',
      category: 'Cloud Services',
      icon: <FaAws />,
      proficiency: 'Intermediate',
      years: '1+ year',
      color: '#FF9900'
    },
    {
      technology: 'Git',
      category: 'Version Control',
      icon: <FaGitAlt />,
      proficiency: 'Advanced',
      years: '3+ years',
      color: '#F05032'
    },
    {
      technology: 'Docker',
      category: 'Containerization',
      icon: <FaDocker />,
      proficiency: 'Intermediate',
      years: '1+ year',
      color: '#2496ED'
    }
  ]

  const getRandomPosition = () => {
    const min = 50
    const max = 300
    return min + Math.random() * (max - min * 2)
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
              className="absolute text-4xl cursor-pointer"
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
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
              whileHover={{
                scale: 1.2,
                filter: 'brightness(1.2)',
                transition: { duration: 0.2 }
              }}
              title={`${tech.technology} - ${tech.proficiency} (${tech.years})`}
            >
              {tech.icon}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 