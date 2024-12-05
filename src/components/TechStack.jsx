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
    },
    {
      technology: 'React',
      category: 'Frontend Framework',
      icon: <FaReact />,
      proficiency: 'Advanced',
      years: '2+ years',
    },
    {
      technology: 'Node.js',
      category: 'Backend Runtime',
      icon: <FaNodeJs />,
      proficiency: 'Intermediate',
      years: '2+ years',
    },
    {
      technology: 'Python',
      category: 'Programming Language',
      icon: <FaPython />,
      proficiency: 'Intermediate',
      years: '2+ years',
    },
    {
      technology: 'SQL',
      category: 'Database',
      icon: <FaDatabase />,
      proficiency: 'Advanced',
      years: '3+ years',
    },
    {
      technology: 'AWS',
      category: 'Cloud Services',
      icon: <FaAws />,
      proficiency: 'Intermediate',
      years: '1+ year',
    },
    {
      technology: 'Git',
      category: 'Version Control',
      icon: <FaGitAlt />,
      proficiency: 'Advanced',
      years: '3+ years',
    },
    {
      technology: 'Docker',
      category: 'Containerization',
      icon: <FaDocker />,
      proficiency: 'Intermediate',
      years: '1+ year',
    }
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <FaBriefcase className="h-6 w-6 flex-none" />
        <span className="ml-3">Tech Stack</span>
      </h2>
      <div className="relative h-[400px] w-full overflow-hidden rounded-lg mt-6">
        <div className="relative w-full h-full">
          {technologies.map((tech) => (
            <motion.div
              key={tech.technology}
              className="absolute text-4xl text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 cursor-pointer"
              initial={{
                x: Math.random() * 400,
                y: Math.random() * 400,
              }}
              animate={{
                x: [
                  Math.random() * 400,
                  Math.random() * 400,
                  Math.random() * 400,
                  Math.random() * 400,
                ],
                y: [
                  Math.random() * 400,
                  Math.random() * 400,
                  Math.random() * 400,
                  Math.random() * 400,
                ],
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              whileHover={{
                scale: 1.2,
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