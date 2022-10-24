import { Grid } from '@mui/material'
import React from 'react'
import theme from '../../../theme'
type SignInProps = {
  children: React.ReactNode
}
const SignIn = ({ children }: SignInProps) => {
  return (
    <Grid
      width="100vw"
      height="96.6vh"
      container
      bgcolor={theme.palette.secondary['50']}
      justifyContent="center"
      maxWidth={'100%'}
      overflow="hidden"
      maxHeight={'100%'}
      alignItems={'center'}
    >
      <Grid item xs={4} display="flex" justifyContent={'center'}>
        {children}
      </Grid>
    </Grid>
  )
}
export default SignIn
