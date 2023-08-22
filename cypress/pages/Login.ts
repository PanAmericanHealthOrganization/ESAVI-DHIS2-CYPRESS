class Login {

    public loginButton: string;
    public password: string;
    public user: string;
    public error: string;


    constructor () {
        this.loginButton = '//*[@id="submit"]';
        this.password = '#j_password';
        this.user = '#j_username';
        this.error = '#loginMessage'
    }

    public visit() {
        cy.visit('/');
    }

    //
    public isFormColpleted() {
        cy.get(this.user).should('be.visible')
        cy.get(this.password).should('be.visible')
        cy.xpath(this.loginButton).should('be.visible')
    }

    //
    public login(user: string, password: string) {
        cy.visit('/');
        cy.get(this.user).should('be.visible').type(user);
        cy.get(this.password).should('be.visible').type(password);
        cy.xpath(this.loginButton).should('be.visible').click();
    }


}


export const loginPage = new Login();