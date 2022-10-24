import { Box } from '@mui/material'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import AppointmentCard from '.'
export default {
  title: 'molecules/AppointmentCard',
  component: AppointmentCard,
} as ComponentMeta<typeof AppointmentCard>
const Template: ComponentStory<typeof AppointmentCard> = (args) => (
  <Box width="580px">
    <AppointmentCard {...args} />
  </Box>
)
export const Primary = Template.bind({})
Primary.args={
    dateTime:'Wed 23, 7.00 am to 8.00 am',
    labName:'Los Altos Center Lab',
    patientName:'Patrick Smith',
    testName:'Covid RTPCR'
}