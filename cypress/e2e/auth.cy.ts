import cypress = require("cypress");
import { loginPage } from "../pages/Login";

describe('Auth, se realizan las validaciones del campo de autenticación', () => {

    beforeEach(() => {
        loginPage.visit();
        loginPage.isFormColpleted()
    });

    it('Formulario está completo', () => {
        loginPage.isFormColpleted()
    })

    it('Autenticación Valida', () => {
        let user = (Cypress.env('users') || []).find((user: any) => user.role === "admin");
        loginPage.login(user.username, user.password);
        cy.url().should('include', '/dhis-web-tracker-capture/#/');
    })

    it('Autenticación No valida Valida', () => {
        loginPage.login('admin', 'mala_constraseña');
        cy.get(loginPage.error).should('be.visible').contains('Invalid login information')
    })
});
