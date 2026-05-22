import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-24 max-w-6xl mx-auto bg-white dark:bg-[#0a0a0a]">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 overflow-hidden hover:border-purple-400/30 transition-all hover:-translate-y-1"
          >
            <div className="h-48 bg-gradient-to-br from-purple-400/30 to-pink-400/30 dark:from-purple-900/50 dark:to-pink-900/50" />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{project.name}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-500">
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-purple-500 dark:text-purple-400 hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
                >
                  View Project →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
