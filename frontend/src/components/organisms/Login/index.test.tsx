import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event/'
import '@testing-library/jest-dom'
import React from 'react'
import Login from '.'
import { MemoryRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import crypto from '@trust/webcrypto'
describe('Login', () => {
  beforeAll(() => {
    window.crypto = crypto
  })
  it('Truthy Test', async () => {
    const ele = render(
      <MemoryRouter>
        <Auth0Provider
          clientId={process.env.CLIENTID!}
          domain={process.env.DOMAIN!}
          redirectUri={window.location.origin}
        >
          <Login
            buttonClick={() => {
              console.log('clicked')
            }}
          />
        </Auth0Provider>
      </MemoryRouter>
    )
    fireEvent.click(screen.getByText('Continue'), { button: 0 })
    await userEvent.type(screen.getByPlaceholderText('eg: Smith'), 'S')
    console.log(screen.getByPlaceholderText('eg: Smith'))
    expect(screen.getByPlaceholderText('eg: Smith')).toHaveValue('S')
    await userEvent.type(screen.getByPlaceholderText('eg: Patrick'), 'SS')
    expect(screen.getByPlaceholderText('eg: Patrick')).toHaveValue('SS')
    await userEvent.type(
      screen.getByPlaceholderText('eg: patricksmith@gmail.com'),
      'SS@'
    )
    expect(
      screen.getByPlaceholderText('eg: patricksmith@gmail.com')
    ).toHaveValue('SS@')
    expect(ele).toBeTruthy()
  })
})
