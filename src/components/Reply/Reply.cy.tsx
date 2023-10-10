import React from 'react';
import {Reply} from './Reply';
import {TestWrapper} from '@/helpers';

describe('<Reply />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <TestWrapper>
        <Reply />
      </TestWrapper>,
    );
  });
});
