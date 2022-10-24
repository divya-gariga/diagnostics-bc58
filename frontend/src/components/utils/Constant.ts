import payPal from '../../assets/icons/PayPal.svg'
import googlePay from '../../assets/icons/GooglePay.svg'
import netBanking from '../../assets/icons/NetBanking.svg'

import labIcon1 from '../../assets/icons/labIcon.svg'
import labIcon2 from '../../assets/icons/labIcon2.svg'
import labIcon3 from '../../assets/icons/labIcon3.png'
import labIcon4 from '../../assets/icons/labIcon4.png'
import labIcon5 from '../../assets/icons/labIcon5.png'
import labIcon6 from '../../assets/icons/labIcon6.png'

import avatarImage from '../../assets/icons/avatarImage.svg'

import bloodTest from '../../assets/icons/bloodtest.svg'
import bodyTest from '../../assets/icons/body.svg'
import covidTest from '../../assets/icons/covid.svg'
import diabetesTest from '../../assets/icons/diabetestest.svg'
import kidneyTest from '../../assets/icons/kidney.svg'
import lipidTest from '../../assets/icons/lipid.svg'
import liverTest from '../../assets/icons/liver.svg'
import thyroidTest from '../../assets/icons/throid.svg'
import React from 'react'

export const PATIENT_DETAILS = 'Patient Details (1)'
export const NUMBER_OF_TESTS = '1 Test'
export const REPORTS_BY = 'E-Reports by 12hrs'
export const COVID_RTPCR = 'Covid RTPCR Test'
export const HOME_VISIT = 'Home Visit'
export const TEST_INCLUDED = '1 test included'
export const FREE_CONSULTATION = 'Free consultation'
export const ONLINE_REPORTS = 'Online reports'
export const STARTING_PRICE = 'Starting from $1200'
export const REPORTS_TIME = 'Reports ready in 24 Hours'
export const DESCRIPTION_1 =
  'This package covers nasal/oral swab test & same day pickup. It indicates if you currently have the COVID-19 infection.'
export const DISCLAIMER_1 =
  'Disclaimer 1:For travelling purposes, please ensure the name is as per govt ID proof.'
export const DISCLAIMER_2 =
  'Disclaimer 2: Vaccination status will be required and Covid Positive Reports will be made available as per local'
export const MUNICIPAL_GUIDELINES = 'Municipal corporation guidelines.'
export const WHY_PACKAGE = 'Why you should book this package?'
export const FEATURE_1 = 'To check if you have an active COVID-19 infection'
export const FEATURE_2 = 'If you are showing symptoms of COVID-19 infection'
export const FEATURE_3 =
  'If you had a contact with someone with confirmed COVID-19'
export const ITEM_TOTAL = 'Item Total'
export const LABEL_DISCOUNT = 'Discount'
export const LABEL_GRAND_TOTAL = 'Grand Total'
export const PRICE = '1200'
export const DISCOUNT_PRICE = '100'
export const FINAL_PRICE = '1100'
export const LAB_NAME = 'Los Altos Center Lab'
export const SLOT_SELECTED = 'Time Slot Selected'
export const CHANGE = 'Change'
export const DATE = 'Tue, Feb 23, 2022'
export const TIME = '07.00 - 08.00 AM'
export const HEADING_ADDRESS = 'Address Selected (Home)'
export const ADDRESS =
  '2235 California Street Mountain View California APT#021 - 11023'
export const SELECT_APPOINTMENT = 'Select Appointment'
export const AVAILABLE_SLOTS = [
  { startTime: '06.00', endTime: '07.00' },
  { startTime: '06.00', endTime: '07.00' },
  { startTime: '06.00', endTime: '07.00' },
  { startTime: '06.00', endTime: '07.00' },
]
export function getAllDaysInMonth(year: number, month: number) {
  const date = new Date(year, month, 1)

  const dates = []

  while (date.getMonth() === month) {
    dates.push(new Date(date))
    date.setDate(date.getDate() + 1)
  }

  return dates
}
export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
export const noOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

