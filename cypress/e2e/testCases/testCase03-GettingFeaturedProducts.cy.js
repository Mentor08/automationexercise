/// <reference types="cypress" />

// implementing pageObject model
import LoginPage from "../pageObject/loginPage";
import {NavBarPage} from "../pageObject/navBarPage";
import {LandingPage, landingPageLocator} from "../pageObject/landingPage";

// creating the the class instance for page object model
const login = new LoginPage();
const nav = new NavBarPage();
const landingPage = new LandingPage();

// declaring variables
let email;
let password;
describe('Fetching Featured Products', () => {
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
    
    it("Test case 1: fetching the products and validating the length", () => {
        // signin using valid email and password
        login.fillLoginForm(email,password)
        cy.get(landingPageLocator.featuredProductTitle).scrollIntoView()
        
        //verrifying the total products
        landingPage.verifyProductsVisibilityAndLength(34)
    })

    it('Test case 2: getting the featured products labels and printing them out', () => {
        
        // signin using valid email and password
        login.fillLoginForm(email,password)
        cy.get(landingPageLocator.featuredProductTitle).scrollIntoView()
        cy.get(landingPageLocator.featuredProductLabel).invoke("text").then((label, i) => {
                cy.log(label)
        })
    });
    
    it('Test case 3: getting the featured products prices and printing it out', () => {
        // signin using valid email and password
        login.fillLoginForm(email,password)
        cy.get(landingPageLocator.featuredProductTitle).scrollIntoView()
        cy.get(landingPageLocator.featuredProductPrice).each(($prices, i) => {
                const price = $prices.text()
                cy.log(price);
            })
    });
    it('Test case 4: getting the featured products prices and label and printing it out', () => {
        login.fillLoginForm(email,password)
        cy.get(landingPageLocator.featuredProductTitle).scrollIntoView()
        cy.get(landingPageLocator.featuredProductPrice).each(($prices, index) => {
                    cy.get(landingPageLocator.featuredProductLabel)
                    .eq(index).then(($productlabel) => {
                        cy.log($prices.text() +" - "+ $productlabel.text())
                    })
                
        })
    });


});