/// <reference types="cypress" />

describe('Menu 4 All Tests', () => {

    it('Validar acesso a pagina Home', () => {
        cy.visit('http://4alltests.com.br')
        
    })

    it('Validar acesso a pagina Ferramentas', () => {
        cy.visit('http://4alltests.com.br')
        cy.get('#nav > :nth-child(1) > :nth-child(2) > :nth-child(1)').click()
        
    })

    it('Validar acesso a pagina Eventos', () => {
        cy.visit('http://4alltests.com.br')
        cy.get('#nav > :nth-child(1) > :nth-child(3) > a').click()
        
    })

    it('Validar acesso a pagina Referências', () => {
        cy.visit('http://4alltests.com.br')
        cy.get(':nth-child(7) > a').click()
        
    })

    it('Validar acesso a pagina Vagas', () => {
        cy.visit('http://4alltests.com.br')
        cy.get('#nav > :nth-child(1) > :nth-child(4) > a').click()
        
    })
    
    it('Validar acesso a pagina Comunidades', () => {
        cy.visit('http://4alltests.com.br')
        cy.get(':nth-child(1) > :nth-child(5) > a').click()
        
    })

    it.only('Validar acesso a pagina Cursos', () => {
        cy.visit('http://4alltests.com.br')
        cy.get(':nth-child(6) > a').click()
        
    })
   
})