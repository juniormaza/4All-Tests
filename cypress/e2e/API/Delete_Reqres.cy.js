/// <reference types="cypress" />

describe('DELETE Reqres', () => {

    it('Validar UPDATE retornando 204', () => {

        const dados = {
            "id":2,
            "email":"janet.weaver@reqres.in",
            "first_name":"Janet",
            "last_name":"Weaver"
        }
        
         cy.request({
             //payload
             method: 'DELETE',
             url: 'https://reqres.in/api/users/2',
             body: dados, 
             failOnStatusCode: false
         }).then((response) => {
            //validação de status code
             expect(response.status).to.eq(204)

         })
     })
})