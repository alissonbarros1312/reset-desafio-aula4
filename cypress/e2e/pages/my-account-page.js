class MyAccount{

    // dados
    validarUrlAddNewAddress = 'customer/address/edit/'

    // elementos
    btnEditAddress = 'a[data-ui-id="default-billing-edit-link"]'

    irParaDefaultBillingAddress(){
        cy.get(this.btnEditAddress).should('be.visible').click()
        cy.url().should('include', this.validarUrlAddNewAddress)
    }

}

export default MyAccount