import { Box, Button, Checkbox, Divider, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import theme from '../../../theme'
import PatientCard, { PatientDetails } from '../PatientCard'
import AddIcon from '@mui/icons-material/Add'
import { LabFooter } from '../../organisms/AddAdressDetails'
type SelectAndAddPatientProps = {
  patientDetails: PatientDetails[]
  onNewPatientClick?: () => void
  onSelectLabClick?: (selected: any) => void
}
const stylings = {
  footer: {
    position: 'absolute',
    boxShadow: '0px -4px 6px 0px #0000000F',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '70px',
    bottom: 0,
    width: '100%',
  },
  cancelButton: {
    color: '#FC5C5C',
    fontWeight: theme.typography.body1.fontWeight,
    fontSize: theme.typography.body1.fontSize,
    lineHeight: '18px',
    borderRadius: '4px',
    width: '222px',
    height: '42px',
    '&:hover': {
      background: 'none',
    },
  },
  containedButton: {
    fontWeight: theme.typography.body1.fontWeight,
    fontSize: theme.typography.body1.fontSize,
    lineHeight: '18px',
    borderRadius: '8px',
    width: '222px',
    height: '42px',
  },
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
const SelectAndAddPatient = ({
  onNewPatientClick,
  onSelectLabClick,
  patientDetails,
}: SelectAndAddPatientProps) => {
  const [selected, setSelected] = useState<any>([])
  const handleCheckBoxClick = (key: any) => {
    if (selected.includes(patientDetails[key])) {
      let newArr = [...selected]

      newArr.splice(key, 1)
      setSelected(newArr)
    } else {
      let newArr = [...selected]

      newArr.push(patientDetails[key])
      setSelected(newArr)
    }
  }

  return (
    <>
      <Box sx={stylings.selectPatient}>
        <Box padding="1.5rem">
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            height="54px"
            paddingLeft="1rem"
          >
            <Grid item>
              <Typography
                variant="subtitle1"
                color={theme.palette.gammaMedium.main}
              >
                Add Patient
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="text"
                data-testid="newPatientButton"
                sx={stylings.newPatientButton}
                onClick={onNewPatientClick}
                startIcon={<AddIcon />}
                children="New Patient"
              ></Button>
            </Grid>
          </Grid>
          <Divider />
          <Box paddingTop="36px" paddingRight="2rem">
            <Grid container direction="column">
              {patientDetails.map((value, index) => (
                <Grid item xs key={index}>
                  <Grid container direction="row">
                    <Grid item>
                      <Checkbox
                        data-testid={`checkbox-${index}`}
                        color="secondary"
                        onChange={() => {
                          handleCheckBoxClick(index)
                        }}
                      />
                    </Grid>
                    <Grid item xs>
                      <PatientCard
                        age={value.age}
                        name={value.name}
                        relation={value.relation}
                        gender={value.gender}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Box>
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
            <Box display="flex" flexDirection="row" alignItems="center">
              <Typography variant="body" paddingRight="1.5rem">
                {selected.length} Patients Selected
              </Typography>
              <Button
                data-testid="selectLabButton"
                variant="contained"
                onClick={() => onSelectLabClick?.(selected)}
                children="Select Lab"
                sx={LabFooter.containedButton}
              ></Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default SelectAndAddPatient
