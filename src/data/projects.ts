export interface Project {
  name: string
  description: string
  techStack: string[]
  link?: string
  image?: string
}

export const projects: Project[] = [
  {
    name: 'Project One',
    description: 'A full-stack web application built with React and Node.js.',
    techStack: ['React', 'Node.js', 'PostgreSQL'],
    link: 'https://github.com',
  },
  {
    name: 'Project Two',
    description: 'A mobile-first dashboard with real-time data visualization.',
    techStack: ['TypeScript', 'D3.js', 'WebSocket'],
    link: 'https://github.com',
  },
  {
    name: 'Project Three',
    description: 'A CLI tool for automating development workflows.',
    techStack: ['Rust', 'CLI', 'GitHub Actions'],
    link: 'https://github.com',
  },
]
