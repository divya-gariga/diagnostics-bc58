import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import ZemosoLogo from '../../../assets/icons/logo.svg'
import theme from '../../../theme'
import { FooterMenu } from '../../utils/Constant'
import FooterMedia from '../FooterMedia/index'
import Image from '../../atoms/ImageAtom'

let stylings = {
  box: {
    width: "100%",
    height: "16rem",
    backgroundColor:theme.palette.primary["800"],
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '3.75rem 5.313rem',
  },
  imageText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems:"center",
    gap: 2,
  },
  logo: {
    width: "1rem",
    height: "1rem",
  }
}

const Footer = () => {
  return (
    <Box sx={stylings.box}>
      <Grid container sx={stylings.container}>
        <Grid item>
          <Grid container direction="column" rowGap="24px">
            <Grid item>
              <Box sx={stylings.imageText}>
                <Image imgSrc={ZemosoLogo} imgStyle={stylings.logo} imgAlt="logo" />
                <Typography variant="overline" fontWeight="600" color={theme.palette.gammaWhite.main}>
                  Zemoso Diagnostics
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Grid container direction="column" rowGap="8px">
                {FooterMenu.map((item, index) => {
                  return (
                    <Grid item>
                      <Typography color={theme.palette.primary["100"]} fontWeight="500" variant="overline">
                        {item.title}
                      </Typography>
                    </Grid>
                  )
                })}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <FooterMedia />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer
