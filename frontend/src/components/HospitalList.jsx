// src/components/HospitalList.jsx
import { useState, useEffect } from 'react'
import HospitalCard from './HospitalCard'
import apiService from '../services/api'

function HospitalList({ onNavigateBack }) {

  const [searchQuery, setSearchQuery] = useState('')
  const [hospitals, setHospitals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Hämta sjukhus när komponenten laddas
  useEffect(() => {
    fetchHospitals()
  }, [])

  const fetchHospitals = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await apiService.getHospitals()
      setHospitals(data)
    } catch (err) {
      setError('Kunde inte hämta sjukhus. Kontrollera att API:et körs.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  // Filtrera sjukhus baserat på sökning
  const filteredHospitals = hospitals.filter(hospital =>
    hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    hospital.area.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 bg-white z-10">
        <div className="max-w-md mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <button 
              onClick={onNavigateBack}
              className="text-gray-600 hover:text-gray-900"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Akutmottagningar</h1>
              <p className="text-xs text-gray-500">Stockholm</p>
            </div>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="max-w-md mx-auto px-6 pt-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Sök sjukhus eller område..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Filters Section */}
      <div className="max-w-md mx-auto px-6 py-6 space-y-4 border-b border-gray-200">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Akutmottagningarnas väntetider
          </h2>
          <p className="text-sm text-gray-600">
            Hitta närmaste akutmottagning med kortast väntetid. Uppdateras i realtid.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filter & Sortering
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Visa karta
          </button>
        </div>

        {/* Filter Options */}
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">
              Sortera efter
            </label>
            <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Avstånd</option>
              <option>Väntetid</option>
              <option>Namn</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">
              Max avstånd (km)
            </label>
            <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Alla</option>
              <option>5 km</option>
              <option>10 km</option>
              <option>20 km</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">
              Max väntetid
            </label>
            <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Alla</option>
              <option>30 min</option>
              <option>60 min</option>
              <option>120 min</option>
            </select>
          </div>
        </div>
      </div>

            {/* Hospital List */}
      <div className="max-w-md mx-auto px-6 py-6 space-y-4">
        {loading ? (
          // Loading state
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-4">Laddar sjukhus...</p>
          </div>
        ) : error ? (
          // Error state
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-red-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-red-600 font-medium mb-2">{error}</p>
            <button 
              onClick={fetchHospitals}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Försök igen
            </button>
          </div>
        ) : filteredHospitals.length > 0 ? (
          // Hospital cards
          filteredHospitals.map((hospital) => (
            <HospitalCard key={hospital.id} hospital={hospital} />
          ))
        ) : (
          // No results
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-gray-600 font-medium">Inga sjukhus hittades</p>
            <p className="text-sm text-gray-500 mt-1">Prova att söka på något annat</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-8">
        <div className="max-w-md mx-auto px-6 py-8 text-center space-y-2">
          <p className="text-sm text-gray-600">
            Data uppdaterades senast: idag 14:30
          </p>
          <p className="text-sm text-gray-600">
            Ring alltid <span className="font-semibold text-red-600">112</span> vid akuta livhotande situationer
          </p>
        </div>
      </footer>
    </div>
  )
}

export default HospitalList