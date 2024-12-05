'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog } from '@headlessui/react'

// README content for each project
const projectReadme = {
  'Clearing Vision': {
    overview: "An optician's professional website built with WordPress, featuring online appointment scheduling and frame catalog browsing.",
    features: [
      "Online appointment scheduling system",
      "Interactive frame catalog with filtering options",
      "Insurance verification portal",
      "Contact lens reordering system"
    ],
    installation: "WordPress installation with custom theme and plugins. Requires PHP 7.4+ and MySQL 5.7+",
    screenshots: [
      "Homepage showcase",
      "Appointment booking interface",
      "Frame catalog browser",
      "Patient portal"
    ]
  },
  'DogFoster': {
    overview: "A full-stack web application connecting foster families with dogs in need, featuring real-time updates and transport coordination.",
    features: [
      "Real-time foster home availability tracking",
      "Transport route optimization",
      "Foster application processing",
      "Medical record tracking",
      "Automated matching system"
    ],
    installation: "npm install && npm run dev",
    screenshots: [
      "Dashboard view",
      "Foster application form",
      "Transport coordination map",
      "Dog profiles page"
    ]
  },
  '¿Cómo Se Dice?': {
    overview: "A mobile-first Spanish learning application that makes language learning fun and interactive.",
    features: [
      "Daily vocabulary challenges",
      "Speech recognition for pronunciation practice",
      "Progress tracking and achievements",
      "Social learning features",
      "Offline mode support"
    ],
    installation: "expo install && expo start",
    screenshots: [
      "Learning interface",
      "Practice sessions",
      "Achievement board",
      "Social leaderboard"
    ]
  }
}

export function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleMoreInfo = (e) => {
    e.preventDefault()
    setIsOpen(true)
  }

  const readme = projectReadme[project.name]

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-x-4">
        <Image src={project.logo} alt="" className="h-10 w-10" unoptimized />
        <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
          {project.name}
        </h2>
      </div>

      <div className="relative mt-4 w-full h-72 rounded-lg overflow-hidden">
        <Image
          src={project.screenshot}
          alt={`Screenshot of ${project.name}`}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized
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
          onClick={handleMoreInfo}
        >
          More Info →
        </a>
      </div>

      {/* Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen p-4">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className="relative bg-white dark:bg-zinc-800 rounded-lg w-full max-w-3xl mx-auto p-8">
            <Dialog.Title className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
              {project.name}
            </Dialog.Title>
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">Project Overview</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{readme.overview}</p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">Problem & Solution</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                This project addresses several key challenges in the {project.name === 'Clearing Vision' ? 'healthcare' : 
                project.name === 'DogFoster' ? 'animal welfare' : 'education'} sector. Through innovative technology and 
                user-centered design, we&apos;ve created a solution that makes a real impact.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">Key Features</h3>
              <ul className="mt-2 space-y-2 list-disc list-inside text-sm text-zinc-600 dark:text-zinc-400">
                {readme.features.map((feature, index) => (
                  <li key={index} className="leading-relaxed">{feature}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">Technical Implementation</h3>
              <div className="mt-2 space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Tech Stack:</h4>
                  <div className="mt-1 flex flex-wrap gap-2">
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
                <div>
                  <h4 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Development Approach:</h4>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    Built with a focus on scalability and maintainability. Implemented using modern development practices 
                    including CI/CD, automated testing, and comprehensive documentation.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">Project Screenshots</h3>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {readme.screenshots.map((screenshot, index) => (
                  <div key={index} className="relative h-48 bg-zinc-100 dark:bg-zinc-900 rounded-lg overflow-hidden">
                    <Image
                      src={project.screenshot}
                      alt={screenshot}
                      className="object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2">
                      <p className="text-white text-sm">{screenshot}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">Future Enhancements</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Planned updates include enhanced user analytics, additional integration options, and expanded feature set 
                based on user feedback and market demands.
              </p>
            </div>

            <button
              className="mt-8 text-sm text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300"
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