import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import SelectAppointment from './index'
export default {
  title: 'Organisms/SelectAppointment',
  component: SelectAppointment,
} as ComponentMeta<typeof SelectAppointment>
const Template: ComponentStory<typeof SelectAppointment> = (args) => (
  <SelectAppointment {...args} />
)

export const SlotPicker = Template.bind({})
