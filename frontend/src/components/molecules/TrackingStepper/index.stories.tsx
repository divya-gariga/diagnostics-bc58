import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import TrackingStepper from '.'
import LabTechnician from '../../../assets/icons/LabTechnician.svg'
import Check from '../../../assets/icons/check.svg'
import PickUp from '../../../assets/icons/pickup.svg'
import TestConducted from '../../../assets/icons/testConducted.svg'
import LabTechnicianImage from '../../../assets/icons/LabTechnicianImage.svg'
import FileText from '../../../assets/icons/file-text.svg'
import { Box } from '@mui/material'
export default {
  title: 'Molecules/TrackingStepper',
  component: TrackingStepper,
} as ComponentMeta<typeof TrackingStepper>

const Template: ComponentStory<typeof TrackingStepper> = (args) => (
  <TrackingStepper {...args} />
)
export const Primary = Template.bind({})
Primary.args = {
  data: [
    {
      icon: Check,
      heading: 'Order placed',
      caption: 'Placed on Mon, 22 Feb, 11.00 AM',
    },
    {
      icon: LabTechnician,
      heading: 'Lab technician assigned',
      caption: (
        <Box display="flex" marginY={1} paddingX={1} alignItems="center">
          <img src={LabTechnicianImage} />
          {'Esther Howard'}
        </Box>
      ),
    },
    {
      icon: PickUp,
      heading: 'Sample collection',
      caption: 'On Tue, 23 Feb, 7.00 - 8.00 AM',
    },
    {
      icon: TestConducted,
      heading: 'Sample being examined',
      caption: 'Estimated time - 24 hrs',
    },
    {
      icon: FileText,
      heading: 'Report ready',
      caption: '',
    },
  ],
  currentIndex:1
}
