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
    it.skip('shows an error message on invalid credentials', () => {});
    it.skip('logs in successfully', () => {});
});
