import { render, screen } from '@testing-library/react'
import React from 'react'
import OrderInfo from '.'
import { ADDRESS, PATIENT_DETAILS_ARRAY } from '../../utils/Constant'
describe('Order Info test', () => {
  it('Truthy test', () => {
    const element = render(
      <OrderInfo
        patientDetails={PATIENT_DETAILS_ARRAY}
        labAddress={ADDRESS}
        totalAmountPaid={'2300'}
      />
    )
    expect(element).toBeTruthy()
  })
})
