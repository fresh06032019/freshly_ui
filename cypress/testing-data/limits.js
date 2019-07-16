import Chance from 'chance';

const chance = Chance();

class Limits {
    get userAccountDataLimits() {
        return {
            accountData: {
                firstName: {
                    default: chance.first(),
                    length: {
                        min: 1,
                        max: 20
                    },
                    pool: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890- "
                },
                lastName: {
                    default: chance.last(),
                    length: {
                        min: 1,
                        max: 20
                    },
                    pool: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890- ."
                },
                email: {
                    default: chance.email(),
                    valid: [],
                    invalid: [
                        {
                            description: 'is empty',
                            value: ''
                        },
                        {
                            description: 'does NOT have @',
                            value: ''
                        },
                        {
                            description: 'does NOT have domain part',
                            value: ''
                        },
                        {
                            description: 'is plain address',
                            value: ''
                        }
                    ]
                },
                password: {
                    default: chance.string(),
                    length: {
                        min: 6
                    },
                    pool: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890~!@#$%^&*()_+=/\\,.<>|;:\'\""
                }
            },
            mealPlanOptions: {
                plan: [],
                deliveryDay: [],
                meals: [],
            },
            deliveryOptions: {
                deliveryPostalCode: null,
                deliveryState: null,
                deliveryCity: null,
                deliveryAddressLine1: null,
                deliveryAddressLine2: null,
                deliveryPhoneNumber: {
                    default: chance.phone({country: "us"})
                },
                isReceiveSms: false
            },
            paymentsOptions: {
                payPalOptions: {},
                creditCards: [
                    {
                        manufacturer: "VISA",
                        cardNumber: "",
                        expirationMonth: "",
                        CVC: ""
                    },
                    {
                        manufacturer: "MasterCard",
                        cardNumber: "",
                        expirationMonth: "",
                        CVC: ""
                    },
                    {
                        manufacturer: "American Express",
                        cardNumber: "",
                        expirationMonth: "",
                        CVC: ""
                    },
                    {
                        manufacturer: "DISCOVER",
                        cardNumber: "",
                        expirationMonth: "",
                        CVC: ""
                    },
                ]
            },
            billingOptions: {
                isBillingAddressSameAsDelivery: true,
                deliveryPostalCode: null,
                deliveryState: null,
                deliveryCity: null,
                deliveryAddressLine1: null,
                deliveryAddressLine2: null,
            }
        }
    }
}

export default new Limits();