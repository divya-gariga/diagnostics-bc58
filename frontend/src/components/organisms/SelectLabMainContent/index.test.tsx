import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import SelectLabMainContent from './index'
import labIcon from '../../../assets/icons/altos.svg'

describe('SelectLabMainContent Component', () => {
  it('should match snapshot', () => {
    const tests = [
      {
        id: 1,
        labIcon: labIcon,
        labName: 'Los Altos Center Lab',
        time: '24 hrs',
        cost: '$1200',
        rating: '4.3',
        slots: 4,
      },
    ]

    const wrapper = render(<SelectLabMainContent tests={tests} />)
    expect(wrapper).toBeTruthy
  })
})
