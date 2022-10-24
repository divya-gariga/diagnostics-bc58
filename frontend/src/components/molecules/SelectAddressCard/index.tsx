import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { addressDetailsType } from '../../../utils/constant'
import RadioButton from '../../atoms/radioButton'
const stylings = {
  outerCard: {
    width: '535px',
    height: '128px',
    boxShadow: '0px 0px 26px 0px #E9E8ED80',
    borderRadius:"8px"
  },
}
type SelectAddressCardProps = {
  addressData: addressDetailsType
  activeId: number
  index: number
  handleOnClick:()=>void
}
const SelectAddressCard = (props: SelectAddressCardProps) => {
  const { addressData, activeId, index ,handleOnClick} = props
  return (
    <Box data-testid={`selectAddressCardBox${index}`} sx={stylings.outerCard} onClick={handleOnClick}>
      <Box
        padding="0.75rem"
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          width="258px"
          height="98px"
        >
          <Grid item>
            <Typography variant="overline2" color="#5A5766">
              Address {index+1}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption2" color="#2D2A38">
              HOME
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="captionRegular"
              fontWeight="400"
              color="#5A5766"
            >
              {addressData.houseNumber} {addressData.area}{' '}
              {addressData.city} - {addressData.zipcode}
            </Typography>
          </Grid>
        </Grid>
        <RadioButton checked={activeId === index ? true : false} />
      </Box>
    </Box>
  )
}

export default SelectAddressCard
