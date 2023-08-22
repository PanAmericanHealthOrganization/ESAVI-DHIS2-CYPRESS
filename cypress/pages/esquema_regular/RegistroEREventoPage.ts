
import { AppMenu } from "../AppMenu";
import { loginPage } from "../Login";

class RegistroEventoEsquemaRegularPage {


    public pageURL: string;

    public seccionAtencion: string
    public fechaVacunacion: string
    public uniCodigo: string

    // Vacunador
    public seccionVacunador: string
    public identificacionVacunador: string
    public nombresVacunador: string
    public buscarVacunador: string


    constructor () {
        this.pageURL = '/dhis-web-tracker-capture/index.html#/dashboard?tei=gkTXLzOuSCE&program=VZOdJ8z1PbL&ou=zldhN2PRvGT'

        // atención
        this.seccionAtencion = '//*[@id="form_esquema"]/div/fieldset[1]'
        this.fechaVacunacion = '//*[@id="Hea3cujMUCN-Zg3TTwdEZp3-val"]';
        this.uniCodigo = '//*[@id="Hea3cujMUCN-wQiPlPXKGYO-val"]';

        // 
        this.seccionVacunador = '//*[@id="form_esquema"]/div/fieldset[2]/legend';
        this.identificacionVacunador = '//*[@id="Hea3cujMUCN-d89LKQ6toXt-val"]';
        this.nombresVacunador = '//*[@id="Hea3cujMUCN-rtBgpPA5nCA-val"]';
        this.buscarVacunador = '//*[@id="form_esquema"]/div/fieldset[2]/table/tbody/tr[1]/td/div[1]/button';
    }

    public visit() {
        cy.visit('/');
        loginPage.login('admin', 'Userdhis2.');
        cy.visit(this.pageURL);
    }

    // solo es valido con los campos predeterminados.
    public isFormColpleted() {

    }

}

export const registroEventoEsquemaRegularPage = new RegistroEventoEsquemaRegularPage();