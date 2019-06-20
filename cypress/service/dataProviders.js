class DataProviders {

    getAddressesAvailableForOrders(validPostalCodes) {
        cy.fixture('addresses-us-all.json')
            .then(addressesData => {
                console.log(addressesData.addresses.filter(address => {
                    return validPostalCodes.includes(address.postalCode)
                }))
            })
    };

    getPostalCodesAvailableForOrders() {
        return cy.fixture('postalCodesAvailableForOrdering.json')
            .its('postalCodes')
            .then(postalCodes => {
                return postalCodes
            })
    }

}

export default new DataProviders()