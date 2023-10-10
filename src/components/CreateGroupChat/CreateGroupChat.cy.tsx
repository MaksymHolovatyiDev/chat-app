import React from 'react';
import {CreateGroupChat} from './CreateGroupChat';

describe('<CreateGroupChat />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CreateGroupChat />);

    cy.contains('Chat name').should('be.visible');
    cy.get('input').type('qwe').should('be.visible');
    cy.get('button').should('be.visible');
  });
});
