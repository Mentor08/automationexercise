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

describe('Test Case 5: view cart and proceed to checkout', () => {
    beforeEach(() => {
        cy.fixture('appData.json').then((appdata) => {
            // getting data from the fixture file

            email = appdata.email;
            password = appdata.password;
            
        })
        // navigating to homepage page
        cy.visitHomepage()

        // navigating to signin page
        nav.goToSignUp()
    });
    
    it("Test case 1: view cart and proceed to checkout", () => {
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

        // proceed to checkout
        landingPage.clickOnProceedToCheckout()
    })


});