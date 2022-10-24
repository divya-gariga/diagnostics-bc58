import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import UserProfile from './index'

describe('User Component', () => {
  it('should ', () => {
    const test1 = jest.fn()
    const test2 = jest.fn()
    const wrapper = render(
      <UserProfile handleClose={test1} handleLogOut={test2} />
    )
    var element = wrapper.getByTestId('closeModal')
    fireEvent.click(element)
    expect(test1).toBeCalled
    element = wrapper.getByTestId('profileMenuItem-7')
    fireEvent.click(element)
    expect(test2).toBeCalled
    element = wrapper.getByTestId('profileMenuItem-6')
    fireEvent.click(element)
    expect(wrapper).toBeTruthy
  })
})
