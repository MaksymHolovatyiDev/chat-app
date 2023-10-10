import React from 'react'
import { AddFiles } from './AddFiles'

describe('<AddFiles />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AddFiles />)
  })
})