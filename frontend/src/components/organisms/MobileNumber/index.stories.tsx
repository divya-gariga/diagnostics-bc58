import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import MobileNumber from '.'
export default {
  title: 'organisms/MobileNumber',
  component: MobileNumber,
} as ComponentMeta<typeof MobileNumber>

const Template: ComponentStory<typeof MobileNumber> = (args) => <MobileNumber {...args} />

export const Primary = Template.bind({})
Primary.args = {
  buttonClick: () => {
    console.log('Clicked button')
  },
}
