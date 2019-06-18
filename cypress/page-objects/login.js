class LoginPage {

    get emailInputField() {
        return cy.get('input[type="email"]')
    }

    get passwordInputField() {
        return cy.get('input[type="password"]')
    }

    get submitLoginFormButton() {
        return cy.get('button[type="submit"]')
    }

    get forgotPasswordLinkDesktop() {
        return cy.get('a[href="/forgot-password"]')
            .last()
    }

    get helpBlock() {
        return cy.get('.help-block')
    }

    get loginForm() {
        return cy.get('form[data-fe="login-form"]')
    }

    open() {
        cy.visit('/login')
    }

    login(userData) {
        this.fillOutLoginForm(userData);
        this.submitLoginForm();
    }

    fillOutLoginForm(userData) {
        this.emailInputField.type(`${userData.username}`);
        this.passwordInputField.type(`${userData.password}`)
    }

    submitLoginForm() {
        this.submitLoginFormButton.click()
    }

    openForgotPassword() {
        this.forgotPasswordLinkDesktop.click();
    }

}

export default new LoginPage();