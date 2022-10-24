import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import theme from '../../../theme'
export type Props = {
  text: string
  icon: any
}
const box = {
  width: '22.25rem',
  borderRadius:"0.5rem",
  backgroundColor:theme.palette.gammaWhite.main

}
const container = {
  padding: '0.625rem 1.25rem',
}
const IconwithText: React.FC<Props> = (props) => {
  const { text, icon } = props
  return (
    <Box sx={box}>
      <Grid container direction="row" columnGap="1.5rem" sx={container}>
        <Grid item>
          <img src={icon} alt="Image"></img>
        </Grid>
        <Grid item alignItems="center" display="flex">
          <Typography variant="caption2" color= {theme.palette.gammaMedium.main}>{text} </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default IconwithText
