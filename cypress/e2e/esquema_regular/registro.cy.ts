import { loginPage } from "../../pages/Login";
import { registroModuloCentinela } from "../../pages/centinela/RegistroModuloCentinelaPage";
import { CentinelaPatientBuilder } from "../../pages/interfaces/CentinelaPatient";


describe('Validaciones de registro de Usuario en Esquema Regular', function () {
    //
    beforeEach(function () {
        cy.session("login", () => {
            let user = (Cypress.env('users') || []).find((user: any) => user.role === "admin");
            loginPage.login(user.username, user.password);
        })
    })

    //
    it('Validar formulario caso 1', () => {
        registroModuloCentinela.visit();
        const centinela = new CentinelaPatientBuilder().withApellidos('Gonzalez')
            .withNombres('Juan')
            .withNumeroIdentidad('123456789').withFechaNacimiento('01-01-1990')
            .withSexo('Masculino').withMunicipio('Municipio')
            .withDireccion('Direccion').withCorreoElectronico('gqctssnep3vo@example.com')
            .withNumeroTelefono('123456789')
            .build();

        registroModuloCentinela.fullForm(centinela);
    });



});
