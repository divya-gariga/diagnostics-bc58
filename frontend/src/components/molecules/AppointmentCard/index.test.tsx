import { render } from '@testing-library/react'
import React from 'react'
import AppointmentCard from '.'
import { APPOINTMENT_CARD } from '../../utils/Constant'
import COVID from '../../../assets/icons/covid.svg'
describe('AppointmentCard test', () => {
  it('Should render', () => {
    const element = render(
      <AppointmentCard {...APPOINTMENT_CARD} icon={COVID} />
    )
    expect(element).toBeTruthy()
  })
})
