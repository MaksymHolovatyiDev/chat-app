import React from 'react'
import { ChatHeaderMainButton } from './ChatHeaderMainButton'

describe('<ChatHeaderMainButton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ChatHeaderMainButton />)
  })
})