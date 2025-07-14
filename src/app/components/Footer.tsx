export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-cyan rounded-full flex items-center justify-center glow-cyan">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <span className="text-2xl font-bold">
              <span className="text-white">THE PROMPT </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">ALCHEMIST</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-gray-400">
            <a href="#privacy" className="hover:text-cyan-400 transition-colors">
              Privacy Policy
            </a>
            <span className="text-gray-600">•</span>
            <a href="#terms" className="hover:text-cyan-400 transition-colors">
              Terms of Service
            </a>
            <span className="text-gray-600">•</span>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © 2025 Prompt Alchemist. All rights reserved.
          </p>
        </div>

        {/* Additional Info */}
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            &quot;The Prompt Alchemist&quot; adalah panduan komprehensif untuk menguasai seni prompt engineering. 
            Dengan template dan strategi yang terbukti, Anda dapat mengubah cara berinteraksi dengan AI 
            dan meningkatkan produktivitas secara signifikan.
          </p>
        </div>
      </div>
    </footer>
  )
} 