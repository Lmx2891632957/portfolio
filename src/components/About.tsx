import { skills } from '../data/skills'

export default function About() {
  return (
    <section id="about" className="min-h-screen px-6 py-24 max-w-4xl mx-auto bg-white dark:bg-[#0a0a0a]">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">About Me</h2>
      <p className="text-gray-600 dark:text-gray-400 text-lg mb-12 leading-relaxed">
        我是 Jack Lin（林萌希），我的专业是电子信息工程，我喜欢 Web 开发，每天都在努力进步。
      </p>
      <div>
        <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Skills</h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm text-gray-600 dark:text-gray-300 hover:border-purple-400/50 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
