import App from '../../../App';
import { AuthAdapter, AuthAdapterProvider } from '../AuthProvider';

describe('Authentication', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it('Authenticates successfully with valid credentials', () => {
        const fakeAuthAdapter: AuthAdapter = {
            authenticate() {
                return Promise.resolve({
                    token: 'fhloston-paradise-token',
                    user: {
                        id: 1,
                        name: 'Korben Dallas',
                        email: 'korben@fhloston.com',
                        picture: '/korben.jpg',
                    },
                });
            },
        };

        cy.mount(
            <AuthAdapterProvider adapter={fakeAuthAdapter}>
                <App />{' '}
            </AuthAdapterProvider>,
            '/',
        );

        cy.findByRole('heading', { name: /fhloston paradise/i }).should('be.visible');

        cy.findByRole('textbox', { name: /email/i }).type('korben@fhloston.com');
        cy.findByLabelText(/password/i).type('securepassword');
        cy.findByRole('button', { name: /login/i }).click();

        cy.url().should('equal', '/');
        cy.contains('Korben Dallas').should('be.visible');
    });
});
