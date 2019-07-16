class FsDataProvider {

    getAddressesAvailableForOrders(validPostalCodes) {
        return cy.fixture('addresses-us-all.json')
            .then(addressesData => {
                return addressesData.addresses.filter(address => {
                    return validPostalCodes.includes(address.postalCode)
                })
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

export default new FsDataProvider()