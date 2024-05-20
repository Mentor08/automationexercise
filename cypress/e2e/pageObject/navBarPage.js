const navBarLocator = {
    navHome: ".shop-menu ul li a[href='/']",
    navProducts: ".shop-menu ul li a[href='/products']",
    navCart: ".shop-menu ul li a[href='/view_cart']",
    navLogout: '.shop-menu ul li a[href="/logout"]',
    navDelete: ".shop-menu ul li a[href='/delete_account']",
    navSignup: ".shop-menu ul li a[href='/login']",
    navTestCases: ".shop-menu ul li a[href='/test_cases']",
    navApiTesting: ".shop-menu ul li a[href='/api_list']",
    navVideo: ".shop-menu ul li a[href='https://www.youtube.com/c/AutomationExercise']",
    navContact: ".shop-menu ul li a[href='/contact_us']",
    navLoginConfirm: ".shop-menu ul li:last-child a",
}

class NavBarPage{
    goToHome(){
        cy.get(navBarLocator.navHome).click()

        //verification
        cy.get(navBarLocator.navHome).should('exist')
    }
    goToProducts(){
        cy.get(navBarLocator.navProducts).click()

        //verification
        cy.get(navBarLocator.navProducts).should('exist')
    }
    goToCart(){
        cy.get(navBarLocator.navCart).click()

        //verification
        cy.get(navBarLocator.navCart).should('exist')
    }
    goToLogout(){
        cy.get(navBarLocator.navLogout).should('exist').click()
    }
    goToDelete(){
        cy.get(navBarLocator.navDelete).click()

        //verification
        cy.get(navBarLocator.navDelete).should('exist')
    }
    goToSignUp(){
        cy.get(navBarLocator.navSignup).click()

        //verification
        cy.get(navBarLocator.navSignup).should('exist')
    }
    goToTestCases(){
        cy.get(navBarLocator.navTestCases).click()

        //verification
        cy.get(navBarLocator.navTestCases).should('exist')
    }
    goToApi(){
        cy.get(navBarLocator.navApiTesting).click()

        //verification
        cy.get(navBarLocator.navApiTesting).should('exist')
    }
    goToVideo(){
        cy.get(navBarLocator.navVideo).click()

        //verification
        cy.get(navBarLocator.navVideo).should('exist')
    }
    goToContact(){
        cy.get(navBarLocator.navContact).click()

        //verification
        cy.get(navBarLocator.navContact).should('exist')
    }
}

export {NavBarPage, navBarLocator};