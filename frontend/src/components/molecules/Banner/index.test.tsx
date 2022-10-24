import { render } from '@testing-library/react'
import React from 'react'
import Banner from '.'
import {
  BANNER_BUTTON_TEXT,
  BANNER_CAPTION,
  BANNER_HEADLINE,
} from '../../utils/Constant'
describe('Banner test', () => {
  it('Truthy test', () => {
    const element = render(
      <Banner
        headline={BANNER_HEADLINE}
        caption={BANNER_CAPTION}
        buttonText={BANNER_BUTTON_TEXT}
      />
    )
    expect(element).toBeTruthy()
  })
  it('onclick function', () => {
    const element = render(
      <Banner
        headline={BANNER_HEADLINE}
        caption={BANNER_CAPTION}
        buttonText={BANNER_BUTTON_TEXT}
        onClick={() => {
          console.log('clicked banner')
        }}
      />
    )
    expect(element).toBeTruthy()
  })
})
