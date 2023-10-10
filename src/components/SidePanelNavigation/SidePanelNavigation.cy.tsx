import React from 'react';
import {SidePanelNavigation} from './SidePanelNavigation';
import {TestWrapper, link} from '@/helpers';
import {MainRoutes} from '@/environment';

describe('<SidePanelNavigation />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <TestWrapper>
        <SidePanelNavigation />
      </TestWrapper>,
    );

    cy.url().should('not.eq', link + MainRoutes.Chat);

    cy.contains('Home').should('be.visible');
    cy.contains('Contact').should('be.visible');
    cy.contains('Notification').should('be.visible');
    cy.contains('Calendar').should('be.visible');
    cy.contains('Settings').should('be.visible');
    cy.contains('Log out').should('be.visible');

    cy.contains('Chat').should('be.visible').click();

    cy.url().should('eq', link + MainRoutes.Chat);
  });
});
