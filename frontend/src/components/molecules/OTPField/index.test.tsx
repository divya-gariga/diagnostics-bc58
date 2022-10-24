import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import OTPField from '.'
describe('OTP field component', () => {
  it('should render the logo', () => {
    const wrapper = render(<OTPField />)
    const otpFields = screen.getAllByRole('textbox')
    fireEvent.change(otpFields[0], { target: { value: '1' } })
    fireEvent.change(otpFields[1], { target: { value: '2' } })
    fireEvent.change(otpFields[2], { target: { value: '3' } })
    fireEvent.change(otpFields[3], { target: { value: '3' } })
    expect(wrapper).toBeTruthy
  })
})
