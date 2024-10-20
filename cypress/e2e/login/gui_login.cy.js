/// <reference types="Cypress" />

import pageLogin from '../../support/page/pageLogin'
import pageProducts from '../../support/page/pageProducts';
import pageCart from '../../support/page/pageCart';

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
    it.only('Realizando Compra com Sucesso', () => {
        pageLogin.acessarSite();
        pageLogin.loginComSucesso();

        pageProducts.screenProducts();
        pageProducts.firstProducts();
        pageProducts.secondProducts();
        pageProducts.thirdProducts();
        
        pageCart.screenCart();
        //pageCart.firstProduct();
    });

});