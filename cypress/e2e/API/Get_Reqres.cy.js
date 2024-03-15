/// <reference types="cypress" />

describe('Get Reqres', () => {

        it('Validar LIST USERS retornando 200', () => {
            cy.request({
                method: 'GET',
                url: 'https://reqres.in/api/users?page=2',
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(200)
            })
        })

        it('Validar body retornado no LIST USERS', () => {
            cy.request({
                method: 'GET',
                url: 'https://reqres.in/api/users?page=2',
                failOnStatusCode: false
            }).then((response) => {
                let retorno = response.body
                cy.log(JSON.stringify(retorno, null, 2))
            })
        })
       
        it('Validar SINGLE USERS retornando 200', () => {
            cy.request({
                method: 'GET',
                url: 'https://reqres.in/api/users/2',
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(200)
            })
        })

        it('Validar body retornado no SINGLE USERS', () => {
            cy.request({
                method: 'GET',
                url: 'https://reqres.in/api/users/2',
                failOnStatusCode: false
            }).then((response) => {
                let retorno = response.body
                cy.log(JSON.stringify(retorno, null, 2))
            })
        })
        it('Validar SINGLE USER sem informar id retornando 400', () => {
            cy.request({
                method: 'GET',
                url: 'https://reqres.in/api/users/'
            }).then((response) => {
                expect(response.status).to.eq(400)
            })
        })

        it('Validar LIST USERS sem informar nenhuma pagina retornando 400', () => {
            cy.request({
                method: 'GET',
                url: 'https://reqres.in/api/users?page=',
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(400)
            })
        })
         
        it('Validar SINGLE USER NOT FOUND retornando 404', () => {
            cy.request({
                method: 'GET',
                url: 'https://reqres.in/api/users/23',
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(404)
            })
        })

        it('Validar LIST <RESOURCE> retornando 200', () => {
            cy.request({
                method: 'GET',
                url: 'https://reqres.in/api/unknown',
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(200)
            })
        })

        it('Validar SINGLE <RESOURCE> retornando 200', () => {
            cy.request({
                method: 'GET',
                url: 'https://reqres.in/api/unknown/2',
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(200)
            })
        })

        it('Validar SINGLE <RESOURCE> NOT FOUND retornando 404', () => {
            cy.request({
                method: 'GET',
                url: 'https://reqres.in/api/unknown/23',
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(404)
            })
        })

        it('Validar DELAYED RESPONSE retornando 200', () => {
            cy.request({
                method: 'GET',
                url: 'https://reqres.in/api/users?delay=3',
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(200)
            })
        })


})