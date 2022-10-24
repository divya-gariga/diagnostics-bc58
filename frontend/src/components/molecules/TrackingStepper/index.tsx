import React from 'react'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import CustomTimelineConnector, {
  TimelineConnectorProps,
} from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import CustomTimelineDot, { TimelineDotProps } from '@mui/lab/TimelineDot'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import Typography from '@mui/material/Typography'
import { Box, styled } from '@mui/material'
import theme from '../../../theme'
type TrackingStepperProps = {
  data: { icon: string; heading: React.ReactNode; caption: React.ReactNode }[]
  currentIndex: number
}
interface TimeConnectorProps extends TimelineConnectorProps {
  display: string
  backgroundColor?: string
}
interface TimeDotProps extends TimelineDotProps {
  backgroundColor?: string
}
const TimelineDot = styled(CustomTimelineDot)<TimeDotProps>(
  ({ backgroundColor, theme }) => ({
    display: 'flex',
    backgroundColor,
    justifyContent: 'center',
    width: '2rem',
    height: '2rem',
    margin: 0,
  })
)
const TimelineConnector = styled(CustomTimelineConnector)<TimeConnectorProps>(
  ({ display, backgroundColor }) => ({
    height: '3rem',
    width: '1px',
    display,
    backgroundColor,
  })
)
export default function TrackingStepper({
  data,
  currentIndex,
}: TrackingStepperProps) {
  return (
    <Box width="100%">
      <Timeline sx={{ m: 0, width: '100%' }}>
        <Typography mt={2} mb={`${theme.spacing(8)}`} variant="subtitle1">
          Track your order
        </Typography>
        {data.map((value, index) => {
          return (
            <TimelineItem>
              <TimelineOppositeContent
                display={'none'}
                flex={0}
              ></TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineDot
                  backgroundColor={
                    index < currentIndex
                      ? theme.palette.secondary['800']
                      : 'transparent'
                  }
                  variant={index < currentIndex ? 'filled' : 'outlined'}
                  color={index <= currentIndex ? 'primary' : 'grey'}
                >
                  <img src={value.icon} />
                </TimelineDot>
                <TimelineConnector
                  backgroundColor={
                    index < currentIndex
                      ? theme.palette.primary.main
                      : theme.palette.grey['300']
                  }
                  display={index == data.length - 1 ? 'none' : ''}
                />
              </TimelineSeparator>
              <TimelineContent>
                <Typography
                  display="block"
                  variant="body"
                  color={theme.palette.gammaMedium.main}
                >
                  {value.heading}
                </Typography>
                <Typography
                  display="flex"
                  alignItems="center"
                  width="fit-content"
                  color={theme.palette.gammaLow.main}
                  variant="overline"
                  bgcolor={
                    index == 1 ? theme.palette.grey['50'] : 'transparent'
                  }
                >
                  {value.caption}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          )
        })}
      </Timeline>
    </Box>
  )
}
