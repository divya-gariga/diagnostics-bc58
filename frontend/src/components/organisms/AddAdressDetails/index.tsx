import { Box, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import theme from '../../../theme'
import { addressDetailsType } from '../../../utils/constant'
import Button from '../../atoms/Button'

export const LabFooter = {
  footer: {
    position: 'fixed',
    boxShadow: '0px -4px 6px 0px #0000000F',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '10%',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
  },
  cancelButton: {
    color: '#FC5C5C',
    fontWeight: theme.typography.body.fontWeight,
    fontSize: theme.typography.body.fontSize,
    lineHeight: '20px',
    borderRadius: '4px',
    height: '42px',
    '&:hover': {
      background: 'none',
    },
  },
  containedButton: {
    fontWeight: theme.typography.body.fontWeight,
    fontSize: theme.typography.body.fontSize,
    lineHeight: '20px',
    borderRadius: '8px',
    width: '222px',
    height: '42px',
  },
}
const stylings = {
  outerBox: {
    boxShadow: '0px 0px 26px 0px #E9E8ED80',
    width: '583px',
    height: '560px',
  },
  innerBox: {
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
  },
  heading1: theme.palette.gammaMedium.main,
  inputTextField: {
    color: '#2D2A38',
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '400',
    disableUnderline: true,
  },
  heading3: {
    fontWeight: theme.typography.caption2.fontWeight,
    color: theme.palette.gammaLow.main,
  },
  textBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  margin: {
    marginTop: '0px',
    borderBottom: '1px solid #E9E8ED',
  },
}
type addAddressProps = {
  onSaveAddressClick?: (addressDetails: addressDetailsType) => void
}
const AddAddress = (props: addAddressProps) => {
  const [houseDetails, setHouseDetails] = useState('')
  const [areaDetails, setareaDetails] = useState('')
  const [zipcode, setZipCode] = useState('')
  const [city, setCity] = useState('')
  const onHouseDetailsChange = (event: any) => {
    setHouseDetails(event.target.value)
  }
  const onAreaDetailsChange = (event: any) => {
    setareaDetails(event.target.value)
  }
  const onZipCodeChange = (event: any) => {
    setZipCode(event.target.value)
  }
  const onCityChange = (event: any) => {
    setCity(event.target.value)
  }
  return (
    <>
      <Box sx={stylings.outerBox}>
        <Box sx={stylings.innerBox}>
          <Typography
            variant="subtitle2"
            fontWeight="600"
            color={stylings.heading1}
          >
            Add Address
          </Typography>
          <Grid container direction="column" paddingTop="2rem" rowGap="1.4rem">
            <Grid item>
              <Box sx={stylings.textBox}>
                <Typography variant="overline" sx={stylings.heading3}>
                  House/Flat/Block No.
                </Typography>
                <TextField
                  data-testid="textfield1"
                  onChange={onHouseDetailsChange}
                  inputProps={{ maxLength: 35 }}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  sx={stylings.margin}
                  InputProps={{
                    style: stylings.inputTextField,
                    disableUnderline: true,
                  }}
                  InputLabelProps={{ style: stylings.inputTextField }}
                />
              </Box>
            </Grid>
            <Grid item>
              <Box sx={stylings.textBox}>
                <Typography variant="overline" sx={stylings.heading3}>
                  Road / Area
                </Typography>
                <TextField
                  onChange={onAreaDetailsChange}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  sx={stylings.margin}
                  inputProps={{ maxLength: 35 }}
                  InputProps={{
                    style: stylings.inputTextField,
                    disableUnderline: true,
                  }}
                  InputLabelProps={{ style: stylings.inputTextField }}
                />
              </Box>
            </Grid>
            <Grid item>
              <Box sx={stylings.textBox}>
                <Typography variant="overline" sx={stylings.heading3}>
                  ZipCode
                </Typography>
                <TextField
                  data-testid="zipcodeInput"
                  onChange={onZipCodeChange}
                  variant="standard"
                  fullWidth
                  type="number"
                  sx={stylings.margin}
                  InputProps={{
                    style: stylings.inputTextField,
                    disableUnderline: true,
                  }}
                  InputLabelProps={{ style: stylings.inputTextField }}
                />
              </Box>
            </Grid>
            <Grid item>
              <Box sx={stylings.textBox}>
                <Typography variant="overline" sx={stylings.heading3}>
                  City,State
                </Typography>
                <TextField
                  onChange={onCityChange}
                  variant="standard"
                  margin="normal"
                  inputProps={{ maxLength: 35 }}
                  fullWidth
                  sx={stylings.margin}
                  InputProps={{
                    style: stylings.inputTextField,
                    disableUnderline: true,
                  }}
                  InputLabelProps={{ style: stylings.inputTextField }}
                />
              </Box>
            </Grid>
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
              onClick={() => {
                const addressDetails = {
                  houseNumber: houseDetails,
                  area: areaDetails,
                  zipcode: zipcode,
                  city: city,
                }
                return props.onSaveAddressClick?.(addressDetails)
              }}
              data-testid="saveAddressButton"
              variant="contained"
              children="Save Address"
              sx={LabFooter.containedButton}
            ></Button>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default AddAddress
