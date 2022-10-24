import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import LabDetailsCard from '.'
import labIcon from '../../../assets/icons/altos.svg'
import theme from '../../../theme'

it('renders the unselected lab detail card', () => {
  render(
    <LabDetailsCard
      id={1}
      labIcon={labIcon}
      labName={'Los Altos Center Lab'}
      time={'24 hrs'}
      cost={'$1200'}
      selected={false}
      rating={'4.3'}
      slots={4}
    ></LabDetailsCard>
  )
  const labDetailElement = screen.getByTestId('lab-details')
  const selectedIconElement = screen.getByTestId('selected-icon')
  expect(labDetailElement).toBeInTheDocument()
  expect(selectedIconElement).toHaveStyle({
    display: 'none',
  })
})

it('renders the selected lab detail card', () => {
  render(
    <LabDetailsCard
      id={2}
      labIcon={labIcon}
      labName={'Los Altos Center Lab'}
      time={'24 hrs'}
      cost={'$1200'}
      selected={true}
      rating={'4.3'}
      slots={4}
    ></LabDetailsCard>
  )
  const labDetailElement = screen.getByTestId('lab-details')
  const selectedIconElement = screen.getByTestId('selected-icon')
  expect(labDetailElement).toHaveStyle({
    border: `2px solid ${theme.palette.secondary.main}`,
  })
  expect(selectedIconElement).toHaveStyle({
    display: 'flex',
  })
})
