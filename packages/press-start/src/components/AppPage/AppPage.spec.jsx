import { render } from '@testing-library/react'
import React from 'react'

import AppPage from '.'

describe('Components/AppPage', () => {
  it('should', () => {
    render(<AppPage />)

    expect(1).toEqual(1)
  })
})
