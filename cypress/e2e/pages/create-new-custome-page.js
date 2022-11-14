import { faker } from '@faker-js/faker';
class NewCustomer{

    // dados
    email = faker.internet.email()
    firstName = faker.name.firstName()
    lastName = faker.name.lastName()
    senha = faker.internet.password(5) + faker.internet.password(5, /[A-Z]/) + faker.address.buildingNumber(5) + '$$'
    validarUrlAccountPage = 'customer/account/'
    validarMsgSucessRegister = 'Thank you for registering with Fake Online Clothing Store.'

    // elementos
    inputFirstName = '#firstname'
    inputLastName = '#lastname'
    inputEmail = '#email_address'
    inputSenha = '#password'
    inputConfirmSenha = '#password-confirmation'
    spanSucessRegister = '[data-bind="html: $parent.prepareMessageForHtml(message.text)"]'
    btnCreateAccount = 'button[type="submit"][title="Create an Account"]'
    

    preencherInformacoesPessoais(){
        cy.get(this.inputFirstName).should('be.visible').type(this.firstName)
        cy.get(this.inputLastName).should('be.visible').type(this.lastName)
        cy.get(this.inputEmail).should('be.visible').type(this.email)
        cy.get(this.inputSenha).should('be.visible').type(this.senha)
        cy.get(this.inputConfirmSenha).should('be.visible').type(this.senha)
    }
    finalizarCadastro(){
        cy.get(this.btnCreateAccount).should('be.visible').click()
        cy.url().should('include', this.validarUrlAccountPage)
        cy.get(this.spanSucessRegister).should('have.text', this.validarMsgSucessRegister)
    }

}

export default NewCustomer