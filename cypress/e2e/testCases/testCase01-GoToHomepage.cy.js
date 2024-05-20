/// <reference types="cypress" />

// implementing pageObject model
import {NavBarPage} from "../pageObject/navBarPage";

// creating the the class instance for page object model
const nav = new NavBarPage();

describe("Test case 1: navigating to 'automationexercise.com' and click on signin", () => {
    it('test 1', () => {
        // navigating to homepage page
        cy.visitHomepage()

        // navigating to signin page
        nav.goToSignUp()
    });
})