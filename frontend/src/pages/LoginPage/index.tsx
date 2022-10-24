import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Login from '../../components/organisms/Login'
import MobileNumber from '../../components/organisms/MobileNumber'
import OTP from '../../components/organisms/OTP'
import SignIn from '../../components/templates/SignIn'
import { useLoginPage } from './hook'
const LoginPage = () => {
  let [counter, setCounter] = useState(0)
  const navigate = useNavigate()
  useLoginPage()
  const renderSwitch = () => {
    switch (counter) {
      case 0:
        return (
          <Login
            buttonClick={() => {
              setCounter((counter) => counter + 1)
            }}
          />
        )
      case 1:
        return (
          <MobileNumber
            buttonClick={() => {
              setCounter((counter) => counter + 1)
            }}
          />
        )
      case 2:
        return (
          <OTP
            buttonClick={() => {
              navigate('/')
            }}
          />
        )
    }
  }
  return <SignIn>{renderSwitch()}</SignIn>
}

export default LoginPage
