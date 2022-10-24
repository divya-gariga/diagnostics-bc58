export function getAge(dateString: any) {
  let today = new Date()
  let birthDate = new Date(dateString)
  let age = today.getFullYear() - birthDate.getFullYear()
  let m = today.getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  return age
}
export function getSelectedPatientDetails(selectedPatients: any) {
  let patients: any = []
  for (let i = 0; i < selectedPatients.length; i++) {
    const patient = {
      patientName: selectedPatients[i].name,
      testName: 'COVID RT-PCR Test',
      age: selectedPatients[i].age,
      gender: selectedPatients[i].gender.slice(0,1),
      relation: selectedPatients[i].relation,
      testCost: 2000,
    }
    patients.push(patient)
  }
  return patients
}
export function getPatientsandTests(selectedPatients: any) {
  let details: any = []
  for (let i = 0; i < selectedPatients.length; i++) {
    const patient = {
      name: selectedPatients[i].name,
      test: 'COVID RT-PCR Test'
    }
    details.push(patient)
  }
  return details
}