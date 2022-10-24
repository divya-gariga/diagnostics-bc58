import { Box, Grid, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import Button from '../../components/atoms/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ProgressBar from '../../components/molecules/progressBar'
import Logo from '../../components/molecules/logo'
import logo from '../../assets/icons/logo.svg'
import AddPatient from '../../components/organisms/AddPatientDetails'
import theme from '../../theme'
import SelectAndAddPatient from '../../components/molecules/SelectAndAddPatient'
import {
  addPatientDetails,
  getPatientDetails,
} from '../../services/services'
import { useNavigate } from 'react-router-dom'
import { patientDetailsType } from '../../utils/constant'
import { UserContext } from '../../components/utils/Constant'
import { AnyARecord } from 'dns'

const stylings = {
  footer: {
    boxShadow: '0px -4px 6px 0px #0000000F',
    display: 'flex',
    justifyContent: 'spacce-between',
    alignItems: 'center',
    height: '70px',
    bottom: 0,
  },
  cancelButton: {
    color: '#FC5C5C',
    fontWeight: theme.typography.body1.fontWeight,
    fontSize: theme.typography.body1.fontSize,
    lineHeight: '18px',
    borderRadius: '4px',
    height: '42px',
    '&:hover': {
      background: 'none',
    },
  },
  containedButton: {
    fontWeight: theme.typography.body1.fontWeight,
    fontSize: theme.typography.body1.fontSize,
    lineHeight: '18px',
    borderRadius: '4px',
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
const AddPatientDetailsPage = () => {
  const [visible, setVisible] = useState(true)
  const [patientsData, setPatientsData] = useState<any>([])
  const navigate = useNavigate()
  const [userId] = useContext(UserContext);
  useEffect(() => {
    getPatientDetails(userId).then((res) => {
      setPatientsData(res)
    })
  }, [visible])
  const handleSelectLab = async (selected: any, userId: number) => {
    console.log(selected)
    localStorage.setItem("selectedPatients",JSON.stringify(selected))
    navigate('/selectLabPage')
  }
  const handleClickonLogo = () => {
    navigate('/')
  }
  const handleClickonBackButton = () => {
    navigate('/covid-test')
  }
  return (
    <Box marginY={6} marginX={10}>
      <Box onClick={handleClickonLogo} >
        <Logo img={logo} text="Zemoso Diagnostics" />
      </Box>
      <Grid
        container
        direction="row"
        columnGap="600px"
        alignItems="center"
        paddingTop="2.5rem"
      >
        <Grid item>
          <Button
            onClick={handleClickonBackButton}
            variant="text"
            color="primary"
            startIcon={<ArrowBackIcon />}
            children={<Typography variant="body">Back</Typography>}
          />
        </Grid>
        <Grid display="flex" alignItems="center" justifyContent="center" item>
          <Box width="423px">
            <ProgressBar
              values={['Home', 'Covid RTPCR', 'Add Patient']}
              currentIndex={2}
            />
          </Box>
        </Grid>
      </Grid>
      <Box display="flex" paddingTop="2rem" justifyContent="center">
        {visible ? (
          <AddPatient
            onNextClick={async (details: patientDetailsType) => {
              await addPatientDetails(details, userId)
              setVisible((val) => !val)
            }}
          />
        ) : (
          <SelectAndAddPatient
            patientDetails={patientsData}
            onNewPatientClick={() => setVisible((val) => !val)}
            onSelectLabClick={(selected: any) =>
              handleSelectLab(selected, userId)
            }
          />
        )}
      </Box>
    </Box>
  )
}

export default AddPatientDetailsPage
