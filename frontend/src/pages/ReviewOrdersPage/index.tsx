import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProgressBar from '../../components/molecules/progressBar'
import ReviewOrder from '../../components/molecules/ReviewOrder'
import MainTemplate from '../../components/templates/Main'
import { getSelectedPatientDetails } from '../../services/helperFunctions'
const FinalOrder = () => {
  const navigate = useNavigate()
  const [selectedAddress, setSelectedAddress] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [patientDetails,setPatientDetails]=useState<any>([])
  useEffect(() => {
    let address = JSON.parse(localStorage.getItem('selectedAddress') as string)
    const fullAddress = `${address.houseNumber} ${address.area} ${address.city} ${address.zipcode}`
    setSelectedAddress(fullAddress)
    let slotTime = JSON.parse(localStorage.getItem('slotTime') as string)
    const fullDate = `${slotTime.day.slice(0, 3)}, ${slotTime.month.slice(
      0,
      3
    )} ${slotTime.date}, 2022`
    setDate(fullDate)
    setTime(slotTime.time)
    let selectedPatients = JSON.parse(localStorage.getItem('selectedPatients') as string)
    setPatientDetails(getSelectedPatientDetails(selectedPatients))
  }, [])

  return (
    <MainTemplate
      nextClick={() => {
        navigate('/checkout')
      }}
      backClick={() => {
        navigate('/selectAddressPage')
      }}
      stepperComponent={
        <Box
        width="100%"
        justifyContent={'center'}
        display="flex"
      >
        <Box width="40vw">
        <ProgressBar
          values={[
            'Lab test',
            'Select appointment',
            'Add address',
            'Review order',
          ]}
          currentIndex={3}
        />
        </Box>
        </Box>
      }
      mainComponent={
        <Box width="583px">
          <ReviewOrder
            patients={patientDetails}
            address={selectedAddress}
            date={date}
            time={time}
            discount={200}
          />
        </Box>
      }
      footerTextComponent={undefined}
      buttonLabel="Continue"
    ></MainTemplate>
  )
}
export default FinalOrder
