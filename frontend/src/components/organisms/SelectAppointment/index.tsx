import {
  Grid,
  IconButton,
  Paper,
  Typography,
  styled,
  Box,
  Button,
} from '@mui/material'
import React, { useState, useEffect } from 'react'
import ButtonComponent from '../../atoms/Button'
import RightArrow from '../../../assets/icons/chevron-right.svg'
import theme from '../../../theme/index'

import _ from 'lodash'
import {
  months,
  noOfDays,
  SELECT_APPOINTMENT,
  timeWithAmPm,
  daysOfDateFunc,
  weekDaysFunc,
} from '../../utils/Constant'
import TimeSelection from '../../molecules/TimeSelection'
import { LabFooter } from '../AddAdressDetails'

const StyledPaper = styled(Paper)({
  width: '36.4375em',
  padding: '1.5em',
  borderRadius: '0.5em',
  boxShadow: '0em 0em 0.75em rgba(233, 232, 237, 0.53)',
  marginBottom: '5em',
})

export const MT48Div = styled('div')({
  marginTop: '3em',
})

export const MT40Div = styled('div')({
  marginTop: '2.5em',
})

export const FlexDiv = styled('div')({
  display: 'flex',
})

export const FlexColumnDiv = styled('div')({
  display: 'flex',
  flexDirection: 'column',
})

export const MR22Grid = styled(Grid)({
  marginRight: '1.375em',
})

export const MR16Grid = styled(Grid)({
  marginRight: '1em',
})

export const MLN97IconButton = styled(IconButton)({
  marginLeft: '-1.95em',
})

export const SelectedMonthButton = styled(ButtonComponent)({
  height: '2.5em',
  width: '8.875em',
  padding: '0.5em',
  gap: '0.25em',
  backgroundColor: theme.palette.secondary['800'],
  borderRadius: '0.75em',
  ':hover': {
    backgroundColor: theme.palette.secondary['800'],
  },
})

export const MonthButton = styled(ButtonComponent)({
  height: '2.5em',
  width: '8.875em',
  padding: '0.5em',
  gap: '0.25em',
  backgroundColor: '#F6F5F7',
  borderRadius: '0.75em',
})

export const SelectedDayButton = styled(ButtonComponent)({
  height: '4.75em',
  width: '4.0625em',
  padding: '1em 0.75em 1em 0.75em',
  gap: '0.25em',
  backgroundColor: theme.palette.secondary['800'],
  borderRadius: '0.75em',
  ':hover': {
    backgroundColor: theme.palette.secondary['800'],
  },
})

export const DayButton = styled(ButtonComponent)({
  height: '4.75em',
  width: '4.0625em',
  padding: '1em 0.75em 1em 0.75em',
  gap: '0.25em',
  backgroundColor: '#F6F5F7',
  borderRadius: '0.75em',
})

export type DateTimeType = {
  month: string
  date: number
  day: string
  time: string
}

