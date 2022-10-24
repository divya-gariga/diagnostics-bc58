import React, { useEffect, useState } from 'react'

type UserLogin = {
  firstName: string
  lastName: string
  email: string
}
export const useLogin = () => {
  let [details, setDetails] = useState<UserLogin>({
    firstName: '',
    email: '',
    lastName: '',
  })
  let [enable, setEnable] = useState<boolean>(false)
  useEffect(() => {
    if (
      details?.email.length > 0 &&
      details?.firstName.length > 0 &&
      details?.lastName.length > 0 &&
      details?.email.includes('@')
    ) {
      setEnable(true)
    } else {
      setEnable(false)
    }
  }, [details])
  const onChangeDetails = (d: { [key: string]: string }) => {
    setDetails((prev) => ({ ...prev, ...d }))
  }
  return { enable, details, onChangeDetails }
}
