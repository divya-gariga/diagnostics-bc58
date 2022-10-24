import React from 'react'
import { render, screen } from '@testing-library/react'
import AppointmentsMainContent from '.'

test('My Appointments UI Render', () => {
  const wrapper = render(<AppointmentsMainContent />)

  expect(wrapper).toBeInTheDocument
  expect(wrapper).toBeTruthy
})