export const time6To12 = '06 AM - 12 PM'
export const timeRange6To12 = [
  '06.00 - 07.00',
  '07.00 - 08.00',
  '08.00 - 09.00',
  '09.00 - 10.00',
  '10.00 - 11.00',
  '11.00 - 12.00',
]

export const time12To4 = '12 PM - 04 PM'
export const timeRange12To4 = [
  '12.00 - 01.00',
  '01.00 - 02.00',
  '02.00 - 03.00',
  '03.00 - 04.00',
]

export const time4To6 = '04 PM - 06 PM'
export const timeRange4To6 = ['04.00 - 05.00', '05.00 - 06.00']

export const timeWithAmPm = [
  '06.00am - 07.00am',
  '07.00am - 08.00am',
  '08.00am - 09.00am',
  '09.00am - 10.00am',
  '10.00am - 11.00am',
  '11.00am - 12.00pm',
  '12.00pm - 01.00pm',
  '01.00pm - 02.00pm',
  '02.00pm - 03.00pm',
  '03.00pm - 04.00pm',
  '04.00pm - 05.00pm',
  '05.00pm - 06.00pm',
]
export const selectAppointment = 'Select Appointment'

export const timeCoversion = (chosenTime: string) => {
  let i = 0
  while (i < timeRange6To12.length) {
    if (timeRange6To12[i].substring(0, 2) === chosenTime.substring(0, 2)) {
      return timeRange6To12[i]
    }
    i++
  }
  i = 0
  while (i < timeRange12To4.length) {
    if (timeRange12To4[i].substring(0, 2) === chosenTime.substring(0, 2)) {
      return timeRange12To4[i]
      i++
    }
  }
  i = 0
  while (i < timeRange4To6.length) {
    if (timeRange4To6[i].substring(0, 2) === chosenTime.substring(0, 2)) {
      return timeRange4To6[i]
      i++
    }
  }
  return chosenTime
}
export const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
export const daysOfDateFunc = () => {
  let daysOfDate: Record<number, string> = {}
  let i = 1
  while (i < 366) {
    let pair = { [i]: days[i % 7] }
    daysOfDate = { ...daysOfDate, ...pair }
    i++
  }
  return daysOfDate
}
export const daysFullForm = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
export const weekDaysFunc = () => {
  let weekDays: Record<number, string> = {}
  let i = 1
  while (i < 366) {
    let fullPair = { [i]: daysFullForm[i % 7] }
    weekDays = { ...weekDays, ...fullPair }
    i++
  }
  return weekDays
}
export const HOME_LABEL = 'Home'
export const REPORTS_LABEL = 'Reports'
export const MY_APPOINTMENT_LABEL = 'My Appointment'
export const NAVBAR_ADDRESS = 'Mountain view, CA, USA'

export const PATIENT_DETAILS_ARRAY = [
  {
    name: 'Patrick Smith',
    test: 'COVID RT-PCR TEST',
  },
  {
    name: 'Peter Smith',
    test: 'FULL BODY CHECKUP',
  },
]