export type DateTimeProps = {
  setDateTime?: (dateTime: DateTimeType) => void
  getDateTime?: (slotSelected: DateTimeType) => void
  month: string
  date: number
  day: string
  time: string
}
const stylings = {
  footer: {
    position: 'fixed',
    boxShadow: '0px -4px 6px 0px #0000000F',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '70px',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
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
}
const SelectAppointmentForm = ({
  setDateTime,
  getDateTime,
  month,
  date,
  day,
  time,
}: DateTimeProps) => {
  const [isLastMonth, setIsLastMonth] = useState<boolean>(false)
  const [isLastDay, setIsLastDay] = useState<boolean>(false)
  const [monthStartNo, setMonthStartNo] = useState<number>(0)
  const [dayStartNo, setDayStartNo] = useState<number>(1)
  const [dayAdder, setdayAdder] = useState<number>(0)
  const [selectedMonth, setSelectedMonth] = useState<string>(months[0])
  const [selectedDay, setSelectedDay] = useState<number>(date)
  const [selectedWeekDay, setSelectedWeekDay] = useState<string>(day)
  const [selectedTime, setSelectedTime] = useState<string>(timeWithAmPm[0])
  const monthNo = months.indexOf(selectedMonth)
  const daysOfMonth = noOfDays[monthNo]
  const daysOfDate = daysOfDateFunc()
  const weekDays = weekDaysFunc()
  const changeMonth = () => {
    setdayAdder(() => {
      let finalVal = 0
      const stopIndex = months.indexOf(selectedMonth)
      for (let i = 0; i < stopIndex; i++) {
        finalVal += noOfDays[i]
      }
      return finalVal
    })
  }

  useEffect(() => {
    changeMonth()
    if (isLastMonth) {
      setMonthStartNo(0)
      setIsLastMonth(false)
    }
    if (isLastDay) {
      setDayStartNo(1)
      setIsLastDay(false)
    }
    setSelectedWeekDay(weekDays[selectedDay + dayAdder])
    setDateTime &&
      setDateTime({
        month: selectedMonth,
        date: selectedDay,
        day: selectedWeekDay,
        time: selectedTime,
      })
  }, [
    isLastMonth,
    isLastDay,
    selectedMonth,
    selectedDay,
    monthStartNo,
    dayStartNo,
    dayAdder,
    selectedWeekDay,
    selectedTime,
  ])

  return (
    <>
      <StyledPaper>
        <div>
          <Typography variant="subtitle1" color="text.primary">
            {SELECT_APPOINTMENT}
          </Typography>
        </div>
        <MT48Div>
          <FlexDiv>
            <Grid container>
              {_.times(3, (i) => {
                const month = months[i + monthStartNo]
                if (month === selectedMonth) {
                  return (
                    <MR22Grid key={i}>
                      <SelectedMonthButton data-testid={month}>
                        <Typography
                          variant="overline"
                          color="secondary.contrastText"
                        >
                          {month}
                        </Typography>
                      </SelectedMonthButton>
                    </MR22Grid>
                  )
                } else {
                  return (
                    <MR22Grid key={i}>
                      <MonthButton
                        data-testid={month}
                        onClick={() => {
                          setSelectedMonth(month)
                          setDayStartNo(1)
                          changeMonth()
                        }}
                      >
                        <Typography variant="overline" color={'#5A5766'}>
                          {month}
                        </Typography>
                      </MonthButton>
                    </MR22Grid>
                  )
                }
              })}
            </Grid>
            <MLN97IconButton
              data-testid="monthScroll"
              onClick={() => {
                setMonthStartNo(monthStartNo + 1)
                if (monthStartNo === 9) {
                  setIsLastMonth(true)
                }
              }}
            >
              <img src={RightArrow} alt="right-arrow" />
            </MLN97IconButton>
          </FlexDiv>

          <MT48Div>
            <FlexDiv>
              {_.times(6, (i) => {
                if (i + dayStartNo === selectedDay) {
                  return (
                    <MR16Grid key={i}>
                      <SelectedDayButton data-testid={i + dayStartNo}>
                        <FlexColumnDiv>
                          <Typography
                            variant="overline"
                            color="#ffffff"
                            gutterBottom
                          >
                            {daysOfDate[i + dayStartNo + dayAdder]}
                          </Typography>
                          <Typography variant="body" color="#ffffff">
                            {i + dayStartNo}
                          </Typography>
                        </FlexColumnDiv>
                      </SelectedDayButton>
                    </MR16Grid>
                  )
                } else {
                  return (
                    <MR16Grid key={i}>
                      <DayButton
                        data-testid={i + dayStartNo}
                        onClick={() => {
                          setSelectedDay(i + dayStartNo)
                        }}
                      >
                        <FlexColumnDiv>
                          <Typography
                            variant="overline"
                            color="#5A5766 "
                            gutterBottom
                          >
                            {daysOfDate[i + dayStartNo + dayAdder]}
                          </Typography>
                          <Typography variant="body" color="#5A5766 ">
                            {i + dayStartNo}
                          </Typography>
                        </FlexColumnDiv>
                      </DayButton>
                    </MR16Grid>
                  )
                }
              })}
              <IconButton
                data-testid="dayScroll"
                onClick={() => {
                  setDayStartNo(dayStartNo + 1)
                  if (dayStartNo + 5 === daysOfMonth) {
                    setIsLastDay(true)
                  }
                }}
              >
                <img src={RightArrow} alt="right-arrow" />
              </IconButton>
            </FlexDiv>
          </MT48Div>
        </MT48Div>
        <MT48Div>
          <TimeSelection chosenTime={selectedTime} setTime={setSelectedTime} />
        </MT48Div>
      </StyledPaper>
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
                {selectedMonth} {selectedDay},{selectedWeekDay}, {selectedTime}
              </Typography>
              <Button
                data-testid="footerAddaddresButton"
                variant="contained"
                onClick={() => {
                  let slotSelected = {
                    month: selectedMonth,
                    date: selectedDay,
                    day: selectedWeekDay,
                    time: selectedTime,
                  }
                  getDateTime?.(slotSelected)
                }}
                children="Add Address"
                sx={LabFooter.containedButton}
              ></Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default SelectAppointmentForm
