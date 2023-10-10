import React from 'react';
import {AuthForm} from './AuthForm';
import {TestWrapper} from '@/helpers';

describe('<AuthForm />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <TestWrapper>
        <AuthForm />
      </TestWrapper>,
    );

    cy.get('input').eq(0).type('Max@user').should('be.visible');
    cy.get('input').eq(1).type('qweqwe').should('be.visible');
    cy.get('button').should('be.visible');
  });
});
