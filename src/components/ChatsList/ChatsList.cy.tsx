import React from 'react';
import {ChatsList} from './ChatsList';
import {TestWrapper} from '@/helpers';

describe('<ChatsList />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <TestWrapper>
        <ChatsList />
      </TestWrapper>,
    );
  });
});
