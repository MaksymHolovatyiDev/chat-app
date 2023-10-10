import React from 'react';
import {AuthTitle} from './AuthTitle';
import {TestWrapper, link} from '@/helpers';
import {MainRoutes} from '@/environment';

describe('<AuthTitle />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <TestWrapper>
        <AuthTitle />
      </TestWrapper>,
    );

    cy.url().should('not.eq', link + MainRoutes.SignIn);

    cy.contains('Sign In').click();
    cy.url().should('eq', link + MainRoutes.SignIn);

    cy.contains('Sign Up').click();
    cy.url().should('eq', link + MainRoutes.SignUp);
  });
});
