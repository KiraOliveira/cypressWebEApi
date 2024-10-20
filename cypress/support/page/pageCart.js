/// <reference types="Cypress" />

import cartElements from '../elements/cartElements'

class pageCart {
    // Screen Cart
    screenCart() {
        cy.get(cartElements.cartShopping).should('exist').and('be.visible').click()
        /*cy.get(cartElements.logoProducts).should('exist').and('be.visible').and('contain.text', 'Swag Labs')
        cy.get(cartElements.titleCart).should('exist').and('be.visible').and('contain.text', 'Your Cart')
        cy.get(cartElements.cartContents).should('exist').and('be.visible')
        cy.get(cartElements.quantTitleProduct).should('exist').and('be.visible').and('contain.text', 'QTY')
        cy.get(cartElements.description).should('exist').and('be.visible').and('contain.text', 'Description')*/
    }
   /* firstProduct() {
        cy.get(cartElements.quantItemFirst).should('exist').and('be.visible').and('contain.text', '1')
        cy.get(cartElements.itemDescriptionNameFirst).should('exist').and('be.visible').and('contain.text', 'Sauce Labs Backpack')
        cy.get(cartElements.itemDescriptionFirst).should('exist').and('be.visible').and('contain.text', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')
        cy.get(cartElements.itemPriceFirst).should('exist').and('be.visible').and('be.visible').and('contain.text', '$29.99')
        cy.get(cartElements.buttonRemoveFirst).should('exist').and('be.visible').and('be.visible').and('contain.text', 'Remove')
    }
    secondProduct() {
        cy.get(cartElements.quantItemSecond).should('exist').and('be.visible').and('contain.text', '1')
        cy.get(cartElements.itemDescriptionNameSecond).should('exist').and('be.visible').and('contain.text', 'Sauce Labs Backpack')
        cy.get(cartElements.itemDescriptionSecond).should('exist').and('be.visible').and('contain.text', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')
        cy.get(cartElements.itemPriceSecond).should('exist').and('be.visible').and('be.visible').and('contain.text', '$29.99')
        cy.get(cartElements.buttonRemoveSecond).should('exist').and('be.visible').and('be.visible').and('contain.text', 'Remove')
    }
    thirdProduct() {
        cy.get(cartElements.quantItemThird).should('exist').and('be.visible').and('contain.text', '1')
        cy.get(cartElements.itemDescriptionNameThird).should('exist').and('be.visible').and('contain.text', 'Sauce Labs Backpack')
        cy.get(cartElements.itemDescriptionThird).should('exist').and('be.visible').and('contain.text', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')
        cy.get(cartElements.itemPriceThird).should('exist').and('be.visible').and('be.visible').and('contain.text', '$29.99')
        cy.get(cartElements.buttonRemoveThird).should('exist').and('be.visible').and('be.visible').and('contain.text', 'Remove')
    }
    otherButton() {
        cy.get(cartElements.buttonContinue).should('exist').and('be.visible').and('be.visible').and('contain.text', 'Continue Shopping')
        cy.get(cartElements.buttonCheckout).should('exist').and('be.visible').and('be.visible').and('contain.text', 'Checkout')
    }*/
}

export default new pageCart();