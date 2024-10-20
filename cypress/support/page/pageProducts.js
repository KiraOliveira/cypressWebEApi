/// <reference types="Cypress" />

import productsElements from "../elements/productsElements";

class pageProducts {
    // Screen Products
    screenProducts() {
        cy.get(productsElements.logoScreenProducts).should('exist').and('be.visible')
        cy.get(productsElements.cartShopping).should('exist').and('be.visible')
        cy.get(productsElements.titleProducts).should('exist').and('be.visible').and('contain.text', 'Products')
        cy.get(productsElements.ordinationName).should('exist').and('be.visible').and('contain.text', 'Name')
        cy.get(productsElements.listProducts()).should('exist').and('be.visible')
    }

    // Primeiro Produto
    firstProducts() {
        cy.get(productsElements.firstProduct).should('exist').and('be.visible')
        cy.get(productsElements.nameFirstProduct).should('exist').and('be.visible').and('contain.text', 'Sauce Labs Backpack')
        cy.get(productsElements.descriptionFirstProduct).should('exist').and('be.visible').and('contain.text', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')
        cy.get(productsElements.priceFirstProduct).should('exist').and('be.visible').and('contain.text', '$29.99')
        cy.get(productsElements.buttonFirstProduct).should('exist').and('be.visible').and('contain.text', 'Add to cart').click()
    }
    secondProducts() {
        cy.get(productsElements.secondProduct).should('exist').and('be.visible')
        cy.get(productsElements.nameSecondProduct).should('exist').and('be.visible').and('contain.text', 'Sauce Labs Bike Light')
        cy.get(productsElements.descriptionSecondProduct).should('exist').and('be.visible').and('contain.text','A red light ')
        cy.get(productsElements.priceSecondProduct).should('exist').and('be.visible').and('contain.text', '$9.99')
        cy.get(productsElements.buttonSecondProduct).should('exist').and('be.visible').and('contain.text', 'Add to cart').click()
    }
    thirdProducts() {
        cy.get(productsElements.thirdProduct).should('exist').and('be.visible')
        cy.get(productsElements.nameThirdProduct).should('exist').and('be.visible').and('contain.text', 'Sauce Labs Bolt T-Shirt')
        cy.get(productsElements.descriptionThirdProduct).should('exist').and('be.visible').and('contain.text','Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.')
        cy.get(productsElements.priceThirdProduct).should('exist').and('be.visible').and('contain.text', '$15.99')
        cy.get(productsElements.buttonThirdProduct).should('exist').and('be.visible').and('contain.text', 'Add to cart').click()
    }
    fourthProducts() {
        cy.get(productsElements.fourthProduct).should('exist').and('be.visible')
        cy.get(productsElements.nameFourthProduct).should('exist').and('be.visible').and('contain.text', 'Sauce Labs Fleece Jacket')
        cy.get(productsElements.descriptionFourthProduct).should('exist').and('be.visible').and('contain.text','It')
        cy.get(productsElements.priceFourthProduct).should('exist').and('be.visible').and('contain.text', '$49.99')
        cy.get(productsElements.buttonFourthProduct).should('exist').and('be.visible').and('contain.text', 'Add to cart')
    }
    fifthProducts() {
        cy.get(productsElements.fifthProduct).should('exist').and('be.visible')
        cy.get(productsElements.nameFifthProduct).should('exist').and('be.visible').and('contain.text', 'Sauce Labs Onesie')
        cy.get(productsElements.descriptionFifthProduct).should('exist').and('be.visible').and('contain.text','Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won')
        cy.get(productsElements.priceFifthProduct).should('exist').and('be.visible').and('contain.text', '$7.99')
        cy.get(productsElements.buttonFifthProduct).should('exist').and('be.visible').and('contain.text', 'Add to cart')
    }
    sixthProducts() {
        cy.get(productsElements.sixthProduct).should('exist').and('be.visible')
        cy.get(productsElements.nameSixthProduct).should('exist').and('be.visible').and('contain.text', 'Test.allTheThings() T-Shirt (Red)')
        cy.get(productsElements.descriptionSixthProduct).should('exist').and('be.visible').and('contain.text','This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.')
        cy.get(productsElements.priceSixthProduct).should('exist').and('be.visible').and('contain.text', '$15.99')
        cy.get(productsElements.buttonSixthProduct).should('exist').and('be.visible').and('contain.text', 'Add to cart')
    }
}

export default new pageProducts();