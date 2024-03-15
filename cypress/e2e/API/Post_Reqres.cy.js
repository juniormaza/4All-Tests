/// <reference types="cypress" />

describe('Post Reqres', () => {

    it('Validar CREATE retornando 201', () => {

       const dados = {
            "name": "morpheus",
            "job": "leader"
       }
       
        cy.request({
            //payload
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: dados, 
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(201)
        })
    })

    it('Validar CREATE sem enviar o body retornando 400', () => {

        const dados = {
             "name": "morpheus",
             "job": "leader"
        }
        
         cy.request({
             //payload
             method: 'POST',
             url: 'https://reqres.in/api/users',
             //body: dados, 
             failOnStatusCode: false
         }).then((response) => {
             expect(response.status).to.eq(400)
         })
     })

     
    it('Validar REGISTER - SUCCESSFUL retornando 200', () => {

        const dados = {
                "email": "eve.holt@reqres.in",
                "password": "pistol" 
        }
        
         cy.request({
             //payload
             method: 'POST',
             url: 'https://reqres.in/api/register',
             body: dados, 
             failOnStatusCode: false
         }).then((response) => {
            //validação de status code
             expect(response.status).to.eq(200)

             //validação de body
             let retorno = response.body
             cy.log(JSON.stringify(retorno, null, 2))

         })
     })

     it('Validar TOKEN DO REGISTER - SUCCESSFUL retornando 200', () => {

        const dados = {
                "email": "eve.holt@reqres.in",
                "password": "pistol" 
        }
        
         cy.request({
             //payload
             method: 'POST',
             url: 'https://reqres.in/api/register',
             body: dados, 
             failOnStatusCode: false
         }).then((response) => {
            //validação de status code
             expect(response.status).to.eq(200)

             //validação de body
             let retorno = response.body
             cy.log(JSON.stringify(retorno, null, 2))

             //validação do token
             expect(retorno.token).to.eq("QpwL5tke4Pnpja7X4")
         })
     })

     it('Validar REGISTER - UNSUCCESSFUL retornando 400', () => {

        const dados = {
            "email": "sydney@fife" 
        }
        
         cy.request({
             //payload
             method: 'POST',
             url: 'https://reqres.in/api/register',
             body: dados, 
             failOnStatusCode: false
         }).then((response) => {
            //validação de status code
             expect(response.status).to.eq(400)

             //validação de body
             let retorno = response.body
             cy.log(JSON.stringify(retorno, null, 2))

             //validação do error
             expect(retorno.error).to.eq("Missing password")
         })
     })

     it('Validar LOGIN - SUCCESSFUL retornando 200', () => {

        const dados = {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }
        
         cy.request({
             //payload
             method: 'POST',
             url: 'https://reqres.in/api/login',
             body: dados, 
             failOnStatusCode: false
         }).then((response) => {
            //validação de status code
             expect(response.status).to.eq(200)

             //validação de body
             let retorno = response.body
             cy.log(JSON.stringify(retorno, null, 2))

             //validação do token
             expect(retorno.token).to.eq("QpwL5tke4Pnpja7X4")
         })
     })
     it('Validar LOGIN - SUCCESSFUL retornando 400', () => {

        const dados = {
            "email": "peter@klaven"
        }
        
         cy.request({
             //payload
             method: 'POST',
             url: 'https://reqres.in/api/login',
             body: dados, 
             failOnStatusCode: false
         }).then((response) => {
            //validação de status code
             expect(response.status).to.eq(400)

             //validação de body
             let retorno = response.body
             cy.log(JSON.stringify(retorno, null, 2))

             //validação do error
             expect(retorno.error).to.eq("Missing password")
         })
     })
})