import { render, screen } from '@testing-library/react'
import React from 'react'

import config from '../../../../../template/site.config'
import AppPage from '.'

describe('Components/AppPage', () => {
  const Component = () => {
    return <div>Content</div>
  }

  it('should', () => {
    render(<AppPage Component={Component} config={config} />)

    expect(screen.getByText('Content')).toBeInTheDocument()
  })
})
