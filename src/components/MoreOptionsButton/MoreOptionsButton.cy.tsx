import {MoreOptionsButton} from './MoreOptionsButton';

describe('<MoreOptionsButton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MoreOptionsButton />);

    cy.get('button').should('be.visible');
  });
});
