import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import Login from '.'
export default {
  title: 'organisms/Login',
  component: Login,
} as ComponentMeta<typeof Login>

const Template: ComponentStory<typeof Login> = (args) => <Login {...args} />

export const Primary = Template.bind({})
Primary.args = {
  buttonClick: () => {
    console.log('Clicked button')
  },
}
