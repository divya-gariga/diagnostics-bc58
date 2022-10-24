import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import theme from '../../../theme/index'
import User from '../../../assets/icons/User.svg'
import Divider from '@mui/material/Divider'
import Trash from '../../../assets/icons/Trashbin.svg'
import {
  PATIENT_DETAILS,
  NUMBER_OF_TESTS,
  REPORTS_BY,
} from '../../utils/Constant'
export type Props = {
  patientName: string
  testName: string
  relation: string
  gender: 'M' | 'F'
  age: number
  testCost: number
}

const PatientInfo: React.FC<Props> = (props) => {
  const { patientName, testName, relation, gender, age, testCost } = props
  const useStyles = makeStyles({
    root: {
      width: '100%',
      height: '100%',
      border: `1px solid ${theme.palette.grey[100]}`,
      borderRadius: '12px',
    },
    heading: {
      fontWeight: '500',
      fontSize: '12px',
      lineHeight: '18px',
      color: theme.palette.gammaLow.main,
    },
    heading1: {
      paddingLeft: '10.67px',
    },
    outerGrid: {
      padding: '16px',
    },
    mainContainer: {
      paddingTop: '20px',
    },
    pInfo: {
      color: theme.palette.gammaLow.main,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    pName: {
      color: theme.palette.gammaHigh.main,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    tInfo: {
      color: theme.palette.green.main,
    },
    tCost: {
      fontWeight: 600,
      fontSize: '12px',
      lineHeight: '16px',
    },
  })
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Grid container direction="column" className={classes.outerGrid}>
        <Grid item container>
          <Grid item>
            <img src={User} alt="user" />
          </Grid>
          <Grid item className={classes.heading1}>
            <Typography className={classes.heading}>
              {PATIENT_DETAILS}
            </Typography>
          </Grid>
        </Grid>
        <Divider variant="fullWidth" />
        <Grid
          item
          container
          className={classes.mainContainer}
          spacing={3}
          direction="column"
        >
          <Grid item container>
            <Grid item xs={10} className={classes.pName}>
              <Typography
                variant="caption1"
                fontWeight="500"
                color={theme.palette.gammaHigh.main}
              >
                {patientName}
              </Typography>
            </Grid>
            <Grid
              item
              container
              xs={2}
              justifyContent="flex-end "
              className={classes.pInfo}
            >
              <Grid item>
                <Typography variant="caption">{relation}</Typography>
              </Grid>
              <Divider orientation="vertical" variant="fullWidth" flexItem />
              <Grid item>
                <Typography variant="caption">{gender}</Typography>
              </Grid>
              <Divider orientation="vertical" variant="fullWidth" flexItem />
              <Grid item>
                <Typography variant="caption">{age}</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item container>
            <Grid item container>
              <Grid item xs={10} className={classes.pName}>
                <Typography variant="overline">{testName}</Typography>
              </Grid>
              <Grid item container xs={2} className={classes.pName}>
                <Grid item>
                  <Typography className={classes.tCost}>${testCost}</Typography>
                </Grid>
                <Grid item>
                  <img src={Trash} alt="TrashCan" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.pInfo}>
              <Typography variant="overline">{NUMBER_OF_TESTS}</Typography>
            </Grid>
          </Grid>

          <Grid item className={classes.tInfo}>
            <Typography variant="caption1">{REPORTS_BY}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default PatientInfo
