
import { loginPage } from "../Login";

class RegistroEsquemaRegularPage {

    // atributos del formulario
    private tipoIdentificacion: string
    private numeroIdentificacion: string
    private nombres: string
    private apellidos: string
    private fechaNacimiento: string
    private sexo: string
    private estadoCivil: string
    private nacionalidad: string
    private autoIdentificacion: string
    private nacionalidadEtnicaPueblo: string
    private puebloKichwa: string

    // elementos
    public botonBusqueda: string

    constructor () {
        this.tipoIdentificacion = '//*[@id="mainPage"]/div[2]/div[3]/div/div/div[1]/form[1]/div/div[2]/div[2]/d2-custom-registration-form/div/table/tbody/tr[1]/td[2]/span[1]/div[1]/a/span[1]';
        this.numeroIdentificacion = '//*[@id="mainPage"]/div[2]/div[3]/div/div/div[1]/form[1]/div/div[2]/div[2]/d2-custom-registration-form/div/table/tbody/tr[2]/td[2]/div/input';
        this.nombres = '//*[@id="mainPage"]/div[2]/div[3]/div/div/div[1]/form[1]/div/div[2]/div[2]/d2-custom-registration-form/div/table/tbody/tr[5]/td[2]/input';
        this.apellidos = '//*[@id="mainPage"]/div[2]/div[3]/div/div/div[1]/form[1]/div/div[2]/div[2]/d2-custom-registration-form/div/table/tbody/tr[6]/td[2]/input';
        this.fechaNacimiento = '//*[@id="mainPage"]/div[2]/div[3]/div/div/div[1]/form[1]/div/div[2]/div[2]/d2-custom-registration-form/div/table/tbody/tr[7]/td[2]/span[1]/input';
        this.sexo = '//*[@id="mainPage"]/div[2]/div[3]/div/div/div[1]/form[1]/div/div[2]/div[2]/d2-custom-registration-form/div/table/tbody/tr[8]/td[2]/span[1]/div[1]/a';
        this.estadoCivil = '';
        this.nacionalidad = '';
        this.autoIdentificacion = '';
        this.nacionalidadEtnicaPueblo = '';
        this.puebloKichwa = '';

        // 
        this.botonBusqueda = '//*[@id="btnBuscar"]'
    }

    public visit() {
        cy.visit('/dhis-web-tracker-capture/index.html#/');
        cy.xpath('//*[@id="searchIcon"]').click()
        cy.xpath('//*[@id="searchField"]').should('be.visible').type('Huaca (000242)');
        cy.xpath('//*[@id="searchSpan"]/input[2]').should('be.visible').click();
        // 

        // SELECCIÓN DEL PROGRAMA
        // cuando se presenta seleccionado el valor predetrminado
        cy.xpath('//*[@id="mainPage"]/div[2]/div[2]/div[1]/div/a/abbr').then(e => {
            cy.xpath('//*[@id="mainPage"]/div[2]/div[2]/div[1]/div/a/abbr').click();
        })

        // clic en botón para listado de programas
        cy.xpath('//*[@id="mainPage"]/div[2]/div[2]/div[1]/div/a/span[3]').should('be.visible').click();
        cy.xpath('//*[@id="mainPage"]/div[2]/div[2]/div[1]/div/div/div/input').should('be.visible').type('ESQUEMA REGULAR', { timeout: 1000 });
        cy.xpath('//*[@id="ui-select-choices-row-1-0"]/div').should('be.visible').click();

        // BOTON DE REGISTRO
        cy.xpath('//*[@id="mainPage"]/div[2]/div[2]/div[2]/ul/li[3]/a').should('be.visible').click();
        cy.xpath('//*[@id="mainPage"]/div[2]/div[3]/div/div/div[1]/form[1]/div/div[1]/div/table/tbody/tr[1]/td[2]/input').should('be.visible')
    }

    // solo es valido con los campos predeterminados.
    public isFormColpleted() {

    }

    public seleccionarTipoIdentificacion(tipo: string) {
        cy.xpath('//*[@id="mainPage"]/div[2]/div[3]/div/div/div[1]/form[1]/div/div[2]/div[2]/d2-custom-registration-form/div/table/tbody/tr[1]/td[2]/span[1]/div[1]/a/span[3]/b').click();
        cy.xpath('//*[@id="mainPage"]/div[2]/div[3]/div/div/div[1]/form[1]/div/div[2]/div[2]/d2-custom-registration-form/div/table/tbody/tr[1]/td[2]/span[1]/div[1]/div/div/input').type(`${tipo}{enter}`);

    }

    public setIdentificacion(numero: string) {
        cy.xpath(this.numeroIdentificacion).should('be.visible').type(`${numero}`);

    }

    public setNombres(nombres: string) {
        cy.xpath(this.nombres).type(nombres);

    }

    public setApellidos(apellidos: string) {
        cy.xpath(this.apellidos).type(apellidos);
    }


}

export const registroEsquemaRegularPage = new RegistroEsquemaRegularPage();