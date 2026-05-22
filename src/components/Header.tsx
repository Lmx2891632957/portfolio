export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Jack Lin
        </span>
        <ul className="flex gap-8 text-sm text-gray-400">
          <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
          <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
          <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}
