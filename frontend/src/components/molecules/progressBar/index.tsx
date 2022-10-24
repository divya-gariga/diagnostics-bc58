import {  Step, Stepper, Typography } from '@mui/material'
import React from 'react'
import theme from '../../../theme'
type ProgressBarProps = {
  values: string[]
  currentIndex: number
}
const ProgressBar = ({ currentIndex, values }: ProgressBarProps) => {
  return (
    <Stepper>
      {values.map((value, index) => {
        return (
          <Step key={value}>
            <Typography
              variant={index == currentIndex ? 'caption1' : 'captionRegular'}
              color={
                index == currentIndex
                  ? theme.palette.gammaHigh.main
                  : theme.palette.gammaLow.main
              }
            >
              {value}
            </Typography>
          </Step>
        )
      })}
    </Stepper>
  )
}

export default ProgressBar
