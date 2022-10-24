import { Box, Grid, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import Button from '../../components/atoms/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ProgressBar from '../../components/molecules/progressBar'
import Logo from '../../components/molecules/logo'
import logo from '../../assets/icons/logo.svg'
import theme from '../../theme'
import { useNavigate } from 'react-router-dom'
import AddAddress from '../../components/organisms/AddAdressDetails'
import { addAddressDetails } from '../../services/services'
import { addressDetailsType, ADDRESS_PAGE_BAR_VALUES } from '../../utils/constant'
import { UserContext } from '../../components/utils/Constant'


const AddAddressPage = () => {
  const navigate = useNavigate()
  const handleClickonLogo = () => {
    navigate('/')
  }
  const [userId] = useContext(UserContext);
  const handleClickonBackButton = () => {
    navigate('/appointementPage')
  }
  const handleSaveAddress=async(details:addressDetailsType)=>{
await addAddressDetails(details,userId)
    navigate('/selectAddressPage')

  }
  return (
    <Box marginY={6} marginX={10}>
      <Box onClick={handleClickonLogo}>
        <Logo img={logo} text="Zemoso Diagnostics" />
      </Box>
      <Grid
        container
        direction="row"
        columnGap="490px"
        alignItems="center"
        paddingTop="2.5rem"
      >
        <Grid item>
          <Button
            onClick={handleClickonBackButton}
            variant="text"
            startIcon={<ArrowBackIcon />}
            children={<Typography variant="body">Back</Typography>}
          />
        </Grid>
        <Grid xs  item>
            <Box width="671px">
            <ProgressBar
              values={ADDRESS_PAGE_BAR_VALUES}
              currentIndex={2}
            />
            </Box>
        </Grid>
      </Grid>
      
      <Box display="flex" paddingTop="2rem" justifyContent="center">
        <AddAddress onSaveAddressClick={(addressDetails:addressDetailsType)=>{
            handleSaveAddress(addressDetails)
        }}/>
      </Box>
    </Box>
  )
}

export default AddAddressPage
