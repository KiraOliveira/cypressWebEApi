class productsElements {

    // Lista de Produtos
    listProducts = () => { return '[data-test="inventory-list"]' }

    // Validando Tela Products
    logoScreenProducts = '.app_logo'
    cartShopping = '[data-test="shopping-cart-link"]'
    titleProducts = '[data-test="title"]'
    ordinationName = '[data-test="product-sort-container"]'

    // Primeiro Produto
    firstProduct = '[data-test="inventory-item-sauce-labs-backpack-img"]'
    nameFirstProduct = '[data-test="item-4-title-link"] > [data-test="inventory-item-name"]'
    descriptionFirstProduct = ':nth-child(1) > [data-test="inventory-item-description"] > .inventory_item_label > [data-test="inventory-item-desc"]'
    priceFirstProduct = ':nth-child(1) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]'
    buttonFirstProduct = '[data-test="add-to-cart-sauce-labs-backpack"]'

    // Segundo Produto
    secondProduct = '[data-test="inventory-item-sauce-labs-bike-light-img"]'
    nameSecondProduct = '[data-test="item-0-title-link"] > [data-test="inventory-item-name"]'
    descriptionSecondProduct = ':nth-child(2) > [data-test="inventory-item-description"] > .inventory_item_label > [data-test="inventory-item-desc"]'
    priceSecondProduct = ':nth-child(2) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]'
    buttonSecondProduct = '[data-test="add-to-cart-sauce-labs-bike-light"]'

    // Terceiro Produto
    thirdProduct = '[data-test="inventory-item-sauce-labs-bolt-t-shirt-img"]'
    nameThirdProduct = '[data-test="item-1-title-link"] > [data-test="inventory-item-name"]'
    descriptionThirdProduct = ':nth-child(3) > [data-test="inventory-item-description"] > .inventory_item_label > [data-test="inventory-item-desc"]'
    priceThirdProduct = ':nth-child(3) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]'
    buttonThirdProduct = '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]'

    // Quarto Produto
    fourthProduct = '[data-test="inventory-item-sauce-labs-fleece-jacket-img"]'
    nameFourthProduct = '[data-test="item-5-title-link"] > [data-test="inventory-item-name"]'
    descriptionFourthProduct = ':nth-child(4) > [data-test="inventory-item-description"] > .inventory_item_label > [data-test="inventory-item-desc"]'
    priceFourthProduct = ':nth-child(4) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]'
    buttonFourthProduct = '[data-test="add-to-cart-sauce-labs-fleece-jacket"]'

    // Quinto Produto
    fifthProduct = '[data-test="inventory-item-sauce-labs-onesie-img"]'
    nameFifthProduct = '[data-test="item-2-title-link"] > [data-test="inventory-item-name"]'
    descriptionFifthProduct = ':nth-child(5) > [data-test="inventory-item-description"] > .inventory_item_label > [data-test="inventory-item-desc"]'
    priceFifthProduct = ':nth-child(5) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]'
    buttonFifthProduct = '[data-test="add-to-cart-sauce-labs-onesie"]'

    // Sexto Produto
    sixthProduct = '[data-test="inventory-item-test.allthethings()-t-shirt-(red)-img"]'
    nameSixthProduct = '[data-test="item-3-title-link"] > [data-test="inventory-item-name"]'
    descriptionSixthProduct = ':nth-child(6) > [data-test="inventory-item-description"] > .inventory_item_label > [data-test="inventory-item-desc"]'
    priceSixthProduct = ':nth-child(6) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]'
    buttonSixthProduct = '[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]'
}

export default new productsElements();