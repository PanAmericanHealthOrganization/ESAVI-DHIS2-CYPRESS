import { ICentinelaPatient } from "../interfaces/CentinelaPatient";


class RegistroModuloCentinelaPage {

    // atributos del formulario
    private unidadOrganizativa: string;
    private fechaInscripcion: string;
    private identificadorUnico: string;
    private numeroIdentidad: string;
    private nombres: string;
    private apellidos: string;
    private fechaNacimiento: string;
    private sexo: string;
    private municipio: string;
    private direccion: string;
    private correoElectronico: string;
    private telefonoMovil: string;

    // elementos
    public botonBusqueda: string;

    constructor () {
        this.unidadOrganizativa = `//*[@id="mainPage"]/div[2]/div[3]/div/div/div[1]/form[1]/div/div[1]/table/tbody/tr[1]/td[2]/input`;
        this.fechaInscripcion = `//*[@id="mainPage"]/div[2]/div[3]/div/div/div[1]/form[1]/div/div[1]/table/tbody/tr[2]/td[2]/input[1]`;
        this.identificadorUnico = `//*[@id="mainPage"]/div[2]/div[3]/div/div/div[1]/form[1]/div/div[2]/table/tbody/tr[1]/td[2]/ng-form/span/span/input`;
        this.numeroIdentidad = `//*[@id="mainPage"]/div[2]/div[3]/div/div/div[1]/form[1]/div/div[2]/table/tbody/tr[2]/td[2]/ng-form/span/span/input`;
        this.nombres = `//*[@id="mainPage"]/div[2]/div[3]/div/div/div[1]/form[1]/div/div[2]/table/tbody/tr[3]/td[2]/ng-form/span/span/input`;
        this.apellidos = `//*[@id="mainPage"]/div[2]/div[3]/div/div/div[1]/form[1]/div/div[2]/table/tbody/tr[4]/td[2]/ng-form/span/span/input`;
        this.fechaNacimiento = `//*[@id="mainPage"]/div[2]/div[3]/div/div/div[1]/form[1]/div/div[2]/table/tbody/tr[5]/td[2]/ng-form/span/span/input`;
        this.sexo = `//*[@id="mainPage"]/div[2]/div[3]/div/div/div[1]/form[1]/div/div[2]/table/tbody/tr[6]/td[2]/ng-form/span/span[1]/d2-option-list/div/div[1]`;
        this.municipio = `//*[@id="mainPage"]/div[2]/div[3]/div/div/div[1]/form[1]/div/div[2]/table/tbody/tr[7]/td[2]/ng-form/span/span[1]/d2-option-list/div/div[1]`;
        this.direccion = `//*[@id="mainPage"]/div[2]/div[3]/div/div/div[1]/form[1]/div/div[2]/table/tbody/tr[8]/td[2]/ng-form/span/span/textarea`;
        this.correoElectronico = `//*[@id="mainPage"]/div[2]/div[3]/div/div/div[1]/form[1]/div/div[2]/table/tbody/tr[9]/td[2]/ng-form/span/span/input`;
        this.telefonoMovil = `//*[@id="mainPage"]/div[2]/div[3]/div/div/div[1]/form[1]/div/div[2]/table/tbody/tr[10]/td[2]/ng-form/span/span/input`;

        // 
        this.botonBusqueda = '//*[@id="mainPage"]/div[2]/div[2]/div[2]/ul/li[3]'
    }

    public visit() {
        cy.visit('/dhis-web-tracker-capture/index.html#/');
        cy.xpath('//*[@id="searchIcon"]').click()
        cy.xpath('//*[@id="searchField"]').should('be.visible').type('Demo');
        cy.xpath('//*[@id="searchSpan"]/input[2]').should('be.visible').click();
        // 

        // SELECCIÓN DEL PROGRAMA
        // cuando se presenta seleccionado el valor predetrminado
        cy.xpath('//*[@id="mainPage"]/div[2]/div[2]/div[1]/div/a/abbr').then(e => {
            cy.xpath('//*[@id="mainPage"]/div[2]/div[2]/div[1]/div/a/abbr').click();
        })

        // clic en botón para listado de programas
        cy.xpath('//*[@id="mainPage"]/div[2]/div[2]/div[1]/div/a/span[3]').should('be.visible').click();
        cy.xpath('//*[@id="mainPage"]/div[2]/div[2]/div[1]/div/div/div/input').should('be.visible').type('Módulo Centinela', { timeout: 1000 });
        cy.xpath('//*[@id="ui-select-choices-row-1-0"]/div').should('be.visible').click();

        // BOTON DE REGISTRO
        cy.xpath('//*[@id="mainPage"]/div[2]/div[2]/div[2]/ul/li[3]').should('be.visible').click();
        ///cy.xpath('//*[@id="mainPage"]/div[2]/div[3]/div/div/div[1]/form[1]/div/div[1]/div/table/tbody/tr[1]/td[2]/input').should('be.visible')
    }

