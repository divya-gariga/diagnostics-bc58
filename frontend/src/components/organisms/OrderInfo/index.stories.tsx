import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import OrderInfo from '.'
import { Box } from '@mui/material'
import { ADDRESS, PATIENT_DETAILS_ARRAY } from '../../utils/Constant'
export default {
  title: 'molecules/OrderInfo',
  component: OrderInfo,
} as ComponentMeta<typeof OrderInfo>

const Template: ComponentStory<typeof OrderInfo> = (args) => (
  <Box width="482px">
    <OrderInfo {...args} />
  </Box>
)
export const Primary = Template.bind({})
Primary.args = {
  patientDetails: PATIENT_DETAILS_ARRAY,
  labAddress:ADDRESS,
  totalAmountPaid:"2300"
}
