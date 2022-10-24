import React from 'react'
import LabTest from '../../components/templates/labTest'
import ReportsMainContent from '../../components/organisms/ReportsMainContent'
import { Grid } from '@mui/material'

const ReportsPage: React.FC = () => {
  return (
    <Grid item>
      <LabTest children={<ReportsMainContent />} />
    </Grid>
  )
}

export default ReportsPage
