/// <reference types="cypress" />

// implementing pageObject model
import LoginPage from "../pageObject/loginPage";
import {NavBarPage, navBarLocator} from "../pageObject/navBarPage";
import {LandingPage, landingPageLocator} from "../pageObject/landingPage";

// creating the the class instance for page object model
const login = new LoginPage();
const nav = new NavBarPage();
const landingPage = new LandingPage();

// declaring variables
let email;
let password;
let cardName;
let cardNumber;
let cardCVC;
let cardExpMonth;
let cardExpYear;

describe('Fetching Products from women category and adding them to cart', () => {
    beforeEach(() => {
        cy.fixture('appData.json').then((appdata) => {
            // getting data from the fixture file

            email = appdata.email;
            password = appdata.password;
            cardName = appdata.cardName;
            cardNumber = appdata.cardNumber;
            cardCVC = appdata.cardCVC;
            cardExpMonth = appdata.cardExpMonth;
            cardExpYear = appdata.cardExpYear;
            
        })
        // navigating to homepage page
        cy.visitHomepage()

        // navigating to signin page
        nav.goToSignUp()
    });
    
    it("Test case 1: selecting products from women category and adding them to cart and proceeding to payment", () => {
        // signin using valid email and password
        login.fillLoginForm(email,password)

        // navigating to the women category section
        cy.get(landingPageLocator.womenCategory).click()

        // navigating to the women top category section
        cy.get(landingPageLocator.womenTopCategory).click()

        // selecting Fancy Green Top and adding to cart using page object model
        landingPage.selectFancyGreenTop()

        // selecting Summer White Top and adding to cart using page object model
        landingPage.selectSummerWhiteTop()
        nav.goToCart()
        cy.wait(500)

        // confirm successful navigation to cart page
        cy.get(landingPageLocator.breadcrumb).should('contain','Shopping Cart')
        landingPage.confirmIfCartContainsOurProducts()
        landingPage.clickOnProceedToCheckout()

        // confirm successful navigation to checkout page
        cy.get(landingPageLocator.breadcrumb).should('contain','Checkout')
        landingPage.clickPlaceOrderBtn()

        // confirm successful navigation to payment page
        cy.get(landingPageLocator.breadcrumb).should('contain','Payment')

        // inserting the payment card details
        cy.get(landingPageLocator.paymentCardNameInput).type(cardName)
        cy.get(landingPageLocator.paymentCardNumberInput).type(cardNumber)
        cy.get(landingPageLocator.paymentCardCVCInput).type(cardCVC)
        cy.get(landingPageLocator.paymentCardExpiryMonthInput).type(cardExpMonth)
        cy.get(landingPageLocator.paymentCardExpiryYearInput).type(cardExpYear)
        cy.get(landingPageLocator.payAndConfirmOrderBtn).click()
        cy.wait(500)
        
        // confirm successful order
        landingPage.orderConfirmation()
        cy.contains('Continue').click()
        
        // clicking on logout button
        nav.goToLogout()

        // confirm successful logout
        cy.contains('New User Signup!').should('have.text', "New User Signup!")
    })


});