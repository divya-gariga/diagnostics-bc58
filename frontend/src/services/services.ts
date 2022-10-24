import { DateTimeType } from '../components/organisms/SelectAppointment'
import { webAuth } from '../components/utils/webAuth'
import { patientDetailsType, addressDetailsType } from '../utils/constant'
import API from './API'
export const addPatientDetails = async (
  details: patientDetailsType,
  userId: any
) => {
  if (
    details.age === null ||
    details.name === '' ||
    details.gender === '' ||
    details.relation === ''
  ) {
    console.log('Data Invalid')
  } else {
    const response = await getUser(userId)
    const postData = { ...details, userID: response }
    console.log(postData)
    await API.post(`/patients/`, postData)
  }
}

export const getPatientDetails = async (userId: any) => {
  try {
    const response = await API.get(`/patients/${userId}/patients`)
    return response.data
  } catch {
    const response = await API.post(`/patients/`, {
      id: userId,
      patientDetails: [],
    })
    console.log('in catch block')
    console.log(response.data)
    return response.data
  }
}

export const addAddressDetails = async (
  details: addressDetailsType,
  userId: any
) => {
  if (
    details.area === '' ||
    details.houseNumber === '' ||
    details.city === '' ||
    details.zipcode === ''
  ) {
    console.log('Data Invalid')
  } else {
    const response = await getUser(userId)
    const postData = { ...details, userID: response }
    console.log(postData)
    await API.post(`/address/`, postData)
  }
}
export const getLabs = async () => {
  let tests: any = []
  await API.get('/labs/')
    .then((res) => {
      tests = res.data
    })
    .catch((err) => {
      console.log(err)
    })
  return tests
}
export const getLabsById = async (labID: number) => {
  let labs: any = []
  await API.get(`/labs/${labID}`)
    .then((value) => {
      labs = value.data
    })
    .catch((err) => {
      console.log(err)
    })
  return labs
}
export const getPatientLabDetails = async (patients: any[], labID: number) => {
  let details: any = []
  await getLabsById(labID).then((value) => {
    details.push(value)
  })
  patients.map(async (value) => {
    await getPatientDetails(value).then((patient) => {
      let tempData = {}
      console.log(patient)
      tempData = { ...patient }
      details.push(tempData)
    })
  })
  return details
}

export const getSlotByPatientID = async (patientID: number) => {
  let details: any = []
  await API.get(`/slotsBooked/${patientID}`).then((response) => {
    details = response.data.slots
  })
  return details
}
export const addSlotTime = async (slotSelected: DateTimeType, userId: any) => {
  await API.get(`/slotsBooked/${userId}`)
    .then((response) => {
      response.data.slots.push(slotSelected)
      API.put(`/slotsBooked/${userId}`, response.data)
    })
    .catch(async (err) => {
      await API.post(`/slotsBooked/`, {
        id: userId,
        slots: [slotSelected],
      })
    })
}
export const getAddressDetails = async (userId: any) => {
  let addressData: any[] = []
  await API.get(`/address/${userId}`)
    .then((res) => {
      addressData = res.data
    })
    .catch((err) => {
      console.log(err)
    })
  return addressData
}
export const getReports = async (userId: any) => {
  let reports: any = []
  await API.get(`/reports/${userId}`)
    .then((res) => {
      reports = res.data
    })
    .catch((err) => {
      console.log(err)
    })
  return reports
}
export const getUser = async (userId: any) => {
  let user: any = []
  await API.get(`/users/${userId}`)
    .then((res) => {
      user = res.data
    })
    .catch((err) => {
      console.log(err)
    })
  return user
}

export const addreports = async (userId: any) => {
  const report = {
    labName: 'Los Altos Center Lab',
    testName: 'COVID RT-PCR Test',
  }
  const userData = await getUser(userId)
  const postData = { ...report, user: userData }
  await API.post('reports/', postData)
  console.log('Successful')
}
export const onPayNow = async (userId: any) => {
  let address = JSON.parse(localStorage.getItem('selectedAddress') as string)
  let selectedPatients = JSON.parse(
    localStorage.getItem('selectedPatients') as string
  )
  let slotTime = JSON.parse(localStorage.getItem('slotTime') as string)
  const user = await getUser(userId)
  const labData = await getLabsById(1)
  const postData = {
    ...slotTime,
    userID: user,
    labID: labData,
    patientID: selectedPatients[0],
  }
  console.log(postData)
  await API.post('/appointments/', postData)
  console.log(postData)
}
export const checkUserandSignUp = async (user: any, userId: any) => {
  await API.get(`users/${userId}`)
    .then((response) => {
      console.log(response)
    })
    .catch((err) => {
      console.log(err)
      if (err.response.status === 404) {
        console.log('Inside If Block')
        const userData = {
          id: userId,
          userName: user.nickname,
          emailId: user.email,
        }
        API.post('/users', userData)
        console.log('New userSuccessfully Registered')

        console.log(err)
      }
    })
  // console.log(response)
}
