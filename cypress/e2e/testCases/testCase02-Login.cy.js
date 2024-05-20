/// <reference types="cypress" />

// implementing pageObject model
import LoginPage from "../pageObject/loginPage";
import {NavBarPage, navBarLocator} from "../pageObject/navBarPage";
import {LandingPage} from "../pageObject/landingPage";

// creating the the class instance for page object model
const login = new LoginPage();
const nav = new NavBarPage();
const landingPage = new LandingPage();

// declaring variables
let email;
let password;

describe("Test case 1: Login to the account using fixture file", () => {
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
    })
    

    it("Test case 2: signin to your account using valid email and password", () => {
        // signin using valid email and password
        login.fillLoginForm(email,password)

        //verification
        cy.get(navBarLocator.navLoginConfirm)
        .should('be.visible').invoke('text').and('include', "Logged in as")
    })
    
    
})