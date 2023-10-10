import React from 'react'
import { ImagePreview } from './ImagePreview'

describe('<ImagePreview />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ImagePreview />)
  })
})