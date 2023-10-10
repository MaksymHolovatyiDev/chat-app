import React from 'react';
import {CreateNewChat} from './CreateNewChat';
import {TestWrapper} from '@/helpers';

describe('<CreateNewChat />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <TestWrapper>
        <CreateNewChat />
      </TestWrapper>,
    );

    cy.get('button').eq(0).click();

  });
});
