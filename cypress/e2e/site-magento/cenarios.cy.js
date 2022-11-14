/// <reference types="cypress"/>

import HomePage from '../pages/home-page'
import MyAccount from '../pages/my-account-page'
import NewCustomer from '../pages/create-new-custome-page'
import NewAddress from '../pages/new-address-page'
import AddressBook from '../pages/adress-book-page'


describe('Site magento', ()=>{
    const loginPage = new HomePage()
    const myAccountPage = new MyAccount()
    const createNewCustomerPage = new NewCustomer()
    const newAddressPage = new NewAddress()
    const addressBookPage = new AddressBook()

    beforeEach(()=>{
        loginPage.acessar()
    })

    it('Realizar Cadastro no site magento', ()=>{
        loginPage.irParaCreateAnAcount()
        createNewCustomerPage.preencherInformacoesPessoais()
        createNewCustomerPage.finalizarCadastro()
        myAccountPage.irParaDefaultBillingAddress()
        newAddressPage.preencherDadosNewAddress()
        addressBookPage.irParaPageMyAccount()
    })

})