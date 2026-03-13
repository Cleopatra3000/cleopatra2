import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Landing from './pages/Landing/Landing'
import AgeGate from './components/common/AgeGate/AgeGate'
import {
  getStoredAgeGateStatus,
  setStoredAgeGateStatus,
} from './components/common/AgeGate/ageGateStorage'

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
    <>
      {ageGateStatus !== 'accepted' && (
        <AgeGate
          status={ageGateStatus}
          onAccept={handleAcceptAgeGate}
          onReject={handleRejectAgeGate}
        />
      )}

      {ageGateStatus === 'accepted' && (
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Landing />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      )}
    </>
  )
}

export default App
