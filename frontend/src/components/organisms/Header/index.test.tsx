import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from './index'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
describe('Header Component', () => {
  it('should render component', () => {
    const wrapper = render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>
    )
    var element = wrapper.getByTestId('userIcon')
    fireEvent.click(element)
    element = wrapper.getByTestId('profileMenuItem-7')
    fireEvent.click(element)
    element = wrapper.getByTestId('closeModal')
    fireEvent.click(element)
    element = wrapper.getByTestId('NavBarTabs')
    expect(element).toBeInTheDocument

    expect(wrapper).toBeInTheDocument
    expect(wrapper).toBeTruthy
  })
})
