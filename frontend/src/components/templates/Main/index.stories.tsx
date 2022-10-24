import { Box } from '@mui/material'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import MainTemplate from '.'
import ProgressBar from '../../molecules/progressBar'
export default {
  title: 'templates/Main',
  component: MainTemplate,
} as ComponentMeta<typeof MainTemplate>
const Template: ComponentStory<typeof MainTemplate> = (args) => (
  <MainTemplate {...args} />
)
export const Primary = Template.bind({})
Primary.args = {
  mainComponent: (
    <Box width="583px" height="560px">
    </Box>
  ),
  stepperComponent: (
    <ProgressBar values={['Home', 'Covid RTPCR']} currentIndex={1} />
  ),
}
