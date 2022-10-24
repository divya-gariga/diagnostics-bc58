import { Grid, Typography } from '@mui/material'
import React from 'react'
import theme from '../../../theme'
import SHARE from '../../../assets/icons/share.svg'
import Download from '../../../assets/icons/download.svg'
export interface AppointmentCardProps {
  testName: string
  labName: string
  patientName: string
  dateTime: string
  icon: string
}
const AppointmentCard = ({
  dateTime,
  patientName,
  labName,
  testName,
  icon,
}: AppointmentCardProps) => {
  return (
    <Grid
      padding={2}
      border={`1px solid ${theme.palette.grey['50']}`}
      container
      boxShadow="0px 0px 12px 0px rgba(233, 232, 237, 0.53)"
      width="583px"
    >
      <Grid item margin={3}>
        <img src={icon} />
      </Grid>
      <Grid item xs>
        <Grid container spacing={1} direction="column">
          <Grid item>
            <Typography
              variant="caption2"
              color={theme.palette.gammaHigh.main}
            >{`${testName} - `}</Typography>
            <Typography
              variant="captionRegular"
              color={theme.palette.gammaHigh.main}
            >
              {labName}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="captionRegular"
              color={theme.palette.gammaMedium.main}
            >
              {patientName}
            </Typography>
          </Grid>
          <Grid item marginTop={3}>
            <Typography
              variant="captionRegular"
              color={theme.palette.gammaMedium.main}
            >
              {dateTime}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container height="100%" alignItems="center" direction="row">
          <Grid item marginX={2}>
            <img src={SHARE} />
          </Grid>
          <Grid item>
            <img src={Download} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default AppointmentCard
