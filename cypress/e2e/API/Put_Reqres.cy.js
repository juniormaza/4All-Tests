/// <reference types="cypress" />

describe('Put Reqres', () => {

    it('Validar UPDATE retornando 200', () => {

        const dados = {
            "name": "morpheus",
            "job": "zion resident"
        }
        
         cy.request({
             //payload
             method: 'PUT',
             url: 'https://reqres.in/api/users/2',
             body: dados, 
             failOnStatusCode: false
         }).then((response) => {
            //validação de status code
             expect(response.status).to.eq(200)

             //validação de body
             let retorno = response.body
             cy.log(JSON.stringify(retorno, null, 2))

             //validação do update
             expect(retorno.name).to.eq("morpheus")
             expect(retorno.job).to.eq("zion resident")
         })
     })
})