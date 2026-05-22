export default function Contact() {
  return (
    <section id="contact" className="min-h-screen px-6 py-24 max-w-2xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
      <p className="text-gray-400 text-lg mb-12">
        I'm always open to new opportunities and collaborations. Feel free to reach out!
      </p>
      <div className="flex flex-col items-center gap-4">
        <a
          href="mailto:2891632957@qq.com"
          className="text-gray-300 hover:text-white transition-colors"
        >
          2891632957@qq.com
        </a>
        <div className="flex gap-6 mt-4">
          <a
            href="https://github.com/Lmx2891632957"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
