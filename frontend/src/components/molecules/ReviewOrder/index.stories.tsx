import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import ReviewOrder from './index'
export default {
  title: 'Molecules/ReviewOrder',
  component: ReviewOrder,
} as ComponentMeta<typeof ReviewOrder>
const Template: ComponentStory<typeof ReviewOrder> = (args) => (
  <ReviewOrder {...args} />
)

export const AltosLab = Template.bind({})
AltosLab.args = {
  patients: [
    {
      patientName: 'Patrick Smith',
      testName: 'COVID RT-PCR Test',
      age: 30,
      gender: 'M',
      relation: 'Self',
      testCost: 2000,
    },
  ],
  address: '2235 California Street Mountain View California APT#021 - 11023',
  date: 'Tue, Feb 23, 2022',
  time: '07.00 - 08.00 AM',
  discount: 200,
}
