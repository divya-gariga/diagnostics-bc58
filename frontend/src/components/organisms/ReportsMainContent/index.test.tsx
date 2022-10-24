import React from 'react'
import { render, screen } from '@testing-library/react'
import ReportsMainContent from '.'

test('My Reports UI Render', () => {
  render(<ReportsMainContent />)

  const headingEl = screen.getByTestId('heading')
  expect(headingEl.textContent).toBe('Reports')

  const upcomingEl = screen.getByTestId('upcoming')
  expect(upcomingEl.textContent).toBe('Upcoming Reports')

  const recentEl = screen.getByTestId('recent')
  expect(recentEl.textContent).toBe('Recent Reports')
})
