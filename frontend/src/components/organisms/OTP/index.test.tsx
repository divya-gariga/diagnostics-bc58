import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event/'
import "@testing-library/jest-dom";
import React from 'react'
import OTP from '.';

describe('Login', () => {
  it('Truthy Test', async() => {
    const ele = render(
      <OTP
        buttonClick={() => {
          console.log('clicked')
        }}
      />
    )
    fireEvent.click(screen.getByText('Verify'), { button: 0 })
    // await userEvent.type(screen.getByPlaceholderText('1234332487'), 'S')
    // expect(screen.getByPlaceholderText('1234332487')).toHaveValue('S')
    expect(ele).toBeTruthy()
  })
})
