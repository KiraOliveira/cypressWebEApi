/// <reference types="Cypress" />

import loginElements from "../elements/loginElements";
//import login from '../../fixtures/login.json'
const url = Cypress.config("baseUrl")

class pageLogin {
    // Acessando o site - "saucedemo"
    acessarSite() {
        cy.visit(url)
    }
    loginComSucesso() {
        // Validando tela
        cy.get(loginElements.logoSwag()).should('exist').and('be.visible')
        cy.get(loginElements.telaLogin()).should('exist').and('be.visible')

        // Realizando do Login com Sucesso
        //cy.get(loginElements.fiedlUsername)
    }
}

export default new pageLogin();