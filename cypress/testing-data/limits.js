class Limits {
    get userAccountDataLimits() {
        return {
            accountData: {
                firstName: {
                    length: {
                        default: 6,
                        min: 1,
                        max: 20
                    },
                    pool: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890- "
                },
                lastName: {
                    length: {
                        default: 6,
                        min: 1,
                        max: 20
                    },
                    pool: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890- ."
                },
                email: null,
                password: {
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
                deliveryPhone: null,
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
                        manufacturer: "MasterCard" ,
                        cardNumber: "",
                        expirationMonth: "",
                        CVC: ""
                    },
                    {
                        manufacturer: "American Express" ,
                        cardNumber: "",
                        expirationMonth: "",
                        CVC: ""
                    },
                    {
                        manufacturer: "DISCOVER" ,
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