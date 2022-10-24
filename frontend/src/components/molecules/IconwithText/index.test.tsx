import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import labIcon from '../../../assets/icons/labIcon.svg'
import IconWithText from './index'

describe('IconWithText Component', () => {
  it('should match snapshot', () => {
    const wrapper = render(<IconWithText text="1600+ Tests" icon={labIcon} />)
    expect(wrapper).toBeTruthy
  })
})
