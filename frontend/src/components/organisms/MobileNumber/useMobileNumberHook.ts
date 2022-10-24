import React, { useState, useEffect } from 'react'
export const useMobileNumber = () => {
  let [phNumber, setPhNumber] = useState<string>()
  let [enable, setEnable] = useState<boolean>(false)
  useEffect(() => {
    if (phNumber?.length! > 0) {
      setEnable(true)
    } else {
      setEnable(false)
    }
  }, [phNumber])
  return {enable,phNumber,setPhNumber};
}
