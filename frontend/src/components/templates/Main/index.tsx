import { ArrowBack } from '@mui/icons-material'
import { Grid, Typography, styled } from '@mui/material'
import React from 'react'
import CustomButton from '../../atoms/Button'
import logo from '../../../assets/icons/logo.svg'
import Logo from '../../molecules/logo'
import { useNavigate } from 'react-router-dom'
const Button = styled(CustomButton)({
  borderRadius: '0.5rem',
  height: '2.625rem',
  width: '13.875rem',
})
interface MainTemplateProps {
  stepperComponent: React.ReactNode
  mainComponent: React.ReactNode
  nextClick: () => void
  backClick?: () => void
  onLogoClick?: () => void
  footerTextComponent?: React.ReactNode
  buttonLabel: string
}
const MainTemplate = ({
  mainComponent,
  stepperComponent,
  nextClick,
  backClick,
  onLogoClick,
  footerTextComponent,
  buttonLabel,
}: MainTemplateProps) => {
  const navigate = useNavigate()

  const handleClickonLogo=()=>{
   navigate("/")
  }
  return (
    <Grid
      container
      minHeight={'100vh'}
      width="100%"
      justifyContent={'center'}
      columnSpacing={1}
    >
      <Grid onClick={handleClickonLogo} item xs={12} marginX={10} marginY={4}>
        <Logo img={logo} text="Zemoso Diagnostics" />
      </Grid>
      <Grid item xs marginX={9}>
        <Grid container width="100%" alignItems="center">
          <Grid item width={'fit-content'}>
            <CustomButton onClick={backClick} color="primary">
              <ArrowBack />
              <Typography marginX={1} variant="body">
                Back
              </Typography>
            </CustomButton>
          </Grid>
          <Grid item xs container>
            {stepperComponent}
          </Grid>
        </Grid>
        <Grid item xs>
          <Grid container justifyContent="center" width="100%" height="100%">
            <Grid
              item
              // marginX={'25%'}
              marginTop={'4rem'}
              width="fit-content"
              height="fit-content"
            >
              {mainComponent}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        display="flex"
        paddingY={'3%'}
        zIndex={9999}
        alignItems="center"
      >
        <Grid
          container
          paddingX={10}
          height="10%"
          boxShadow="0px -4px 6px 0px #0000000F"
          width="99%"
          bgcolor="white"
          position="fixed"
          bottom={0}
          alignItems={'center'}
          justifyContent="space-between"
        >
          <Grid item>
            <CustomButton variant="text" color="red200">
              <Typography variant="body">Cancel</Typography>
            </CustomButton>
          </Grid>

          <Grid item display="flex">
            {footerTextComponent}

            <Button onClick={nextClick} variant="contained" fullWidth>
              <Typography variant="body">{buttonLabel}</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default MainTemplate
