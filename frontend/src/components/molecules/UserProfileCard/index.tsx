import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import rightArrow from '../../../assets/userprofileIcons/Shape.svg'
import theme from '../../../theme'
export type UserProfileCardProps = {
  icon: any
  heading: string
  subtext: string
}
const stylings = {
  box: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '569px',
    height: '42px',
  },
  heading1: {
    fontWeight: theme.typography.body1.fontWeight,
    color: theme.palette.gammaMedium.main,
  },
  arrow:{
    paddingTop: '1.2rem'
  }
}
const UserProfileCard = (props: UserProfileCardProps) => {
  const { icon, heading, subtext } = props

  return (
    <Box sx={stylings.box}>
      <img src={icon} alt="icon" />
      <Grid
        container
        direction="column"
        margin="0px"
        paddingLeft="1.2rem"
        sx={subtext.length>0?{paddingTop:"1rem"}:{paddingTop:"0rem"}}
        alignItems="flex-start"
        columnGap="0.25rem"
      >
        <Grid item>
          <Typography variant="body" data-testid="profileHeading" sx={stylings.heading1}>
            {heading}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="overline" color={theme.palette.gammaLow.main}>
            {subtext}
          </Typography>
        </Grid>
      </Grid>
      <img src={rightArrow} alt="home" style={stylings.arrow} />
    </Box>
  )
}

export default UserProfileCard
