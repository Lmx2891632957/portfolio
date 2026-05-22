export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <img src="/avatar.jpg" alt="Jack Lin" className="w-32 h-32 rounded-full object-cover mb-8" />
      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Jack Lin</span>
      </h1>
      <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
        电子信息工程专业，热爱 Web 开发，每天都在努力进步。
      </p>
    </section>
  )
}
