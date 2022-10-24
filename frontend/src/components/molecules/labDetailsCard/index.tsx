import { Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import theme from '../../../theme'
import selectedIcon from '../../../assets/icons/Selected.svg'
import starIcon from '../../../assets/icons/star.svg'
import calendarIcon from '../../../assets/icons/Calendar.svg'

type Props = {
  id: number
  labIcon: string
  labName: string
  time: string
  cost: string
  selected: boolean
  onClick?: any
  rating: string
  slots: number
  style?: React.CSSProperties | null
}

const LabDetailsCard: React.FC<Props> = (props: Props) => {
  const useStyles = makeStyles({
    root: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      padding: theme.spacing(3),
      gap: theme.spacing(3),
      backgroundColor: theme.palette.gammaWhite.main,
      boxShadow: '0px 0px 26px rgba(233, 232, 237, 0.5)',
      borderRadius: theme.spacing(2),
      border: props.selected
        ? `2px solid ${theme.palette.secondary.main}`
        : '1px solid #E9E8ED',
      cursor: 'pointer',
    },

    labName: {
      color: theme.palette.gammaMedium.main,
      letterSpacing: '-0.005em',
    },

    labIcon: {
      backgroundColor: theme.palette.gammaWhite.main,
      borderRadius: theme.spacing(1),
      height: '35px',
      width: '40px',
    },

    innerGrid: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: theme.spacing(0),
      gap: theme.spacing(3),
    },

    timeInfo: {
      color: theme.palette.gammaMedium.main,
    },

    costInfo: {
      color: theme.palette.gammaHigh.main,
    },

    selectedIcon: {
      display: props.selected ? '' : 'none',
    },

    frame: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: theme.spacing(0),
      gap: theme.spacing(5),
    },

    innerFrame: {
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(1),
    },

    slots: {
      color: theme.palette.green.main,
    },

    rating: {
      color: theme.palette.gammaMedium.main,
    },
  })

  const classes = useStyles()

  return (
    <Grid
      className={classes.root}
      onClick={() => props.onClick(props.id)}
      data-testid="lab-details"
    >
      <Grid item className={classes.labIcon}>
        <img src={props.labIcon} className={classes.labIcon} />
      </Grid>
      <Grid item container className={classes.innerGrid}>
        <Grid item className={classes.labName}>
          <Typography variant="body1">{props.labName}</Typography>
        </Grid>
        <Grid item container className={classes.frame}>
          <Grid item className={classes.innerFrame}>
            <Grid item>
              <img src={starIcon} />
            </Grid>
            <Grid item className={classes.rating}>
              <Typography variant="caption1">{props.rating}</Typography>
            </Grid>
          </Grid>
          <Grid item className={classes.innerFrame}>
            <Grid item>
              <img src={calendarIcon} />
            </Grid>
            <Grid item className={classes.slots}>
              <Typography variant="caption1">
                {props.slots} Slots Available
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.timeInfo}>
          <Typography variant="caption2">
            Reports ready in {props.time}
          </Typography>
        </Grid>
        <Grid item className={classes.costInfo}>
          <Typography variant="caption1">{props.cost} for 1 Test</Typography>
        </Grid>
      </Grid>
      <Grid item className={classes.selectedIcon} data-testid="selected-icon">
        <img src={selectedIcon} />
      </Grid>
    </Grid>
  )
}

export default LabDetailsCard
