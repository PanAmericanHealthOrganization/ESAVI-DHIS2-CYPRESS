import { loginPage } from "../../pages/Login";
import { registroEventoEsquemaRegularPage } from "../../pages/esquema_regular/RegistroEREventoPage";

describe('Validación de registro de evento de datos de esquema regular', () => {

    //
    beforeEach(function () {
        cy.session("ingresoEvento", () => {
            registroEventoEsquemaRegularPage.visit();
            cy.xpath(registroEventoEsquemaRegularPage.seccionAtencion).should('be.visible');
        })
    })

    //
    it('ATENCIÓN -> La sección debe existir', () => {
        cy.visit(registroEventoEsquemaRegularPage.pageURL)
        cy.xpath(registroEventoEsquemaRegularPage.seccionAtencion).should('exist');
    });
    it('ATENCIÓN -> La fecha de vacunación debe tener valor por defecto', () => {
        cy.visit(registroEventoEsquemaRegularPage.pageURL)
        cy.xpath(registroEventoEsquemaRegularPage.fechaVacunacion).invoke('val').should('not.be.empty');
    });

    it('ATENCIÓN -> La fecha de vacunación debe tener valor por defecto y ser editable', () => {
        cy.visit(registroEventoEsquemaRegularPage.pageURL)
        cy.xpath(registroEventoEsquemaRegularPage.fechaVacunacion).invoke('val').should('not.be.empty');
    });

    it('ATENCIÓN -> Lugar de vacunación debe tener valor predeterminado ', () => {
        cy.xpath(registroEventoEsquemaRegularPage.uniCodigo).invoke('val').should('not.be.empty');
    });

    /*
        it('ATENCIÓN -> Lugar de vacunación debe tener valor predeterminado ', () => {
            cy.xpath(registroEventoEsquemaRegularPage.uniCodigo).should('be.readonly');
        });
        */

});
