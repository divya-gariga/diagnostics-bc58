import { Box, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import Button from '../../components/atoms/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ProgressBar from '../../components/molecules/progressBar'
import Logo from '../../components/molecules/logo'
import logo from '../../assets/icons/logo.svg'
import { useNavigate } from 'react-router-dom'
import SelectAppointement, { DateTimeType } from '../../components/organisms/SelectAppointment'
import { addSlotTime } from '../../services/services'
import {
  ADDRESS_PAGE_BAR_VALUES,
} from '../../utils/constant'
import { UserContext } from '../../components/utils/Constant'

const SelectAppointementPage = () => {
  const navigate = useNavigate()
  const handleClickonLogo = () => {
    navigate('/')
  }
  const handleClickonBackButton = () => {
    navigate('/selectLabPage')
  }
  const [userId] = useContext(UserContext);

  const handleAddAddressButton = async (
    slotSelected: DateTimeType
  ) => {
    // await addSlotTime(slotSelected,userId)
    localStorage.setItem("slotTime",JSON.stringify(slotSelected))
    navigate('/addAddressPage')
  }
  return (
    <Box marginY={6} marginX={10}>
      <Box onClick={handleClickonLogo}>
        <Logo img={logo} text="Zemoso Diagnostics" />
      </Box>
      <Grid
        container
        direction="row"
        columnGap="495px"
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
        <Grid xs item>
          <Box width="671px">
            <ProgressBar values={ADDRESS_PAGE_BAR_VALUES} currentIndex={1} />
          </Box>
        </Grid>
      </Grid>

      <Box display="flex" paddingTop="2rem" justifyContent="center">
        <SelectAppointement
          month={'January'}
          date={1}
          day={'Monday'}
          time={'6.00am - 7.00am'}
          getDateTime={(slotSelected:DateTimeType)=>{handleAddAddressButton(slotSelected)}}
        />
      </Box>
    </Box>
  )
}

export default SelectAppointementPage
