'use client'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Logo Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-gradient-cyan rounded-full flex items-center justify-center glow-cyan-strong">
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-white">THE PROMPT</span><br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
            ALCHEMIST
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Rahasia Mengubah Kata-Kata Biasa Menjadi <span className="text-cyan-400 font-semibold">Emas Digital</span><br />
          yang Menghasilkan Jutaan Rupiah
        </p>

        {/* CTA Button */}
        <button 
          onClick={() => document.getElementById('harga')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-gradient-cyan text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 glow-cyan transform hover:scale-105"
        >
          Dapatkan Sekarang
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
} 