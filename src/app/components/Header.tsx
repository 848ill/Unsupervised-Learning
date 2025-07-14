'use client'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-cyan rounded-full flex items-center justify-center glow-cyan">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <span className="text-lg font-bold text-white">The Prompt Alchemist</span>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium border-b-2 border-cyan-400">
              Home
            </a>
            <a href="#tentang" className="text-white hover:text-cyan-300 transition-colors">
              Tentang
            </a>
            <a href="#isi-kit" className="text-white hover:text-cyan-300 transition-colors">
              Isi Kit
            </a>
            <a href="#harga" className="text-white hover:text-cyan-300 transition-colors">
              Harga
            </a>
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => document.getElementById('harga')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-cyan text-white px-6 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 glow-cyan"
          >
            Mulai Sekarang
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  )
} 