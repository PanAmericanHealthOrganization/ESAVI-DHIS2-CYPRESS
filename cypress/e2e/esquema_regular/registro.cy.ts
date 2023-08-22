import { loginPage } from "../../pages/Login";
import { registroEsquemaRegularPage } from "../../pages/esquema_regular/RegistroERPage";


describe('Validaciones de registro de Usuario en Esquema Regular', function () {
    //
    beforeEach(function () {
        cy.session("login", () => {
            loginPage.login('admin', 'Userdhis2.');
        })
    })

    //
    it.skip('Validar formulario', () => {
        registroEsquemaRegularPage.visit();
        registroEsquemaRegularPage.seleccionarTipoIdentificacion('CEDULA IDENTIDAD');
        registroEsquemaRegularPage.setIdentificacion('0102486024');
        // cy.xpath(registroEsquemaRegularPage.botonBusqueda).should('be.visible');
    });

    it('Nombres -> () -> no permite vacios', () => {
        registroEsquemaRegularPage.visit();
        registroEsquemaRegularPage.setNombres(' ');
        cy.get('span:contains("El tamaño del nombre no es correcto")').should('be.visible');
    });

    it('APELLIDOS -> Nombre no debe tener números', () => {
        registroEsquemaRegularPage.visit();
        registroEsquemaRegularPage.setNombres('ROLANDO1');
        cy.get('span:contains("Sólo se permiten letras en el campo nombre")').should('be.visible');

    });

    it('APELLIDOS -> Nombre no debe tener números', () => {
        registroEsquemaRegularPage.visit();
        registroEsquemaRegularPage.setNombres('ROLANDO1');
        cy.get('span:contains("Sólo se permiten letras en el campo nombre")').should('be.visible');

    });

    it.skip('APELLIDOS -> CASIGÑA PARRA', () => {
        registroEsquemaRegularPage.visit();
        registroEsquemaRegularPage.setApellidos('ROLANDO CASIGNA');
        cy.get('span:contains("Sólo se permiten letras en el campo nombre")').should('be.not.visible');
    });
    it.skip('APELLIDOS -> APELLIDO1, Apellido con número', () => {
        registroEsquemaRegularPage.visit();
        registroEsquemaRegularPage.setNombres('ROLANDO CASIGNA2');
        cy.get('span:contains("Sólo se permiten letras en el campo apellido")').should('be.visible');

    });
    it.skip('Validar Nombres', () => {
        registroEsquemaRegularPage.visit();
        registroEsquemaRegularPage.setNombres('J');
    });



});
