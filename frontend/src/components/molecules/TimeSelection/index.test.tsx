import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import TimeSelection from './index'
describe('Lab Test Icon Component', () => {
  it('rendering component', () => {
    const wrapper = render(
      <TimeSelection chosenTime={'06.00am - 07.00am'} setTime={jest.fn} />
    )
    expect(wrapper).toBeTruthy
  })
})
