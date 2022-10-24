import React from 'react'
import LabTest from '../../components/templates/labTest'
import ApponitmentsMainContent from '../../components/organisms/AppointmentsMainContent'
import { Grid } from '@mui/material'

const AppointmentsPage: React.FC = () => {
  return (
    <Grid item>
      <LabTest children={<ApponitmentsMainContent />} />
    </Grid>
  )
}

export default AppointmentsPage
