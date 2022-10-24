import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import OTPField from './index'
export default {
  title: 'Molecules/OTPField',
  component: OTPField,
} as ComponentMeta<typeof OTPField>
const Template: ComponentStory<typeof OTPField> = (args) => (
  <OTPField {...args} />
)

export const OTP = Template.bind({})
