import { Dialog, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import CompanyLogo from '../../../assets/icons/companyLogo.svg'
import theme from '../../../theme'
import User from '../../../assets/icons/User.svg'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import MapPin from '../../../assets/icons/Mappin.svg'
import ChevronDown from '../../../assets/icons/ChevronDown.svg'
import SearchField from '../../molecules/searchField'
import {
  HOME_LABEL,
  MY_APPOINTMENT_LABEL,
  REPORTS_LABEL,
  NAVBAR_ADDRESS,
} from '../../utils/Constant'

import { NavLink } from 'react-router-dom'
import UserProfile from '../UserProfile'
import { webAuth } from '../../utils/webAuth'

const Header: React.FC = (props) => {
  const useStyles = makeStyles({
    innerGrid: {
      height: '100%',
      width: '100%',
      padding: '10px 0 10px 0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    center: {
      display: 'flex',
      alignItems: 'center',
    },
    link: {
      textDecoration: 'none',
      color: theme.palette.gammaMedium.main,
    },
    location: {
      display: 'flex',
      borderBottom: `1px solid ${theme.palette.grey[200]}`,
      justifyContent: 'space-between',
    },
    typoAddress: {
      color: theme.palette.gammaHigh.main,
      paddingLeft: '10px',
    },
    chevronDown: {
      paddingLeft: '76px',
    },
    cartIcon: {
      color: theme.palette.grey[300],
    },
    Activelink: {
      textDecoration: 'none',
      color: theme.palette.primary.main,
      borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
  })
  const dialogPaperProps = {
    position: 'fixed',
    top: 10,
    right: 10,
    m: 0,
  }
  const classes = useStyles()
  const [popUp, setPopUp] = useState(false)
  const handleUserIcon = () => {
    setPopUp((val) => !val)
  }

  const onLogOut = () => {
    webAuth.logout({
      returnTo: process.env.APP_URL,
      clientID: process.env.CLIENTID,
    })
    localStorage.clear()
  }
  return (
    <>
      <Dialog
        scroll="body"
        PaperProps={{ sx: dialogPaperProps }}
        maxWidth={false}
        open={popUp}
      >
        <UserProfile handleClose={handleUserIcon} handleLogOut={onLogOut} />
      </Dialog>
      <Grid container className={classes.innerGrid}>
        <Grid item xs={3} md={4} className={classes.center}>
          <img src={CompanyLogo} alt="companyLogo" />
        </Grid>
        <Grid
          item
          container
          xs={3}
          md={4}
          className={classes.center}
          columnGap={6}
        >
          <Grid item data-testid="NavBarTabs">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.Activelink : classes.link
              }
            >
              <Typography variant="caption2">{HOME_LABEL}</Typography>
            </NavLink>
          </Grid>
          <Grid item>
            <NavLink
              to="/reports"
              className={({ isActive }) =>
                isActive ? classes.Activelink : classes.link
              }
            >
              <Typography variant="caption2">{REPORTS_LABEL}</Typography>
            </NavLink>
          </Grid>
          <Grid item>
            <NavLink
              to="/myAppointments"
              className={({ isActive }) =>
                isActive ? classes.Activelink : classes.link
              }
            >
              <Typography variant="caption2">{MY_APPOINTMENT_LABEL}</Typography>
            </NavLink>
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={3}
          md={4}
          className={classes.center}
          columnSpacing={6}
          justifyContent="flex-end"
        >
          <Grid
            item
            container
            justifyContent="flex-end"
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
            columnGap={8}
          >
            <Grid item>
              <SearchField
                border="none"
                borderBottom={`1px solid ${theme.palette.grey[200]}`}
                startIcon={MapPin}
                endIcon={ChevronDown}
                borderRadius="none"
                padding="2px 0px 4px"
                defaultValue={NAVBAR_ADDRESS}
              />
            </Grid>
            <Grid
              item
              data-testid="userIcon"
              onClick={handleUserIcon}
              sx={{ cursor: 'pointer' }}
            >
              <img src={User} alt="user" />
            </Grid>
            <Grid item>
              <ShoppingCartOutlinedIcon
                className={classes.cartIcon}
                fontSize="small"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Header