export const BANNER_HEADLINE = '60% off on your first order'
export const BANNER_CAPTION = 'Your health is our priority'
export const BANNER_BUTTON_TEXT = 'Book Now'
export const paymentOptions = [
  {
    icon: payPal,
    name: 'PayPal',
    selected: false,
  },

  {
    icon: googlePay,
    name: 'Google Pay',
    selected: true,
  },

  {
    icon: netBanking,
    name: 'Net Banking',
    selected: false,
  },
]
export const FooterMenu = [
  {
    title: 'Home',
  },
  {
    title: 'Contact us',
  },
  {
    title: 'Privacy Policy',
  },
  {
    title: 'Terms and Conditions',
  },
]
export const TEST_REPORT_DATE = '02 Feb 2022'
export const TEST_REPORT_TIME = '08.30 AM'
export const TEST_REPORT_TEST_NAME = 'COVID RT-PCR Test'
export const labList = [
  '1600+ Tests',
  'At Home Services',
  'Certified Professionals',
]
export const labList1 = [
  {
    icon: labIcon1,
    text: '1600+ Tests',
  },
  {
    icon: labIcon2,
    text: 'At Home Services',
  },
  {
    icon: labIcon3,
    text: 'Certified Professionals',
  },
  {
    icon: labIcon3,
    text: 'Certified Professionals',
  },
]
export const labList2 = [
  {
    icon: labIcon4,
    text: 'CLIA Certfied Labs',
  },
  {
    icon: labIcon5,
    text: 'Reports in 24-48 Hours',
  },
  {
    icon: labIcon6,
    text: 'Safe and Hygenic',
  },
  {
    icon: labIcon6,
    text: 'Safe and Hygenic',
  },
]
export const OTP = 'OTP'
export const FIRST_NAME = 'First Name'
export const LAST_NAME = 'Last Name'
export const EMAIL = 'Email id'
export const ENTER_MOBILE = 'Enter your Mobile number'
export const MOBILE_LABEL = 'Mobile Number'
export const OTP_TEXT = 'Enter the OTP to verify your details'
export const UPCOMING_REPORTS = 'Upcoming Reports'
export const RECENT_REPORTS = 'Recent Reports'
export const SELECT_LAB = 'Select Lab'
export const SORT = 'Sort'
export const MAIN_LOGO = 'https://svgshare.com/i/k5T.svg'

export const testimonials = [
  {
    avatar: avatarImage,
    name: 'Abby',
    location: 'San Jose, CA',
    comment:
      'Very friendly and professional. Loved the follow-up and progress calls',
  },
  {
    avatar: avatarImage,
    name: 'Abby',
    location: 'San Jose, CA',
    comment:
      'Very friendly and professional. Loved the follow-up and progress calls. I would recommend zemoso diagnostics to my friends and family.',
  },
  {
    avatar: avatarImage,
    name: 'Abby',
    location: 'San Jose, CA',
    comment:
      'Very friendly and professional. Loved the follow-up and progress calls',
  },
  {
    avatar: avatarImage,
    name: 'Abby',
    location: 'San Jose, CA',
    comment:
      'Very friendly and professional. Loved the follow-up and progress calls',
  },
]
export const CARD_NUMER = '1244 1234 1345 3255'
export const CARD_HOLDER_NAME = 'Yessie'
export const EXPIRY_DATE = '02/25'
export const testList1 = [
  {
    logo: bodyTest,
    testName: 'Full body Check',
    onClick: () => {},
    clickable: false,
  },
  {
    logo: covidTest,
    testName: 'Covid RTPCR',
    onClick: () => {},
    clickable: true,
  },
  {
    logo: liverTest,
    testName: 'Liver Function',
    onClick: () => {},
    clickable: false,
  },
  {
    logo: bloodTest,
    testName: 'Complete Blood Count',
    onClick: () => {},
    clickable: false,
  },
  {
    logo: bodyTest,
    testName: 'Full body Check',
    onClick: () => {},
    clickable: false,
  },
]

export const testList2 = [
  {
    logo: diabetesTest,
    testName: 'Diabetes Test',
    onClick: () => {},
    clickable: false,
  },
  {
    logo: kidneyTest,
    testName: 'Kidney Function Test',
    onClick: () => {},
    clickable: false,
  },
  {
    logo: thyroidTest,
    testName: 'Thyroid Test',
    onClick: () => {},
    clickable: false,
  },
  {
    logo: lipidTest,
    testName: 'Lipid Profile',
    onClick: () => {},
    clickable: false,
  },
  {
    logo: diabetesTest,
    testName: 'Diabetes Test',
    onClick: () => {},
    clickable: false,
  },
]
export const APPOINTMENT_CARD = {
  dateTime: 'Wed 23, 7.00 am to 8.00 am',
  labName: 'Los Altos Center Lab',
  patientName: 'Patrick Smith',
  testName: 'Covid RTPCR',
}
export const UserContext = React.createContext<any>('')

export const UPCOMING_TESTS = 'Upcoming Tests'
export const RECENT_TESTS = 'Recent Tests'
