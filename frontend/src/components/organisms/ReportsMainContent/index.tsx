import { Grid, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { getReports } from '../../../services/services'
import theme from '../../../theme'
import TestReport from '../../molecules/TestReport'
import {
  REPORTS_LABEL,
  UPCOMING_REPORTS,
  RECENT_REPORTS,
  LAB_NAME,
  TEST_REPORT_TEST_NAME,
  TEST_REPORT_DATE,
  TEST_REPORT_TIME,
  UserContext,
} from '../../utils/Constant'
export type ReportPageProps = {
  upcomingItems: TestReportProps[]
  recentItems: TestReportProps[]
}
type TestReportProps = {
  isCompleted?: boolean
  testName: string
  labName: string
  date?: string
  time?: string
  onDownload?: () => void
}
const ReportsMainContent: React.FC = () => {
  const [userId] = useContext(UserContext);
  const [upcomingReports, setUpcomingReports] = useState([])
  useEffect(() => {
    getReports(userId).then((res) => {
      setUpcomingReports(res)
      console.log(userId)
    })
  }, [])

  const testDetails: ReportPageProps = {
    upcomingItems: upcomingReports,
    recentItems: [
      {
        labName: `${LAB_NAME}`,
        testName: `${TEST_REPORT_TEST_NAME}`,
        isCompleted: true,
        date: `${TEST_REPORT_DATE}`,
        time: `${TEST_REPORT_TIME}`,
      },
      {
        labName: `${LAB_NAME}`,
        testName: `${TEST_REPORT_TEST_NAME}`,
        isCompleted: true,
        date: `${TEST_REPORT_DATE}`,
        time: `${TEST_REPORT_TIME}`,
      },
    ],
  }
  const style = {
    root: {
      paddingTop: '40px',
      paddingLeft: '90px',
      paddingRight: '90px',
    },
    label: {
      fontSize: '20px',
      lineHeight: '24px',
    },
  }
  return (
    <Grid container rowGap={2} sx={style.root}>
      <Grid item container rowGap={8}>
        <Grid item>
          <Typography
            data-testid="heading"
            variant="h1"
            color={theme.palette.gammaMedium.main}
          >
            {REPORTS_LABEL}
          </Typography>
        </Grid>

        <Grid item container rowGap={8}>
          <Grid item>
            <Typography
              variant="subtitle1"
              sx={style.label}
              color={theme.palette.gammaMedium.main}
              data-testid="upcoming"
            >
              {UPCOMING_REPORTS}
            </Typography>
          </Grid>
          <Grid item container direction="column" rowGap={8}>
            {testDetails.upcomingItems.map((test: TestReportProps) => {
              return (
                <Grid item width="60%" >
                  <TestReport
                    labName={test.labName}
                    testName={test.testName}
                    isCompleted={false}
                  />
                </Grid>
              )
            })}
          </Grid>
        </Grid>

        <Grid item container rowGap={8}>
          <Grid item>
            <Typography
              variant="subtitle1"
              color={theme.palette.gammaMedium.main}
              data-testid="recent"
              sx={style.label}
            >
              {RECENT_REPORTS}
            </Typography>
          </Grid>
          <Grid item container direction="column" rowGap={8}>
            {testDetails.recentItems.map((test: TestReportProps) => {
              return (
                <Grid item width="60%">
                  <TestReport
                    labName={test.labName}
                    testName={test.testName}
                    isCompleted={test.isCompleted}
                    date={test.date}
                    time={test.time}
                  />
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ReportsMainContent
