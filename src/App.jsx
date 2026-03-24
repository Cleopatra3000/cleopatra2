import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AgeGate from './components/common/AgeGate/AgeGate'
import {
  getStoredAgeGateStatus,
  setStoredAgeGateStatus,
} from './components/common/AgeGate/ageGateStorage'
import Layout from './layout/Layout'
import Landing from './pages/Landing/Landing'
import CookiesPage from './pages/Legal/CookiesPage'
import LegalNoticePage from './pages/Legal/LegalNoticePage'
import PrivacyPage from './pages/Legal/PrivacyPage'

const App = () => {
  const [ageGateStatus, setAgeGateStatus] = useState(() => getStoredAgeGateStatus())

  const handleAcceptAgeGate = () => {
    setStoredAgeGateStatus('accepted')
    setAgeGateStatus('accepted')
  }

  const handleRejectAgeGate = () => {
    setStoredAgeGateStatus('denied')
    setAgeGateStatus('denied')
  }

  return (
    <BrowserRouter>
      {ageGateStatus !== 'accepted' && (
        <AgeGate
          status={ageGateStatus}
          onAccept={handleAcceptAgeGate}
          onReject={handleRejectAgeGate}
        />
      )}

      <Layout>
        <Routes>
          <Route path="/" element={ageGateStatus === 'accepted' ? <Landing /> : null} />
          <Route path="/aviso-legal" element={<LegalNoticePage />} />
          <Route path="/privacidad" element={<PrivacyPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
