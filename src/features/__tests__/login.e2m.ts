const fakeUser = {
    id: 1,
    name: 'Leeloo Dallas',
    email: 'leeloo@fhloston.com',
    picture: '/images/leeloo.png',
};

describe('Login', () => {
    beforeEach(() => {
        cy.visit('/login');
    });

    it('shows an error message on invalid email and password', () => {
        cy.get('#email').type('invalid-email');
        cy.get('#password').type('short');
        cy.get('button[type="submit"]').click();

        cy.contains('Please enter a valid email');
        cy.contains('Password must be at least 6 characters');
    });

    it('shows an error message on invalid credentials', () => {
        cy.visit('/login', {
            onBeforeLoad(win) {
                win.__authAdapter = {
                    authenticate: async () => new Error('Invalid credentials'),
                };
            },
        });

        cy.get('#email').type('wrong@email.com');
        cy.get('#password').type('wrongpassword');
        cy.get('button[type="submit"]').click();

        cy.contains('Invalid credentials');
    });

    it('logs in successfully', () => {
        cy.visit('/login', {
            onBeforeLoad(win) {
                win.__authAdapter = {
                    authenticate: async () => ({
                        token: 'fake-token',
                        user: fakeUser,
                    }),
                };
            },
        });

        cy.get('#email').type(fakeUser.email);
        cy.get('#password').type('validpassword');
        cy.get('button[type="submit"]').click();

        cy.url().should('eq', Cypress.config().baseUrl + '/');
    });
});
