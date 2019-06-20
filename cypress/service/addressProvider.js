class AddressProvider {

    getAddressesAvailableForOrders(validPostalCodes) {
        cy.fixture('addresses-us-all.json')
            .then(addressesData => {
                console.log(addressesData.addresses.filter(address => {
                    return validPostalCodes.includes(address.postalCode)
                }))
            })
    };

}

export default new AddressProvider()