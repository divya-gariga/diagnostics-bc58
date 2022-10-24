import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import ReportsMainContent from '.'

export default {
  title: 'Organisms/ReportsMainContent',
  component: ReportsMainContent,
} as ComponentMeta<typeof ReportsMainContent>

const Template: ComponentStory<typeof ReportsMainContent> = (args) => {
  return <ReportsMainContent {...args} />
}

export const Default = Template.bind({})
