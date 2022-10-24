import { Grid, InputAdornment, Typography,styled } from '@mui/material'
import React from 'react'
import { Button, TextField } from '../Login'
import  CustomImage from '../../atoms/ImageAtom'
import theme from '../../../theme'
import { useMobileNumber } from './useMobileNumberHook'
import { useAuth0 } from '@auth0/auth0-react'
import { ENTER_MOBILE, MOBILE_LABEL } from '../../utils/Constant'

interface MobileNumberProps {
  buttonClick: () => void
}
const Image = styled(CustomImage)({
  width:"4px",
  height:"2rem"
})
const MobileNumber = ({ buttonClick }: MobileNumberProps) => {
  let { enable, phNumber, setPhNumber } = useMobileNumber()
  let {user}=useAuth0();
  return (
    <Grid
      container
      bgcolor="white"
      paddingLeft={0}
      width="20vw"
      p={5}
      spacing={5}
    >
      <Grid item xs={12} display="flex" justifyContent="center">
        <Image imgSrc={'https://svgshare.com/i/k5T.svg'} imgAlt="zemoso_logo" />
      </Grid>
      <Grid item xs={12}>
        <Grid container flexDirection="column" justifyContent={'space-between'}>
          <Grid item xs={12}>
            <Typography
              display="block"
              variant="body"
              color={theme.palette.gammaHigh.main}
            >
              {`Hey ${user?.name ?? "Guest"}`}
            </Typography>
            <Typography
              display="block"
              variant="captionRegular"
              color={theme.palette.gammaLow.main}
            >
              {ENTER_MOBILE}
            </Typography>
          </Grid>
          <Grid item xs={12} marginTop={12}>
            <Typography
              display="block"
              variant="overline2"
              color={theme.palette.gammaLow.main}
            >
              {MOBILE_LABEL}
            </Typography>
            <TextField
              value={phNumber}
              onChange={(e) => {
                setPhNumber(e.target.value)
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Typography
                      variant="captionRegular"
                      color={theme.palette.gammaHigh.main}
                    >
                      +91
                    </Typography>
                  </InputAdornment>
                ),
              }}
              variant="standard"
              placeholder="1234332487"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12} marginY={4} paddingBottom={"30vh"}>
            <Button
              fullWidth
              onClick={enable ? buttonClick : () => {}}
              bgcolor={
                enable
                  ? theme.palette.primary.main
                  : theme.palette.primary['100']
              }
              fontColor="white"
            >
              Get OTP
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default MobileNumber
