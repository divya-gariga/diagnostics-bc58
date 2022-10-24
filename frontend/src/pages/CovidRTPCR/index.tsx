import { Box, styled } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProgressBar from '../../components/molecules/progressBar'
import TestInfo from '../../components/molecules/TestInfo'
import MainTemplate from '../../components/templates/Main'

const CovidRTPCR = () => {
  const navigate = useNavigate()
  return (
    <MainTemplate
      nextClick={() => {
        navigate('/AddPatientDetailsPage')
      }}
      backClick={() => {
        navigate('/')
      }}
      stepperComponent={
        <Box
          width="100%"
          justifyContent={'center'}
          display="flex"
        >
          <Box width="15vw" marginLeft={-10}>
            <ProgressBar values={['Home', 'Covid RTPCR']} currentIndex={1} />
          </Box>
        </Box>
      }
      mainComponent={
        <Box width="583px" height="560px">
          <TestInfo />
        </Box>
      }
      footerTextComponent={undefined}
      buttonLabel="Add Patient"
    ></MainTemplate>
  )
}
export default CovidRTPCR
