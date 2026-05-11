// src/App.jsx
import { useState } from 'react'
import HomePage from './components/HomePage'
import HospitalList from './components/HospitalList'

function App() {
  const [view, setView] = useState('home')

  return (
    <>
      {view === 'home' && (
        <HomePage onNavigateToList={() => setView('list')} />
      )}
      {view === 'list' && (
        <HospitalList onNavigateBack={() => setView('home')} />
      )}
    </>
  )
}

export default App