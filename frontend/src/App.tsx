import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReportsPage from './pages/ReportsPage'
import HomePage from './pages/homePage'
import AddAddressPage from './pages/AddAddressPage'
import SelectAddressPage from './pages/SelectAddressPage'
import CovidRTPCR from './pages/CovidRTPCR'
import AddPatientDetailsPage from './pages/AddPatientDetailsPage'
import SelectLabPage from './pages/SelectLab'
import SelectAppointementPage from './pages/SelectAppointementPage'
import FinalOrder from './pages/ReviewOrdersPage'
import OrderPlaced from './pages/OrderPlaced'
import CheckoutPage from './pages/Checkout'
import LoginPage from './pages/LoginPage'
import { UserContext } from './components/utils/Constant'
import TrackOrderPage from './pages/TrackOrderPage'
import AppointmentsPage from './pages/AppointmentsPage'
const App = () => {
  let [userID, setUserID] = useState<string>('')
  return (
    <UserContext.Provider value={[userID, setUserID]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<LoginPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/myAppointments" element={<AppointmentsPage />} />
          <Route path="/covid-test" element={<CovidRTPCR />} />
          <Route
            path="/AddPatientDetailsPage"
            element={<AddPatientDetailsPage />}
          />
          <Route path="/selectLabPage" element={<SelectLabPage />} />
          <Route
            path="/appointementPage"
            element={<SelectAppointementPage />}
          />
          <Route path="/AddAddressPage" element={<AddAddressPage />} />
          <Route path="/selectAddressPage" element={<SelectAddressPage />} />
          <Route path="/reviewOrderPage" element={<FinalOrder />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/orderPlacedPage" element={<OrderPlaced />} />
          <Route path="/trackOrderPage" element={<TrackOrderPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
