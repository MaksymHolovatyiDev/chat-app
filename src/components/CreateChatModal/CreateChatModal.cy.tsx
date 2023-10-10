import React from 'react';
import {CreateChatModal} from './CreateChatModal';
import {TestWrapper} from '@/helpers';

describe('<CreateChatModal />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <TestWrapper>
        <CreateChatModal />
      </TestWrapper>,
    );
  });
});
