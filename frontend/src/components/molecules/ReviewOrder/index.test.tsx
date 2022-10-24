import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import ReviewOrder from './index'

describe('ReviewOrder Component', () => {
  it('rendering component', () => {
    const wrapper = render(
      <ReviewOrder
        patients={[
          {
            patientName: 'Patrick Smith',
            testName: 'COVID RT-PCR Test',
            age: 30,
            gender: 'M',
            relation: 'Self',
            testCost: 2000,
          },
        ]}
        address="2235 California Street Mountain View California APT#021 - 11023"
        date="Tue, Feb 23, 2022"
        time="07.00 - 08.00 AM"
        discount={200}
      />
    )
    expect(wrapper).toBeTruthy
  })
})
