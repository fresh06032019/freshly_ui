import Chance from 'chance';
import limits from '../testing-data/limits'

const chance = Chance();
const accountLimits = limits.userAccountDataLimits.accountData;

class UserDataProvider {

    getUserValidData(mealPlan, deliveryAddresses) {

        const deliveryAddress = chance.pickone(deliveryAddresses);

        return {
            accountData: {
                firstName: accountLimits.firstName.default,
                lastName: accountLimits.lastName.default,
                email: accountLimits.email.default,
                password: chance.string(
                    {
                        length: accountLimits.password.length.min, pool: accountLimits.password.pool
                    })
            },
            mealPlanOptions: {},
            paymentsOptions: {
                paymentMethod: chance.pickone(limits.userAccountDataLimits.paymentsOptions.creditCards)
            },
            deliveryOptions: {
                deliveryPostalCode: deliveryAddress.postalCode,
                deliveryState: deliveryAddress.postalCode,
                deliveryCity: deliveryAddress.city,
                deliveryAddressLine1: deliveryAddress.address1,
                deliveryAddressLine2: deliveryAddress.address2,
                deliveryPhone: limits.userAccountDataLimits.deliveryOptions.deliveryPhoneNumber.default,
                isReceiveSms: false
            },
            billingOptions: {}
        }
    }

    getUserDataWithSpecificEmail(email, mealPlan, deliveryAddresses) {

        let userData = getUserValidData(mealPlan, deliveryAddresses);
        return userData.accountData.email = email

    }
}

export default new UserDataProvider();