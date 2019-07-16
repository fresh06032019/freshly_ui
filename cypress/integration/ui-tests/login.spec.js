import loginPage from '../../page-objects/login';
import forgotPasswordPage from '../../page-objects/forgotPassword';
import fsDataProvider from '../../service/fsDataProviders/fsDataProvider';
import userDataProvider from '../../service/userDataProvider';

describe('Login Page Functionality', () => {

    beforeEach(() => {

        loginPage.open();
    });

    describe('Negative: Login with invalid email', () => {

        beforeEach(() => {
            fsDataProvider.getPostalCodesAvailableForOrders().then(postalCodes => {
                    fsDataProvider.getAddressesAvailableForOrders(postalCodes)
                }).then(addressList => {
                    return userDataProvider.getUserValidData(null, addressList)
                }).as('userData')
        });

        it('should not allow to login with invalid credentials', () => {
            cy.get('@userData').then(userData => {
                loginPage.fillOutLoginForm(userData);
                loginPage.submitLoginForm();
                loginPage.helpBlock.should('be.visible');
            })
        });
    });


    xit('should be able to open forgot password page', () => {
        loginPage.login(loginData);
        loginPage.helpBlock.should('be.visible');
        loginPage.openForgotPassword();
        forgotPasswordPage.formTitle.should('be.visible');
        forgotPasswordPage.emailInputField.should('be.visible');
    });

    xit('should not allow to login with invalid credentials', () => {
        fsDataProvider.getAddressesAvailableForOrders(["36108"])
            .then(add => {
                console.log(add)
            })
    });

});