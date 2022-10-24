import { Box } from '@mui/material'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import TestReport from '.'
export default {
  title: 'molecules/TestReport',
  component: TestReport,
} as ComponentMeta<typeof TestReport>
const Template: ComponentStory<typeof TestReport> = (args) => (
  <Box width="580px" >
    <TestReport {...args} />
  </Box>
)

export const Primary = Template.bind({})
Primary.args = {
  labName: 'Los Altos Center Lab',
  testName: 'COVID RT-PCR Test',
  isCompleted: false,
}
export const Secondary = Template.bind({})
Secondary.args = {
  labName: 'Los Altos Center Lab',
  testName: 'COVID RT-PCR Test',
  isCompleted: true,
  date: '02 Feb 2022',
  time: '08.30 AM',
}