    // solo es valido con los campos predeterminados.
    public isFormColpleted() {

    }

    public seleccionarTipoIdentificacion(tipo: string) {
        cy.xpath('//*[@id="mainPage"]/div[2]/div[3]/div/div/div[1]/form[1]/div/div[2]/div[2]/d2-custom-registration-form/div/table/tbody/tr[1]/td[2]/span[1]/div[1]/a/span[3]/b').click();
        cy.xpath('//*[@id="mainPage"]/div[2]/div[3]/div/div/div[1]/form[1]/div/div[2]/div[2]/d2-custom-registration-form/div/table/tbody/tr[1]/td[2]/span[1]/div[1]/div/div/input').type(`${tipo}{enter}`);

    }

    public setIdentificacion(numero: string) {
        cy.xpath(this.numeroIdentidad).should('be.visible').type(`${numero}`);

    }

    public setNombres(nombres: string) {
        cy.xpath(this.nombres).should('be.visible').type(nombres);

    }
    public setApellidos(apellidos: string) {
        cy.xpath(this.apellidos).should('be.visible').type(apellidos);
    }

    public setNumeroIdentidad(numeroIdentidad: string) {
        cy.xpath(this.numeroIdentidad).should('be.visible').type(numeroIdentidad);
    }
    public setFechaNacimiento(fechaNacimiento: string) {
        cy.xpath(this.fechaNacimiento).should('be.visible').type(fechaNacimiento).blur();
        cy.xpath('//*[@id="ui-datepicker-div"]/div[3]/button[2]').should('be.visible').click();
    }
    public selectSexo(sexo: string) {
        cy.xpath(`//*[@id="mainPage"]/div[2]/div[3]/div/div/div[1]/form[1]/div/div[2]/table/tbody/tr[6]/td[2]/ng-form/span/span[1]/d2-option-list/div/div`).should('be.visible').click();
        cy.xpath(`//*[@id="mainPage"]/div[2]/div[3]/div/div/div[1]/form[1]/div/div[2]/table/tbody/tr[6]/td[2]/ng-form/span/span[1]/d2-option-list/div/div[2]/div[1]/input`).type(sexo).click();
        cy.xpath(this.sexo).should('be.visible').type(sexo);
    }
    public selectMunicipio(municipio: string) {
        cy.xpath(this.municipio).should('be.visible').type(municipio);
    }
    public setSDireccion(direccion: string) {
        cy.xpath(this.direccion).should('be.visible').type(direccion);
    }
    public setCorreoElectronico(correoElectronico: string) {
        cy.xpath(this.correoElectronico).should('be.visible').type(correoElectronico);
    }
    public setTelefonoMovil(telefonoMovil: string) {
        cy.xpath(this.telefonoMovil).should('be.visible').type(telefonoMovil);
    }

    public fullForm(patien: ICentinelaPatient) {
        this.setNombres(patien.nombres);
        this.setApellidos(patien.apellidos);
        this.setNumeroIdentidad(patien.numeroIdentidad);
        this.setFechaNacimiento(patien.fechaNacimiento);
        this.selectSexo(patien.sexo);
        this.selectMunicipio(patien.municipio);
        this.setSDireccion(patien.direccion);
        this.setCorreoElectronico(patien.correoElectronico);
        this.setTelefonoMovil(patien.numeroTelefono);
    }
}

export const registroModuloCentinela = new RegistroModuloCentinelaPage();