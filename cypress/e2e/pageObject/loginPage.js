const loginLocator = {
    loginPageConfirmation: '.login-form h2',
    loginEmail: '[data-qa="login-email"]',
    loginPassword: '[data-qa="login-password"]',
    loginButton: '[data-qa="login-button"]',
}

export default class LoginPage {
    fillLoginForm(email,password){
        // verrifying you're on the login page
        cy.get(loginLocator.loginPageConfirmation).should("be.visible").and("contain", "Login to your account");
        
        // targetting the email input field and typing in the email
        cy.get(loginLocator.loginEmail).type(email);

        // targetting the password input field and typing in the password
        cy.get(loginLocator.loginPassword).type(password);

        // clicking on the login button
        cy.get(loginLocator.loginButton).click();        
    }
}