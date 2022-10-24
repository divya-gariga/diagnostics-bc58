import { Box, Divider, Grid, Paper, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PaymentDetails from '../../components/molecules/paymentDetails'
import ReviewOrder from '../../components/molecules/ReviewOrder'
import MainTemplate from '../../components/templates/Main'
import { CARD_HOLDER_NAME, CARD_NUMER, EXPIRY_DATE, paymentOptions, UserContext } from '../../components/utils/Constant'
import { getSelectedPatientDetails } from '../../services/helperFunctions'
import { addreports, onPayNow } from '../../services/services'
import { useCheckout } from './hook'
const CheckoutPage = () => {
  const navigate = useNavigate()
  const [selectedAddress, setSelectedAddress] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [patientDetails, setPatientDetails] = useState<any>([])
  const [userId] = useContext(UserContext);
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
    let selectedPatients = JSON.parse(
      localStorage.getItem('selectedPatients') as string
    )
    setPatientDetails(getSelectedPatientDetails(selectedPatients))
  }, [])

  return (
    <MainTemplate
      mainComponent={
        <Grid container justifyContent={'space-between'}>
          <Grid
            item
            xs={7}
            paddingX={18}
            paddingY={5}
            boxShadow={'0px 0px 26px 0px rgba(233, 232, 237, 0.5)'}
          >
            <ReviewOrder
              patients={patientDetails}
              address={selectedAddress}
              date={date}
              time={time}
              discount={200}
            />
          </Grid>
          <Grid item>
            <Divider orientation='vertical' />
          </Grid>
          <Grid item xs={4}>
            <PaymentDetails
              cardNumber={CARD_NUMER}
              cardHolder={CARD_HOLDER_NAME}
              expiryDate={EXPIRY_DATE}
              paymentOptions={paymentOptions}
            />
          </Grid>
        </Grid>
      }
      buttonLabel="Pay Now"
      nextClick={async() => {
        onPayNow(userId)
         addreports(userId)
        navigate('/orderPlacedPage')
      }}
      stepperComponent={
        <Box justifySelf={'left'} marginX={8}>
          <Typography>Checkout</Typography>
        </Box>
      }
    />
  )
}
export default CheckoutPage
