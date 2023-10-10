import React from 'react';
import {MainChatInput} from './MainChatInput';
import {TestWrapper} from '@/helpers';

describe('<MainChatInput />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <TestWrapper>
        <MainChatInput />
      </TestWrapper>,
    );

    cy.get('textarea').type('qwe');
    cy.contains('qwe').should('be.visible');
    cy.get('button[type="submit"]').click();
    cy.contains('qwe').should('not.exist');
  });
});
