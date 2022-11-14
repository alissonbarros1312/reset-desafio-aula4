class HomePage{

    // dados
    url = 'https://magento.softwaretestingboard.com/'
    validarUrlCreatePage = '/customer/account/create/'
    validarUrlHomePage = 'magento.softwaretestingboard.com'
   
    // elementos
    btnCreateAnAcount = 'a:contains(Create an Account)'

    acessar(){
        cy.visit(this.url)
        cy.url().should('include', this.validarUrlHomePage)
    }
    irParaCreateAnAcount(){
        cy.get(this.btnCreateAnAcount).first().should('be.visible').click()
        cy.url().should('include', this.validarUrlCreatePage)
    }

}

export default HomePage