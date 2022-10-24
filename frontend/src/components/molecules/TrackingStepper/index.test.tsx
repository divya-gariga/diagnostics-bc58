import { render, screen } from '@testing-library/react'
import TrackingStepper from '.'
import LabTechnician from '../../../assets/icons/LabTechnician.svg'
import Check from '../../../assets/icons/check.svg'
import PickUp from '../../../assets/icons/pickup.svg'
import TestConducted from '../../../assets/icons/testConducted.svg'
import LabTechnicianImage from '../../../assets/icons/LabTechnicianImage.svg'
import FileText from '../../../assets/icons/file-text.svg'
import React from 'react'
import { Box } from '@mui/material'
describe('Tracking Stepper', () => {
  it('Truthy test', () => {
    const element = render(
      <TrackingStepper
        data={[
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
        ]}
        currentIndex={1}
      />
    );
    expect(element).toBeTruthy();
  })
})
