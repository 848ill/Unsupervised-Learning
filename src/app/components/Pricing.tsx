'use client'

import { useState, useEffect } from 'react'

export default function Pricing() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 32,
    seconds: 30
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev
        
        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        }
        
        return { hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (time: number) => time.toString().padStart(2, '0')

  const handlePurchase = () => {
    // Simple alert for demo - in production you'd integrate with payment gateway
    const confirmed = window.confirm(
      'Anda akan diarahkan ke halaman pembayaran. Lanjutkan?'
    )
    
    if (confirmed) {
      // Here you would typically redirect to payment processor
      // For demo, we'll show a success message
      alert('Terima kasih! Ini adalah demo. Dalam versi production, Anda akan diarahkan ke payment gateway.')
    }
  }

  return (
    <section id="harga" className="py-20 px-4 bg-slate-800/50">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
            Penawaran Terbatas
          </span>
        </h2>

        {/* Pricing Card */}
        <div className="relative">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-12 border-2 border-cyan-400/30 glow-cyan-strong max-w-lg mx-auto">
            {/* Normal Price */}
            <div className="mb-6">
              <p className="text-gray-400 text-lg mb-2">Harga Normal:</p>
              <p className="text-3xl font-bold text-gray-500 line-through">Rp299.000</p>
            </div>

            {/* Special Price */}
            <div className="mb-8">
              <p className="text-cyan-400 text-xl mb-2">Harga Hari Ini</p>
              <div className="flex items-end justify-center">
                <span className="text-6xl md:text-7xl font-bold text-white">Rp 99</span>
                <span className="text-2xl text-gray-300 mb-2">.000</span>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="bg-red-600 text-white px-6 py-3 rounded-full mb-8">
              <p className="text-sm font-medium">
                Diskon 67% - Berakhir dalam {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}!
              </p>
            </div>

            {/* CTA Button */}
            <button 
              onClick={handlePurchase}
              className="w-full bg-gradient-cyan text-white py-4 px-8 rounded-full text-xl font-bold hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 glow-cyan transform hover:scale-105"
            >
              Dapatkan Akses Sekarang
            </button>

            {/* Money Back Guarantee */}
            <div className="mt-6 text-sm text-gray-400">
              <p>💰 Jaminan uang kembali 30 hari</p>
              <p>⚡ Akses langsung setelah pembayaran</p>
              <p>🔄 Update gratis selamanya</p>
            </div>
          </div>

          {/* Floating Badge */}
          <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold transform rotate-12">
            67% OFF
          </div>
        </div>

        {/* Security Badges */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-gray-400">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.8 15.4,17.3 14.8,17.3H9.2C8.6,17.3 8,16.8 8,16.2V12.7C8,12.1 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z"/>
            </svg>
            <span>Pembayaran Aman</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
            </svg>
            <span>Instant Download</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"/>
            </svg>
            <span>Garansi 30 Hari</span>
          </div>
        </div>
      </div>
    </section>
  )
} 