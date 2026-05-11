// src/components/HomePage.jsx
import { useState } from 'react'
import BookingModal from './BookingModal'
import ContactModal from './ContactModal'
import Navbar from './Navbar'


function HomePage({ onNavigateToList }) {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  return (
    <div className="min-h-screen bg-white">
      {/* Header
      <header className="border-b border-gray-200">
        <div className="px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">AKUTVÄNT</h1>
          <button className="text-gray-600 hover:text-gray-900 text-sm font-medium">
            Om oss
          </button>
        </div>
      </header> */}
      
      <Navbar currentView="home" onNavigate={(view) => view === 'list' && onNavigateToList()} />


      {/* Hero Section */}
      <div className="max-w-md mx-auto px-6 py-16">
        <div className="flex items-center gap-12">
          {/* Title - Left Side */}
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 leading-tight">
              Realtidsinformation om väntetider
            </h2>
            <p className="text-gray-600 text-base">
              Se aktuella väntetider på akutmottagningar i Stockholm
            </p>
          </div>

          {/* Logo Circle - Right Side */}
          <div className="flex-shrink-0">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <svg className="w-12 h-12 mx-auto text-blue-600 mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 2v8h8v2h-8v8h-2v-8H3v-2h8V2h2z"/>
                </svg>
                <div className="space-y-0.5">
                  <div className="text-base font-bold text-gray-900">AKUTVÄNT</div>
                  <div className="text-xs text-gray-600 tracking-wide">VÅRD I REALTID</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA and Info - Full width below */}
        <div className="mt-8 space-y-4">
          {/* CTA Button */}
          <button 
            onClick={onNavigateToList}
            className="w-full bg-gray-800 hover:bg-gray-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors shadow-sm"
          >
            Se akutmottagningar
          </button>

          {/* Info Banner */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
            ⓘ Detta är en pilot-version med simulerad data
          </div>
        </div>
      </div>

      <div className="features-section max-w-4xl mx-auto px-6 py-16">

          {/* Features Section */}
          <div className="max-w-4xl mx-auto px-6 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Varför Akutvänt?
              </h2>
              <p className="text-gray-600 text-lg">
                Modern teknik för bättre vårdflöden
              </p>
            </div>


            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Realtidsdata</h3>
                <p className="text-gray-600">
                  Uppdaterad information varje minut för korrekt väntetid
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Minskar belastning</h3>
                <p className="text-gray-600">
                  Jämnare fördelning mellan akutmottagningar
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Högre nöjdhet</h3>
                <p className="text-gray-600">
                  Patienter uppskattar transparens och information
                </p>
              </div>
            </div>
          </div>

      </div>    

      {/* Stats Section */}
      <div className="bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Akutmottagningar</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">~2 min</div>
              <div className="text-blue-100">Uppdateringsintervall</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Tillgänglig dygnet runt</div>
            </div>
          </div>
        </div>
      </div>

      <div className="cta-section max-w-2xl mx-auto px-6 py-16 text-center">

          {/* CTA Section */}
          <div className="max-w-2xl mx-auto px-6 py-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Är ni en vårdgivare?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Boka en demo och se hur Akutvänt kan optimera era vårdflöden
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
              onClick={() => setIsBookingModalOpen(true)}
              className="px-8 py-4 bg-gray-800 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors shadow-lg">
                Boka demo
              </button>
              <button 
              onClick={() => setIsContactModalOpen(true)}
              className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-lg border-2 border-gray-300 transition-colors">
                Kontakta oss
              </button>
            </div>
          </div>
      </div>  

      {/* Testimonial Section */}
      <div className="bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-gray-700 text-lg italic mb-4">
                  "Transparens kring väntetider har gjort stor skillnad för både patienter och personal. 
                  Vi ser tydligt hur patienterna väljer mindre belastade tider."
                </p>
                <div>
                  <div className="font-semibold text-gray-900">Dr. Anna Bergström</div>
                  <div className="text-sm text-gray-600">Verksamhetschef, Akutmottagningen</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-section bg-[#83cdd2] border-t border-gray-200">

          {/* About Section */}
          <div className="bg-[#83cdd2] border-t border-gray-200">
            <div className="max-w-2xl mx-auto px-6 py-16 space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 text-center">Om Akutvänt</h3>
              <div className="space-y-4 text-gray-800">
                <p className="leading-relaxed">
                  Akutvänt visar realtidsinformation om väntetider på akutmottagningar. 
                  Genom transparent information kan patienter välja mindre belastade akutmottagningar, 
                  vilket minskar stress och optimerar vårdflöden.
                </p>
                <p className="leading-relaxed">
                  Forskning visar högre patienttillfredsställelse med vänteidsinformation. 
                  Vi samarbetar med vårdgivare för att göra akutvården mer tillgänglig och effektiv.
                </p>
              </div>
            </div>
          </div>
      </div>
   
          {/* Email Signup */}
          <div className="pt-6">
            <h4 className="font-semibold text-gray-900 mb-3 text-center">
              Få uppdateringar om lanseringen
            </h4>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="din@mejl.se"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              />
              <button className="px-6 py-3 bg-gray-800 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors whitespace-nowrap shadow-md">
                Anmäl intresse
              </button>
            </div>
          </div>

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="max-w-md mx-auto px-6 py-8 text-center space-y-2">
          <p className="text-sm text-gray-600">
            Ring alltid <span className="font-semibold text-red-600">112</span> vid akuta livhotande situationer
          </p>
          <p className="text-xs text-gray-500">
            För vårdrådgivning, ring 1177
          </p>
        </div>
      </footer>

      {/* Modals */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
      
    </div>
  )
}

export default HomePage