import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import TestInfo from '.'

export default {
  title: 'Molecules/TestInfo',
  component: TestInfo,
} as ComponentMeta<typeof TestInfo>

const Template: ComponentStory<typeof TestInfo> = (args) => (
  <div
    style={{
      width: '583px',
      height: '560px',
      borderRadius: '8px',
    }}
  >
    <TestInfo {...args} />
  </div>
)

export const RTPCRTest = Template.bind({})
