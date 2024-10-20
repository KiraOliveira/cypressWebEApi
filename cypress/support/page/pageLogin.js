/// <reference types="Cypress" />

import loginElements from "../elements/loginElements";
import login from '../../fixtures/login.json'
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
        cy.get(loginElements.fiedlUsername()).should('exist').and('be.visible').type(login.username.sucess, { log: false })
        cy.get(loginElements.fielPassword()).should('exist').and('be.visible').type(login.password.sucess, { log: false })

        //Clicar no Botão de Login
        cy.get(loginElements.buttonLogin()).should('exist').and('be.visible').and('contain.text', '').click() 

        // Validando que o Login foi realizado com Sucesso      
        cy.get(loginElements.loginSucess()).should('exist').and('be.visible').and('contain.text', 'Products')
    }
    loginComEmailInválido() {
        // Validando tela
        cy.get(loginElements.logoSwag()).should('exist').and('be.visible')
        cy.get(loginElements.telaLogin()).should('exist').and('be.visible')

        // Realizando do Login com Sucesso
        cy.get(loginElements.fiedlUsername()).should('exist').and('be.visible').type(login.username.error, { log: false })
        cy.get(loginElements.fielPassword()).should('exist').and('be.visible').type(login.password.sucess, { log: false })

        //Clicar no Botão de Login
        cy.get(loginElements.buttonLogin()).should('exist').and('be.visible').and('contain.text', '').click() 

        // Mensagem de Erro
        cy.get(loginElements.mensageError()).should('exist').and('be.visible').and('contain.text', login.mesage.error)
    }
    loginComPasswordError() {
        // Validando tela
        cy.get(loginElements.logoSwag()).should('exist').and('be.visible')
        cy.get(loginElements.telaLogin()).should('exist').and('be.visible')

        // Realizando do Login com Sucesso
        cy.get(loginElements.fiedlUsername()).should('exist').and('be.visible').type(login.username.sucess, { log: false })
        cy.get(loginElements.fielPassword()).should('exist').and('be.visible').type(login.password.error, { log: false })

        //Clicar no Botão de Login
        cy.get(loginElements.buttonLogin()).should('exist').and('be.visible').and('contain.text', '').click() 

        // Mensagem de Erro
        cy.get(loginElements.mensageError()).should('exist').and('be.visible').and('contain.text', login.mesage.error)
    }
}

export default new pageLogin();