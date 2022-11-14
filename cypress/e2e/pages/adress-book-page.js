class AddressBook{

    // dados
    validaMsgMyAccountPage = 'My Account'
    validaUrlMyAccountPage = '/customer/account/'

    // elementos
    spanMyAccount = 'span[data-ui-id="page-title-wrapper"]'
    btnNavItem = '.nav.item'

    irParaPageMyAccount(){
        cy.get(this.btnNavItem).eq(0).click()
        cy.url().should('include', this.validaUrlMyAccountPage)
        cy.get(this.spanMyAccount).should('have.text', this.validaMsgMyAccountPage)
    }

}

export default AddressBook