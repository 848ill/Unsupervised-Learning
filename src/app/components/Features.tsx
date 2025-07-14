export default function Features() {
  return (
    <section id="isi-kit" className="py-20 px-4 bg-slate-900">
      <div className="container mx-auto max-w-6xl">
        {/* Product Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Product Image */}
          <div className="relative">
            <div className="relative">
              <div className="w-80 h-96 mx-auto bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-3xl shadow-2xl transform rotate-3 glow-cyan-strong">
                <div className="absolute inset-8 bg-slate-800 rounded-2xl flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-cyan rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white text-center">
                    THE PROMPT<br />ALCHEMIST
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              The Prompt Alchemist<br />
              <span className="text-cyan-400">bukan sekedar e-book biasa</span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Formula Rahasia Prompt</h3>
                  <p className="text-gray-300">Template yang sudah terbukti menghasilkan output AI berkualitas tinggi</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Case Study Real</h3>
                  <p className="text-gray-300">Contoh nyata bagaimana prompt menghasilkan jutaan rupiah</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Strategi Advanced</h3>
                  <p className="text-gray-300">Teknik-teknik yang tidak diajarkan di tempat lain</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
              Isi Brankas Digitalmu:
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Senilai lebih dari Rp 500.000 - Kamu dapatkan semuanya hari ini
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-cyan rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <div>
                                 <h3 className="text-xl font-bold text-white mb-2">E-book &quot;The Prompt Alchemist&quot;</h3>
                <p className="text-gray-300 mb-4">120+ halaman panduan lengkap</p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-cyan rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">500+ Template Prompt Siap Pakai</h3>
                <p className="text-gray-300 mb-4">Untuk berbagai industri & kebutuhan</p>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-cyan rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Cheat Sheet Praktis</h3>
                <p className="text-gray-300 mb-4">Panduan cepat untuk referensi harian</p>
              </div>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-cyan rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Bonus Case Studies</h3>
                <p className="text-gray-300 mb-4">10+ contoh implementasi nyata</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 