import { Box, Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import theme from '../../../theme'
import Home from '../../../assets/icons/home1.svg'
import Test from '../../../assets/icons/TestTube.svg'
import Doctor from '../../../assets/icons/Doctor.svg'
import Reports from '../../../assets/icons/Reports.svg'
import Dollar from '../../../assets/icons/Dollar.png'
import Clock from '../../../assets/icons/Clock.svg'
import {
  COVID_RTPCR,
  HOME_VISIT,
  TEST_INCLUDED,
  FREE_CONSULTATION,
  ONLINE_REPORTS,
  STARTING_PRICE,
  REPORTS_TIME,
  DESCRIPTION_1,
  DISCLAIMER_1,
  DISCLAIMER_2,
  MUNICIPAL_GUIDELINES,
  WHY_PACKAGE,
  FEATURE_1,
  FEATURE_2,
  FEATURE_3,
} from '../../utils/Constant'

const TestInfo: React.FC = (props) => {
  const useStyles = makeStyles({
    root: {
      height: '100%',
      width: '100%',
    },
    innerBox: {
      paddingLeft: '11.34px',
      paddingRight: '11.99px',
      height: '480px',
      width: '100%',
    },
    mainHeading: {
      color: theme.palette.gammaHigh.main,
      fontSize: '12px',
      lineHeight: '18px',
      fontWeight: '400',
    },
    logo: {
      borderRadius: '8px',
      background: '#FBF7FC',
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      width: '500px',
      height: '45px',
    },
    testDetails: {
      justifyContent: 'space-between',
      display: 'flex',
      alignItems: 'center',
      borderRadius: '8px',
      border: `1px solid ${theme.palette.grey[100]}`,
      paddingRight: '10px',
      color: theme.palette.gammaHigh.main,
      width: '293px',
      height: '36px',
    },
    center: {
      display: 'flex',
      justContent: 'center',
      alignItems: 'center',
    },
    bgColor: {
      background: '#FBF7FC',
      borderRadius: '12px',
      padding: '17px 12px',
      height: '3em',
      color: theme.palette.gammaHigh.main,
    },
    overline2: {
      fontWeight: '700',
    },
    list: {
      paddingLeft: '0.75em',
      maxWidth: '35em',
      minWidth: 'fit-content',
      margin: '0',
    },
  })
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Grid container className={classes.innerBox}>
        <Grid item xs={6} className={classes.mainHeading}>
          <Typography variant="subtitle1">{COVID_RTPCR}</Typography>
        </Grid>
        <Grid item container>
          <Grid item container xs={3} spacing={1} className={classes.center}>
            <Grid item xs={4} className={classes.logo}>
              <img src={Home} alt="home" />
            </Grid>
            <Grid item xs={3}>
              <Typography className={classes.mainHeading}>
                {HOME_VISIT}
              </Typography>
            </Grid>
          </Grid>

          <Grid item container xs={3} spacing={1} className={classes.center}>
            <Grid item xs={4} className={classes.logo}>
              <img src={Test} alt="home" />
            </Grid>
            <Grid item xs={3}>
              <Typography className={classes.mainHeading}>
                {TEST_INCLUDED}
              </Typography>
            </Grid>
          </Grid>

          <Grid item container xs={3} spacing={1} className={classes.center}>
            <Grid item xs={4} className={classes.logo}>
              <img src={Doctor} alt="home" />
            </Grid>
            <Grid item xs={3}>
              <Typography className={classes.mainHeading}>
                {FREE_CONSULTATION}
              </Typography>
            </Grid>
          </Grid>

          <Grid item container xs={3} spacing={1} className={classes.center}>
            <Grid item xs={4} className={classes.logo}>
              <img src={Reports} alt="home" />
            </Grid>
            <Grid item xs={3}>
              <Typography className={classes.mainHeading}>
                {ONLINE_REPORTS}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item container xs={8} className={classes.testDetails}>
          <Grid item className={classes.center}>
            <img src={Dollar} alt="dollar" />
            <Typography variant="overline">{STARTING_PRICE}</Typography>
          </Grid>
          <Grid
            item
            sx={{
              borderRadius: '50px',
              backgroundColor: theme.palette.grey[500],
              width: '6px',
              height: '6px',
            }}
          ></Grid>
          <Grid item className={classes.center}>
            <img src={Clock} alt="dollar" style={{ paddingRight: '5px' }} />
            <Typography variant="overline">{REPORTS_TIME}</Typography>
          </Grid>
        </Grid>

        <Grid item container>
          <ul className={classes.list}>
            <Grid item xs={12}>
              <li>
                <Typography
                  variant="overline"
                  color={theme.palette.gammaMedium.main}
                >
                  {DESCRIPTION_1}
                </Typography>
              </li>
            </Grid>
            <Grid item xs={12}>
              <li>
                <Typography
                  variant="overline"
                  color={theme.palette.gammaMedium.main}
                >
                  {DISCLAIMER_1}
                </Typography>
              </li>
            </Grid>

            <Grid item xs={12}>
              <li>
                <Typography
                  variant="overline"
                  color={theme.palette.gammaMedium.main}
                >
                  {DISCLAIMER_2}
                </Typography>
              </li>
            </Grid>

            <Grid item xs={12}>
              <li>
                <Typography
                  variant="overline"
                  color={theme.palette.gammaMedium.main}
                >
                  {MUNICIPAL_GUIDELINES}
                </Typography>
              </li>
            </Grid>
          </ul>
        </Grid>
        <Grid item container rowGap={2}>
          <Grid item>
            <Typography
              color={theme.palette.gammaLow.main}
              className={classes.overline2}
            >
              {WHY_PACKAGE}
            </Typography>
          </Grid>

          <Grid item container columnSpacing={2} xs={12}>
            <Grid item xs={4}>
              <Box className={classes.bgColor}>
                <Typography variant="overline">{FEATURE_1}</Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box className={classes.bgColor}>
                <Typography variant="overline">{FEATURE_2}</Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box className={classes.bgColor}>
                <Typography variant="overline">{FEATURE_3}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default TestInfo
