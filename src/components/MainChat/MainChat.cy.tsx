import React from 'react';
import {MainChat} from './MainChat';
import {TestWrapper} from '@/helpers';

describe('<MainChat />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <TestWrapper>
        <MainChat />
      </TestWrapper>,
    );
  });
});
