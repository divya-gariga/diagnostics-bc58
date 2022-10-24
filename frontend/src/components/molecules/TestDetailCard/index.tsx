import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import theme from '../../../theme'
const stylings = {
  box: {
    width: '23.875rem',
    height: '11.813rem',
    border: '1px solid #F8F8FA',
    boxShadow: '0px 0px 12px rgba(233, 232, 237, 0.53)',
    borderRadius: '12px',
  },
  innerBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  container: {
    columnGap: '0.875rem',
    padding: '0.75rem',
  },
  text1: {
    fontWeight: theme.typography.subtitle1.fontWeight,
    color: theme.palette.gammaHigh.main,
  },
  text2: {
    color: theme.palette.gammaMedium.main,
    paddingTop: '0.5rem',
    fontWeight:"400"
  },
  text3: {
    color: theme.palette.gammaLow.main,
    paddingTop: '0.5rem',
  },
  text5: {
    paddingTop: '3.063rem',
    textDecoration: 'underline',
    fontWeight: theme.typography.subtitle1.fontWeight,
    color: theme.palette.gammaLow.main,
  },
}
export type Props = {
  text: string
  iconIllustation: any
}
const TestDetailCard: React.FC<Props> = (props) => {
  const { text, iconIllustation } = props
  return (
    <Box sx={stylings.box}>
      <Grid container sx={stylings.container}>
        <Grid item data-testid="illustrationImage">
          <img src={iconIllustation} alt={text} />
        </Grid>
        <Grid item>
          <Box sx={stylings.innerBox}>
            <Typography variant="body" sx={stylings.text1}>
              {text}
            </Typography>
            <Typography variant="body" sx={stylings.text2}>
              Starting from $1299
            </Typography>
            <Typography variant="overline" sx={stylings.text3}>
              Reports Ready in 24hrs
            </Typography>
            <Typography variant="overline" sx={stylings.text3}>
              42 tests
            </Typography>
            <Typography variant="overline" sx={stylings.text5}>
              View Details
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default TestDetailCard
