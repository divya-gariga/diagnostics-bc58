import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import theme from '../../../theme'
import AddIcon from '@mui/icons-material/Add'
import SelectAddressCard from '../../molecules/SelectAddressCard'
import { addressDetailsType } from '../../../utils/constant'
import { LabFooter } from '../AddAdressDetails'

const stylings = {
  newPatientButton: {
    color: '#6B4DE0',
    width: '10.937rem',
    height: '2.5rem',
    fontSize: theme.typography.body.fontSize,
    fontWeight: theme.typography.body1.fontWeight,
    size: '1rem',
    lineHeight: '1.5rem',
    padding: '0.5rem',
  },
  selectPatient: {
    width: '583px',
    height: '560px',
    borderRadius: '8px',
    boxShadow: '0px 0px 26px 0px #E9E8ED80',
  },
}
type SelectAddressProps = {
  addressData: addressDetailsType[]
  onAddAddressClick?: () => void
  onCompleteClick?: (selectedAddress: addressDetailsType) => void
}
const SelectAddress = ({
  addressData,
  onAddAddressClick,
  onCompleteClick,
}: SelectAddressProps) => {
  const [selected, setSelected] = useState(0)
  return (
    <>
      <Box sx={stylings.selectPatient}>
        <Box padding="1.5rem">
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            height="54px"
          >
            <Grid item>
              <Typography
                variant="subtitle1"
                color={theme.palette.gammaMedium.main}
              >
                Select Address
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="text"
                data-testid="addAddressButton"
                sx={stylings.newPatientButton}
                onClick={onAddAddressClick}
                startIcon={<AddIcon />}
                children="Add Address"
              ></Button>
            </Grid>
          </Grid>
          <Grid container direction="column" rowGap="1rem" paddingTop="1rem">
            {addressData.map((item: any, index: number) => {
              return (
                <Grid data-testid={`card-${index}`} item>
                  <SelectAddressCard
                    addressData={item}
                    activeId={selected}
                    index={index}
                    handleOnClick={() => setSelected(index)}
                  />
                </Grid>
              )
            })}
          </Grid>
        </Box>
      </Box>
      <Box sx={LabFooter.footer}>
        <Grid container justifyContent="space-between" padding="3rem">
          <Grid item>
            <Button
              variant="text"
              children="Cancel"
              sx={LabFooter.cancelButton}
            ></Button>
          </Grid>
          <Grid item>
            <Button
              data-testid="comleteOrderButton"
              variant="contained"
              onClick={() => onCompleteClick?.(addressData[selected])}
              children="Complete Order"
              sx={LabFooter.containedButton}
            ></Button>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default SelectAddress
