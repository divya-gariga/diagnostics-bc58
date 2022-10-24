import { useEffect, useState } from 'react'
import {
  getPatientLabDetails,
  getSlotByPatientID,
} from '../../services/services'

export const useCheckout = () => {
  let [details, setDetails] = useState<any[]>([])
  let [slots, setSlots] = useState<any>([])
  useEffect(() => {
    getPatientLabDetails([10], 1).then((value) => {
      console.log(value)
      setDetails(value)
    })
  }, [])
  useEffect(() => {
    getSlotByPatientID(10).then((value) => {
      console.log(value)
      setSlots(value)
    })
  }, [details])
  return { details, slots }
}
