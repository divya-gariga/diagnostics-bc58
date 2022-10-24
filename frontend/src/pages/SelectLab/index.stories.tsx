import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SelectLabPage from '.'

export default {
  title: 'pages/SelectLabPage',
  component: SelectLabPage,
} as ComponentMeta<typeof SelectLabPage>

const Template: ComponentStory<typeof SelectLabPage> = (args) => (
  <SelectLabPage />
)

export const FinalOrder = Template.bind({})
