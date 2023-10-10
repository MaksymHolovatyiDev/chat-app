import React from 'react';
import {SidePanelUser} from './SidePanelUser';
import {TestWrapper} from '@/helpers';

describe('<SidePanelUser />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <TestWrapper>
        <SidePanelUser />
      </TestWrapper>,
    );
  });
});
