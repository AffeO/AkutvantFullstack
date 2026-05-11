// src/components/HospitalCard.jsx
import { useState } from 'react'

function HospitalCard({ hospital }) {
    const [showDetails, setShowDetails] = useState(false)

  const getWaitStatusColor = (status) => {
    switch(status) {
      case 'low': return 'bg-green-50 text-green-700 border-green-200'
      case 'medium': return 'bg-orange-50 text-orange-700 border-orange-200'
      case 'high': return 'bg-red-50 text-red-700 border-red-200'
      default: return 'bg-gray-50 text-gray-700 border-gray-200'
    }
  }

  const getWaitStatusText = (status) => {
    switch(status) {
      case 'low': return 'Kort väntetid'
      case 'medium': return 'Medel väntetid'
      case 'high': return 'Mycket lång väntetid'
      default: return 'Okänd väntetid'
    }
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-5 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">
            {hospital.name}
          </h2>
          <div className="flex items-center gap-1.5 text-sm text-gray-600">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>{hospital.area}</span>
            <span className="text-gray-400">•</span>
            <span>{hospital.distance}km</span>
          </div>
        </div>
        <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
          {hospital.waitTime} min
        </div>
      </div>

      {/* Wait Status */}
      <div className={`flex items-center justify-between px-4 py-3 rounded-lg border ${getWaitStatusColor(hospital.waitStatus)}`}>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          <span className="font-medium">{getWaitStatusText(hospital.waitStatus)}</span>
        </div>
        <span className="text-xs">Uppdaterad {hospital.lastUpdated}</span>
      </div>

      {/* Phone */}
      <div className="flex items-center gap-2 text-gray-700">
        <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
        <span className="text-sm">{hospital.phone}</span>
      </div>

      {/* Departments */}
      <div className="flex flex-wrap gap-2">
        {hospital.departments.map((dept, idx) => (
          <span 
            key={idx}
            className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
          >
            {dept}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-2">
        <button 
          onClick={() => setShowDetails(!showDetails)}
          className="flex-1 bg-gray-800 hover:bg-gray-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
        >
          {showDetails ? 'Dölj detaljer' : 'Visa detaljer'}
        </button>
        <button className="p-3 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>

      {/* Expanded Details */}
      {showDetails && (
        <div className="pt-4 border-t border-gray-200 space-y-4 animate-fadeIn">
          {/* Öppettider */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Öppettider
            </h4>
            <p className="text-sm text-gray-600">Akutmottagning öppen dygnet runt, 24/7</p>
          </div>

          {/* Väntetidshistorik */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Väntetid senaste timmarna
            </h4>
            <div className="flex gap-2">
              <div className="flex-1 bg-green-50 border border-green-200 rounded p-2 text-center">
                <div className="text-xs text-gray-600">14:00</div>
                <div className="font-semibold text-green-700">20 min</div>
              </div>
              <div className="flex-1 bg-green-50 border border-green-200 rounded p-2 text-center">
                <div className="text-xs text-gray-600">15:00</div>
                <div className="font-semibold text-green-700">25 min</div>
              </div>
              <div className="flex-1 bg-green-50 border border-green-200 rounded p-2 text-center">
                <div className="text-xs text-gray-600">Nu</div>
                <div className="font-semibold text-green-700">{hospital.waitTime} min</div>
              </div>
            </div>
          </div>

          {/* Faciliteter */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Tillgängliga tjänster
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-green-600">✓</span> Röntgen
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-green-600">✓</span> Laboratorium
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-green-600">✓</span> CT
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-green-600">✓</span> Barnakut
              </div>
            </div>
          </div>

          {/* Adress */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Adress
            </h4>
            <p className="text-sm text-gray-600">Sankt Göransgatan 1, 112 81 Stockholm</p>
          </div>

          {/* Tips */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Tips:</span> Ta med legitimation och eventuell remiss. Kom ihåg att allvarliga fall prioriteras.
            </p>
          </div>
        </div>
      )}

      {/* Save Favorite */}
      <button className="w-full flex items-center justify-center gap-2 py-2 text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors border border-gray-200 rounded-lg hover:bg-gray-50">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
        Spara som favorit
      </button>
    </div>
  )
}
export default HospitalCard