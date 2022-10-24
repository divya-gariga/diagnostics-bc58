import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import OTP from '.'
export default {
  title: 'organisms/OTP',
  component: OTP,
} as ComponentMeta<typeof OTP>

const Template: ComponentStory<typeof OTP> = (args) => <OTP {...args} />

export const Primary = Template.bind({})
Primary.args = {
  buttonClick: () => {
    console.log('Clicked button')
  },
}
