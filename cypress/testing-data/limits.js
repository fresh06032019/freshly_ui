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
                deliveryPostalCode: "",
                deliveryState: "",
                deliveryCity: "",
                deliveryAddressLine1: "",
                deliveryAddressLine2: "",
                deliveryPhone: "",
                isReceiveSms: false
            },
            paymentsOptions: {
                payPalOptions: {},
                creditCardOptions: {
                    cardNumber: "",
                    expirationMonth: "",
                    CVC: ""
                }
            },
            billingOptions: {
                isBillingAddressSameAsDelivery: true,
                deliveryPostalCode: "",
                deliveryState: "",
                deliveryCity: "",
                deliveryAddressLine1: "",
                deliveryAddressLine2: "",
                deliveryPhone: ""
            }
        }
    }
}

export default new Limits();