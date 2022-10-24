import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import theme from '../../../theme'
import { labList1, labList2 } from '../../utils/Constant'
import IconwithText from '../IconwithText'
const box = {
  width: '100%',
  backgroundColor: theme.palette.primary["800"],
}
const WhyChooseUs = () => {
  return (
    <Box sx={box}>
      <Grid container direction="column" rowGap="1.5rem" px="5.625rem" py="5rem">
        <Grid item>
          <Typography color={theme.palette.gammaWhite.main} variant="h1">Why Choose Us</Typography>
        </Grid>
        <Grid item>
          <Grid container direction="row" columnGap="2.5rem">
            {labList1.map((item: any, index: any) => {
              return (
                <Grid item>
                  <IconwithText icon={item.icon} text={item.text} />
                </Grid>
              )
            })}
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row" columnGap="2.5rem">
            {labList2.map((item: any, index: any) => {
              return (
                <Grid item>
                  <IconwithText icon={item.icon} text={item.text} />
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default WhyChooseUs
