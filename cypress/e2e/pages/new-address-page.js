import { faker, Faker } from "@faker-js/faker"
class NewAddress {

    // dados
    phone = faker.address.zipCodeByState("??")
    street = faker.address.street()
    city = faker.address.city()
    company = faker.company.name()
    postalCode = faker.address.zipCode()
    validarUrlAddressBook = '/customer/address/index/'
    validarMsgSavedAddress = 'You saved the address.'

    // elementos
    inputPhone = '#telephone'
    inputStreetAddress = '#street_1'
    inputCity = '#city'
    inputCompany = '#company'
    inputPostalCode = '#zip'
    selectState = '#region_id'
    selectCountry = '#country'
    btnSaveAddress = 'button[type="submit"][title="Save Address"]'
    msgSavedAddress = 'div[data-bind="html: $parent.prepareMessageForHtml(message.text)"]'

    preencherDadosNewAddress(produto){
        cy.get(this.inputPhone).should('be.visible').type(this.phone)
        cy.get(this.inputStreetAddress).should('be.visible').type(this.street)
        cy.get(this.inputCity).should('be.visible').type(this.city)
        cy.get(this.inputCompany).should('be.visible').type(this.company)
        cy.get(this.inputPostalCode).should('be.visible').type(this.postalCode)
        cy.get(this.selectState).should('be.visible').select(6)
        cy.get(this.selectCountry).should('be.visible').select(2)
        cy.get(this.btnSaveAddress).should('be.visible').click()
        cy.get(this.msgSavedAddress).should('have.text', this.validarMsgSavedAddress)
        cy.url().should('include', this.validarUrlAddressBook)
    }
}

export default NewAddress