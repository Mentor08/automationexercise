const landingPageLocator = {
    featuredProductTitle: ".features_items > .title",
    featuredProducts: ".features_items .product-image-wrapper .single-products .productinfo",
    featuredProductLabel: ".features_items .product-image-wrapper .single-products .productinfo p",
    featuredProductPrice: ".features_items .product-image-wrapper .single-products .productinfo h2",
    womenCategory: ':nth-child(1) > .panel-heading > .panel-title > a',
    womenTopCategory: '#Women > .panel-body > ul > :nth-child(2) > a',
    womenFancyGreenTop: ':nth-child(7) > .product-image-wrapper > .single-products > .productinfo > p',
    womenFancyGreenTopCartButton: ':nth-child(7) > .product-image-wrapper > .single-products > .productinfo > .btn',
    womenSummerWhiteTop: ':nth-child(5) > .product-image-wrapper > .single-products > .productinfo > p',
    womenSummerWhiteTopCartButton: ':nth-child(5) > .product-image-wrapper > .single-products > .productinfo > .btn',
    modalContinueShoppingBtn: ".modal-footer > .btn",
    proceedToCheckoutBtn: ".col-sm-6 > .btn",
    breadcrumb: ".breadcrumb",
    cartTable: "#cart_info",
    placeOrderBtn: ":nth-child(7) > .btn",
    paymentCardNameInput: '[data-qa="name-on-card"]',
    paymentCardNumberInput: '[data-qa="card-number"]',
    paymentCardCVCInput: '[data-qa="cvc"]',
    paymentCardExpiryMonthInput: '[data-qa="expiry-month"]',
    paymentCardExpiryYearInput: '[data-qa="expiry-year"]',
    payAndConfirmOrderBtn: '[data-qa="pay-button"]',
    orderConfirmation: '.col-sm-9 > p',
}

class LandingPage{
    verifyProductsVisibilityAndLength(length){
        //verification
        cy.get(landingPageLocator.featuredProducts).should('exist')
        cy.get(landingPageLocator.featuredProducts).should('have.length', length)
    }
    selectFancyGreenTop(){
        cy.get(landingPageLocator.womenFancyGreenTop).invoke('text').should('contain', 'Fancy Green Top')
        cy.get(landingPageLocator.womenFancyGreenTopCartButton).trigger('click')
        cy.get(landingPageLocator.modalContinueShoppingBtn).click()
    }
    selectSummerWhiteTop(){
        cy.get(landingPageLocator.womenSummerWhiteTop).invoke('text').should('include', 'Summer White Top')
        cy.get(landingPageLocator.womenSummerWhiteTopCartButton).trigger('click')
        cy.get(landingPageLocator.modalContinueShoppingBtn).click()
    }
    confirmIfCartContainsOurProducts(){
        cy.get(landingPageLocator.cartTable).should('exist')
        cy.contains('Fancy Green Top').should('have.text', "Fancy Green Top")
        cy.contains('Summer White Top').should('have.text', "Summer White Top")
    }
    clickOnProceedToCheckout(){
        cy.get(landingPageLocator.proceedToCheckoutBtn).should('exist').and('contain', 'Proceed To Checkout')
        cy.get(landingPageLocator.proceedToCheckoutBtn).click()
    }
    clickPlaceOrderBtn(){
        cy.contains('Place Order').click()
    }
    orderConfirmation(){
        cy.get(landingPageLocator.orderConfirmation).should('contain','Congratulations! Your order has been confirmed!')
    }
}

export {LandingPage, landingPageLocator};