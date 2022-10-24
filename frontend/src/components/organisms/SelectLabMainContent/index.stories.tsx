import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import SelectLabMainContent from './index'
import labIcon from '../../../assets/icons/altos.svg'
type Props = {
  labIcon: string
  labName: string
  time: string
  cost: string
  selected?: boolean
  onClick?: any
  rating: string
  slots: number
}
type TestProps = {
  tests: Props[]
}
export default {
  title: 'Organisms/SelectLabMainContent',
  component: SelectLabMainContent,
} as ComponentMeta<typeof SelectLabMainContent>
const Template: ComponentStory<typeof SelectLabMainContent> = (args) => (
  <SelectLabMainContent {...args} />
)

export const Tests = Template.bind({})
Tests.args = {
  tests: [
    {
      id: 1,
      labIcon: labIcon,
      labName: 'Los Altos Center Lab',
      time: '24 hrs',
      cost: '$1200',
      rating: '4.3',
      slots: 4,
    },
    {
      id: 2,
      labIcon: labIcon,
      labName: 'Los Altos Center Lab',
      time: '24 hrs',
      cost: '$1200',
      rating: '4.3',
      slots: 4,
    },
  ],
}
