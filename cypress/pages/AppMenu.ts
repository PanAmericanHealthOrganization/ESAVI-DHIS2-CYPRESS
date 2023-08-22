export class AppMenu {
    public botonMenu: string;
    public inputSearch: string;
    public appId: string;
    //
    constructor (appId: string) {
        this.botonMenu = '//*[@id="dhis2-app-root"]/div/header/div[1]/div[6]/button/svg';
        this.inputSearch = 'input[id="filter"]';
        this.appId = appId;
    }

    goToApp(appName: string) {
        cy.xpath(this.botonMenu).click();
        cy.get(this.inputSearch).should('be.visible').type(appName);
        cy.xpath(this.appId).should('contain', appName).click();
    }

}

