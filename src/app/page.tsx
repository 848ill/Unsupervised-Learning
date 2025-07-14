import Header from './components/Header'
import Hero from './components/Hero'
import Comparison from './components/Comparison'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Comparison />
      <Features />
      <Pricing />
      <Footer />
    </div>
  )
}
