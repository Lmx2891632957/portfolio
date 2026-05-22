import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-gray-200 dark:border-white/10">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Jack Lin
        </span>
        <div className="flex items-center gap-4">
          <ul className="flex gap-8 text-sm text-gray-500 dark:text-gray-400">
            <li><a href="#hero" className="hover:text-gray-900 dark:hover:text-white transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-gray-900 dark:hover:text-white transition-colors">About</a></li>
            <li><a href="#projects" className="hover:text-gray-900 dark:hover:text-white transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a></li>
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}