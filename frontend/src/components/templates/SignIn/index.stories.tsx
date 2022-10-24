import { Box } from '@mui/material'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import SignIn from '.'
export default {
  title: 'templates/SignIn',
  component: SignIn,
} as ComponentMeta<typeof SignIn>
const Template: ComponentStory<typeof SignIn> = (args) => <SignIn {...args} />
export const Primary = Template.bind({})
Primary.args = {
  children: <Box bgcolor="white" height="30%" width="20%"></Box>,
}
