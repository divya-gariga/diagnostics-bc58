import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import TestReport from '.'

import {
  LAB_NAME,
  TEST_REPORT_DATE,
  TEST_REPORT_TEST_NAME,
  TEST_REPORT_TIME,
} from '../../utils/Constant'
describe('Test Report Test', () => {
  it('Truthy test', () => {
    const element = render(
      <TestReport
        labName={LAB_NAME}
        testName={TEST_REPORT_TEST_NAME}
        isCompleted={false}
      />
    )
    expect(element).toBeTruthy()
  })
  it('Test Report available to download', () => {
    const element = render(
      <TestReport
        labName={LAB_NAME}
        testName={TEST_REPORT_TEST_NAME}
        isCompleted={true}
        date={TEST_REPORT_DATE}
        time={TEST_REPORT_TIME}
        onDownload={() => {
          console.log('clicked Downloaded')
        }}
      />
    )
    fireEvent.click(screen.getByTestId('download-icon'), { button: 0 })
    expect(element).toBeTruthy()
  })
})
