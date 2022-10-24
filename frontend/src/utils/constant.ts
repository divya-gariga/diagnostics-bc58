import locationIcon from '../assets/userprofileIcons/location.svg'
import usersIcon from '../assets/userprofileIcons/users.svg'
import paymentsIcon from '../assets/userprofileIcons/payments.svg'
import homeIcon from '../assets/userprofileIcons/home.svg'
import offersIcon from '../assets/userprofileIcons/offers.svg'
import helpIcon from '../assets/userprofileIcons/question.svg'
import tandcIcon from '../assets/userprofileIcons/Docs.svg'
import logOutIcon from '../assets/userprofileIcons/logout.svg'
export const patientDetails = [
  {
    age: '30 years',
    gender: 'Male',
    name: 'Patrick Smith',
    relation: 'Myself',
  },
  {
    age: '30 years',
    gender: 'Male',
    name: 'Peter Smith',
    relation: 'Self',
  },
]
export const tagLabels = [
  {
    label: 'Myself',
    focused: false,
  },
  {
    label: 'Mother',
    focused: false,
  },
  {
    label: 'Father',
    focused: false,
  },
  {
    label: 'Son',
    focused: false,
  },
  {
    label: 'Daughter',
    focused: false,
  },
  {
    label: 'Others',
    focused: false,
  },
]

export const profileMenu = [
  {
    heading: 'Track My Orders',
    subtext: 'Track My Recent Orders and See Order Status',
    icon: locationIcon,
  },
  {
    heading: 'My  Family Friends',
    subtext: 'Manage & view family members & reports',
    icon: usersIcon,
  },
  {
    heading: 'Payments ',
    subtext: 'Payment mode and refund status',
    icon: paymentsIcon,
  },
  {
    heading: 'Manage address',
    subtext: '2235 Calfornia Street Mountain View...',
    icon: homeIcon,
  },
  {
    heading: 'Offers',
    subtext: 'See Offers for More Details',
    icon: offersIcon,
  },
  {
    heading: 'Help',
    subtext: 'FAQs and General Queries',
    icon: helpIcon,
  },
  {
    heading: 'Terms and Conditions',
    subtext: '',
    icon: tandcIcon,
  },
  {
    heading: 'Logout',
    subtext: '',
    icon: logOutIcon,
  },
]
export const ADDRESS_PAGE_BAR_VALUES = [
  'Lab Test',
  'Select Appointement',
  'Add Address',
  'Review Order',
]
export type addressDetailsType = {
  houseNumber: string
  area: string
  zipcode: string
  city: string
}
export type patientDetailsType={
  relation:string,
  name:string,
  age:number,
  gender:string
}
export const addressData=[
  {
    houseNumber:"2235 California Street",
    area:"Mountain View ",
    city:"Calfornia",
    zipcode:"100132",
  },
  {
    houseNumber:"2235 NanalNagar",
    area:"Near Mehdipatnam",
    city:"Hyderabad",
    zipcode:"500008",
  }
]