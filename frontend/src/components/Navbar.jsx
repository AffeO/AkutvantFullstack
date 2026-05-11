// src/components/Navbar.jsx
import { useState } from 'react'

function Navbar({ currentView, onNavigate }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionClass) => {
    const element = document.querySelector(`.${sectionClass}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
          >
            AKUTVÄNT
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => onNavigate('home')}
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              Hem
            </button>
            <button 
              onClick={() => onNavigate('list')}
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              Akutmottagningar
            </button>
            <button 
              onClick={() => scrollToSection('features-section')}
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              Funktioner
            </button>
            <button 
              onClick={() => scrollToSection('about-section')}
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              Om oss
            </button>
            <button 
              onClick={() => scrollToSection('cta-section')}
              className="px-6 py-2 bg-gray-800 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors"
            >
              Boka demo
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-600 hover:text-gray-900"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3 border-t border-gray-200 pt-4">
            <button 
              onClick={() => {
                onNavigate('home')
                setIsMobileMenuOpen(false)
              }}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium"
            >
              Hem
            </button>
            <button 
              onClick={() => {
                onNavigate('list')
                setIsMobileMenuOpen(false)
              }}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium"
            >
              Akutmottagningar
            </button>
            <button 
              onClick={() => scrollToSection('features-section')}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium"
            >
              Funktioner
            </button>
            <button 
              onClick={() => scrollToSection('about-section')}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium"
            >
              Om oss
            </button>
            <button 
              onClick={() => {
                scrollToSection('cta-section')
                setIsMobileMenuOpen(false)
              }}
              className="block w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
            >
              Boka demo
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Navbar