/// <reference types="Cypress" />

import pageLogin from '../../support/page/pageLogin'

describe('Teste Funcional de Login', () => {
    it('Login com Sucesso', () => {
        pageLogin.acessarSite();
    });
});