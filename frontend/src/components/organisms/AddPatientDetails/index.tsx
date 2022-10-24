import {
  Box,
  Button,
  Grid,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import theme from '../../../theme'
import { patientDetailsType, tagLabels } from '../../../utils/constant'
import CheckBox from '../../atoms/checkbox'
import RadioButton from '../../atoms/radioButton'
import Tags from '../../atoms/tags'
import BasicDatePicker from '../../molecules/DatePicker'
import { getAge } from '../../../services/helperFunctions'
import { LabFooter } from '../AddAdressDetails'
const stylings = {
  box: {
    width: '36.438rem',
    height: '35rem',
    borderRaius: '0.5rem',
    boxShadow: '0px 0px 26px 0px #E9E8ED80',
  },
  innerBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: '1.5rem',
    paddingTop: '1.5rem',
    paddingRight: '1.5rem',
    paddingDown: '0rem',
  },
  textField: {
    width: '535px',
    marginTop: '0px',
  },
  nameField: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingTop: '1.5rem',
    gap: '0.5rem',
  },
  tagsContainer: {
    columnGap: '1rem',
    paddingTop: '0.5rem',
  },
  radioGroupBox: {
    paddingLeft: '0.75rem',
    paddingTop: '0.5rem',
  },
  inputTextField: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '400',
  },
  genderText: {
    fontSize: '14px',
    lineHeight: '18px',
    fontWeight: '400',
    color: '#2D2A38',
  },
  checkBoxText: {
    fontSize: '14px',
    lineHeight: '18px',
    fontWeight: '400',
    color: '#5A5766',
  },
  checkBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '1.5rem',
  },
  heading1: {
    color: theme.palette.gammaMedium.main,
  },
  heading2: {
    paddingTop: '1.25rem',
    fontWeight: theme.typography.caption2.fontWeight,
    color: theme.palette.gammaMedium.main,
  },
  heading3: {
    fontWeight: theme.typography.caption2.fontWeight,
    color: theme.palette.gammaLow.main,
  },
}
type AddPatientDetailsProps = {
  onNextClick?: (details: patientDetailsType) => void
}
const AddPatient = (props: AddPatientDetailsProps) => {
  const [name, setName] = useState('')
  const [dob, setDob] = useState<any>('')
  const [gender, setGender] = useState<any>('')
  const [checked, setChecked] = useState<any>(false)
  const [tagsValue, setTagsValue] = useState<any>(tagLabels)
  const [person, setPerson] = useState<any>('Self')
  const onNameChange = (event: any) => {
    setName(event.target.value)
    console.log(event.target.value)
  }
  const handleDateChange = (value: any) => {
    setDob(value)
    console.log(value)
  }
  const handleRadioGroupChange = (event: any) => {
    setGender(event.currentTarget.value)
    console.log(event.currentTarget.value)
  }
  const handleCheckBox = () => {
    if (checked) {
      setChecked(false)
      console.log(false)
    } else {
      setChecked(true)
      console.log(true)
    }
  }
  const handleTag = (key: number) => {
    let newArr = [...tagLabels]
    for (let i = 0; i < newArr.length; i++) {
      if (key === i) {
        newArr[i].focused = true
      } else {
        newArr[i].focused = false
      }
    }
    setTagsValue(newArr)
    if (newArr[key].label === 'Myself') {
      setPerson('Self')
    } else {
      setPerson(newArr[key].label)
    }
  }
  return (
    <>
      <Box sx={stylings.box}>
        <Box sx={stylings.innerBox}>
          <Typography variant="subtitle1" sx={stylings.heading1}>
            Add Patient Details
          </Typography>
          <Typography variant="overline" sx={stylings.heading2}>
            Booking for Whom
          </Typography>
          <Grid container sx={stylings.tagsContainer}>
            {tagsValue.map((item: any, index: number) => {
              return (
                <Grid item>
                  <Tags
                    data-testid={`tags-${index}`}
                    text={item.label}
                    focused={item.focused}
                    onClick={() => handleTag(index)}
                  />
                </Grid>
              )
            })}
          </Grid>
          <Box sx={stylings.nameField}>
            <Typography variant="overline" sx={stylings.heading3}>
              Name
            </Typography>
            <TextField
              placeholder="Enter Your Name"
              margin="normal"
              variant="standard"
              fullWidth
              inputProps={{ maxLength: 35 }}
              sx={stylings.textField}
              InputProps={{ style: stylings.inputTextField }}
              InputLabelProps={{ style: stylings.inputTextField }}
              onChange={onNameChange}
            />
          </Box>
          <Box sx={stylings.nameField}>
            <Typography variant="overline" sx={stylings.heading3}>
              Date of Birth
            </Typography>
            <Box width="535px">
              <BasicDatePicker
                label=""
                intialValue={null}
                onChange={(dateValue: any) => handleDateChange(dateValue)}
              />
            </Box>
          </Box>
          <Typography variant="caption1" sx={stylings.heading2}>
            Gender
          </Typography>
        </Box>
        <Box sx={stylings.radioGroupBox}>
          <RadioGroup onChange={handleRadioGroupChange} row>
            <Box>
              <RadioButton name="gender" value="Male" />
              <Typography variant="caption2" sx={stylings.genderText}>
                Male
              </Typography>
            </Box>
            <Box>
              <RadioButton name="gender" value="Female" />
              <Typography variant="caption2" sx={stylings.genderText}>
                Female
              </Typography>
            </Box>
            <Box>
              <RadioButton name="gender" value="Others" />
              <Typography variant="caption2" sx={stylings.genderText}>
                Others
              </Typography>
            </Box>
          </RadioGroup>
          <Box sx={stylings.checkBox}>
            <CheckBox value={true} onChange={handleCheckBox} />
            <Typography variant="caption2" sx={stylings.checkBoxText}>
              Save Details for Future
            </Typography>
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
            <Button
              data-testid="nextButton"
              variant="contained"
              onClick={() => {
                let age = getAge(dob)
                const patientDetails = {
                  relation: person,
                  name: name,
                  age: age,
                  gender: gender,
                }
                return props.onNextClick?.(patientDetails)
              }}
              children="Next"
              sx={LabFooter.containedButton}
            ></Button>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default AddPatient
