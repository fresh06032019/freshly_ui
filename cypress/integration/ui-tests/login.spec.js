import loginPage from '../../page-objects/login';
import forgotPasswordPage from '../../page-objects/forgotPassword'

describe('Login Page Functionality', () => {

    beforeEach(() => {
        loginPage.open()
    });

    it('should not allow to login with invalid credentials', () => {
        loginPage.fillOutLoginForm({username: 'asd', password: '12315465465'});
        loginPage.submitLoginForm();
        loginPage.helpBlock.should('be.visible');
    });

    it.only('should be able to open forgot password page', () => {
        loginPage.login({username: 'asd', password: '12315465465'});
        loginPage.helpBlock.should('be.visible');
        loginPage.openForgotPassword();
        forgotPasswordPage.formTitle.should('be.visible');
        forgotPasswordPage.emailInputField.should('be.visible');
    })

});