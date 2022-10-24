import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import ApponitmentsMainContent from '.'

export default {
  title: 'Organisms/ApponitmentsMainContent',
  component: ApponitmentsMainContent,
} as ComponentMeta<typeof ApponitmentsMainContent>

const Template: ComponentStory<typeof ApponitmentsMainContent> = (args) => {
  return (
    <div style={{ width: '583px' }}>
      <ApponitmentsMainContent {...args} />
    </div>
  )
}

export const Default = Template.bind({})
