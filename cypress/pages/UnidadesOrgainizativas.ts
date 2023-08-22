class OrgUnit {
    imputSearch = 'input[placeholder="Buscar"]'
    searchButton = 'button[class="btn btn-primary"]'
    orgUnitNode = 'div[class="orgunit-node"]'
    constructor () { }


    searchOrgUnit(orgUnitName: string) {
        cy.get(this.imputSearch).type(orgUnitName)
        cy.get(this.orgUnitNode).contains(orgUnitName).click()
    }

    selectOrgUnitByCode(orgUnitNode: string) {
        cy.get(this.orgUnitNode).contains(orgUnitNode).click()
    }

    selectOrgUnitByName(orgUnitNode: string) { }
}