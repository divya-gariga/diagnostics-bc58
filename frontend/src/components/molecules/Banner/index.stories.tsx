import { Box } from '@mui/material'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import Banner from '.'
import {
  BANNER_BUTTON_TEXT,
  BANNER_CAPTION,
  BANNER_HEADLINE,
} from '../../utils/Constant'
export default {
  title: 'molecules/Banner',
  component: Banner,
} as ComponentMeta<typeof Banner>

const Template: ComponentStory<typeof Banner> = (args) => (
  <Box width="100%">
    <Banner {...args} />
  </Box>
)
export const Primary = Template.bind({})
Primary.args = {
  headline: BANNER_HEADLINE,
  caption: BANNER_CAPTION,
  buttonText: BANNER_BUTTON_TEXT,
}
