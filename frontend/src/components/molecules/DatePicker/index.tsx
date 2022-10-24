import * as React from 'react'
import TextField from '@mui/material/TextField'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import datePickerIcon from '../../../assets/icons/datePickerIcon.svg'

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
    padding: '1.5rem',
  },
  nameField: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingTop: '1.5rem',
  },
  textField: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '400',
  },
}


const dateIcon = () => {
  return (
    <img src={datePickerIcon} alt="DateIcon"/>
  )
}


export interface DatePickerProps {
  label: string
  intialValue: Date | null
  onChange: (value: string) => void
}
const BasicDatePicker = ({ label, intialValue, onChange }: DatePickerProps) => {
  const [value, setValue] = React.useState<Date | null>(intialValue)

  const handleChange = (newValue: any) => {
    setValue(newValue)
    onChange(newValue)
  }
  return (
    <div data-testid="date-picker">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
        components={{
          OpenPickerIcon: dateIcon
        }}
          disableFuture
          label={label}
          value={value}
          onChange={(newValue) => {
            handleChange(newValue)
          }}
          renderInput={(params) => (
            <TextField
              fullWidth
              {...params}
              variant="standard"
              sx={{
                input: stylings.textField,
              }}
            />
          )}
        />
      </LocalizationProvider>
    </div>
  )
}
export default BasicDatePicker
