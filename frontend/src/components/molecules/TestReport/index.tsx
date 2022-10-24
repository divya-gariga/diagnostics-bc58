import { AccessTime } from '@mui/icons-material'
import {
  Divider as CustomDivider,
  Grid,
  styled,
  Typography,
} from '@mui/material'
import React from 'react'
import PDF from '../../../assets/icons/PDF.svg'
import PDFActive from '../../../assets/icons/PDFActive.svg'
import theme from '../../../theme'
import Download from '../../../assets/icons/download.svg'
type TestReportProps = {
  isCompleted?: boolean
  testName: string
  labName: string
  date?: string
  time?: string
  onDownload?: () => void
}
const Divider = styled(CustomDivider)({
  color: 'grey',
  marginLeft: '0.25rem',
  marginRight: '0.25rem',
})
const CustomTypography = styled(Typography)({
  color: theme.palette.gammaLow.main,
  ...theme.typography.overline,
})
const TestReport = ({
  isCompleted,
  labName,
  testName,
  date,
  time,
  onDownload,
}: TestReportProps) => {
  return (
    <Grid
      padding={2}
      border={`1px solid ${theme.palette.grey['50']}`}
      container
      boxShadow="0px 0px 12px 0px rgba(233, 232, 237, 0.53)"
      width="100%"
      borderRadius="8px"
    >
      <Grid item margin={3}>
        <img src={isCompleted ? PDFActive : PDF} />
      </Grid>
      <Grid item xs marginX={5}>
        <Grid container spacing={1} direction="column">
          <Grid item>
            <Typography variant="caption1">{labName}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption">{testName}</Typography>
          </Grid>
          <Grid item display="inline-flex">
            {!isCompleted ? (
              <Typography
                display="flex"
                alignItems="center"
                variant="caption"
                color={theme.palette.red500.main}
              >
                <AccessTime sx={{ fontSize: '14px', marginX: 1 }} />
                Pending
              </Typography>
            ) : (
              <>
                <CustomTypography>{date}</CustomTypography>
                <Divider orientation="vertical" variant="middle" flexItem />
                <CustomTypography>{time}</CustomTypography>
              </>
            )}
          </Grid>
        </Grid>
      </Grid>
      {isCompleted ? (
        <Grid item>
          <img
            data-testid={'download-icon'}
            onClick={onDownload ?? (() => {})}
            src={Download}
          />
        </Grid>
      ) : (
        ''
      )}
    </Grid>
  )
}

export default TestReport
