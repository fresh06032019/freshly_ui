class ForgotPassword {

    get formTitle() {
        return cy.get('h2').contains('Forgot Password')
    }

    get emailInputField() {
        return cy.get('input[type="email"]')
    }

    get sendInstructionsButton() {
        return cy.get('button[data-fe="forgot-password-btn"]')
    }

    submitPasswordReset() {
        this.sendInstructionsButton.click()
    }
}

export default new ForgotPassword()