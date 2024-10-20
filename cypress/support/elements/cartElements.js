class cartElements {

    cartShopping = '[data-test="shopping-cart-link"]'
    logoProducts = '.app_logo'
    titleCart = '[data-test="title"]'
    cartContents = '[data-test="cart-contents-container"]' // A tela toda

    quantTitleProduct = '[data-test="cart-quantity-label"]' // Coluna QTY
    description = '[data-test="cart-desc-label"]' // Coluna Description
    
    // First Product
    quantItemFirst = cy.get(':nth-child(3) > [data-test="item-quantity"]')
    itemDescriptionNameFirst = cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]')
    itemDescriptionFirst = cy.get(':nth-child(3) > .cart_item_label > [data-test="inventory-item-desc"]')
    itemPriceFirst = cy.get(':nth-child(3) > .cart_item_label > .item_pricebar > [data-test="inventory-item-price"]')
    buttonRemoveFirst = '[data-test="remove-sauce-labs-backpack"]'

    // Second Product
    quantItemSecond = cy.get(':nth-child(4) > [data-test="item-quantity"]')
    itemDescriptionNameSecond = cy.get('[data-test="item-0-title-link"] > [data-test="inventory-item-name"]')
    itemDescriptionSecond = cy.get(':nth-child(4) > .cart_item_label > [data-test="inventory-item-desc"]')
    itemPriceSecond = cy.get(':nth-child(4) > .cart_item_label > .item_pricebar > [data-test="inventory-item-price"]')
    buttonRemoveSecond = cy.get('[data-test="remove-sauce-labs-bike-light"]')

    // Third Product
    quantItemThird = cy.get(':nth-child(5) > [data-test="item-quantity"]')
    itemDescriptionNameThird = cy.get('[data-test="item-1-title-link"] > [data-test="inventory-item-name"]')
    itemDescriptionThird = cy.get(':nth-child(5) > .cart_item_label > [data-test="inventory-item-desc"]')
    itemPriceThird = cy.get(':nth-child(5) > .cart_item_label > .item_pricebar > [data-test="inventory-item-price"]')
    buttonRemoveThird = cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]')

    // Botões
    buttonContinue = '[data-test="continue-shopping"]'
    buttonCheckout = '[data-test="checkout"]'

}

export default new cartElements();