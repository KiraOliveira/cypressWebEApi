/// <reference types="Cypress" />

import pageLogin from '../../support/page/pageLogin'

describe('Teste Funcional de Login', () => {
    it('Login com Sucesso', () => {
        pageLogin.acessarSite();
        pageLogin.loginComSucesso();
    });
    it('Login com Email Error', () => {
        pageLogin.acessarSite();
        pageLogin.loginComEmailInválido();
    });
    it('Login com Password Error', () => {
        pageLogin.acessarSite();
        pageLogin.loginComPasswordError();
    });
});