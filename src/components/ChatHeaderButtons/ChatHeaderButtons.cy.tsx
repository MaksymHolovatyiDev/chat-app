import React from 'react'
import { ChatHeaderButtons } from './ChatHeaderButtons'

describe('<ChatHeaderButtons />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ChatHeaderButtons />)
  })
})