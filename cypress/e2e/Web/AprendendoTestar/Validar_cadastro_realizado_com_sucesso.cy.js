describe('Funcionalidade Cadastro do Aprendendo Testar', () => {
  it('Validar cadastro realizado com sucesso', () => {

    //acessar a pagina
    cy.visit('http://aprendendotestar.com.br/treinar-automacao.php')

    //preencher os campos
    cy.get(':nth-child(2) > td > input').type('usuario')
    cy.get(':nth-child(4) > td > input').type('senha')
    cy.get(':nth-child(6) > td > input').type('Jose')

    //clicar no botão enviar
    cy.get('td > .btn').click()

    //verificar se o cadastro foi realizado com sucesso
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('have.text', 'Jose')
  })
  it('Validar apagra usuario', () => {

     //acessar a pagina
     cy.visit('http://aprendendotestar.com.br/treinar-automacao.php')

     //verificar se o cadastro foi realizado com sucesso
     cy.get('tbody > :nth-child(2) > :nth-child(2)').should('have.text', 'Jose')
     
     //apagar o usuario
     cy.get(':nth-child(2) > :nth-child(5) > a').click()

     // acessar novamente a pagina
     cy.visit('http://aprendendotestar.com.br/treinar-automacao.php')

     //verificar se o cadastro foi realizado com sucesso
     cy.get('tbody > :nth-child(2) > :nth-child(2)').should('not.have.text', 'Jose')

  })

  it('Validar cadastro sem informar usuario', () => {
    
    //acessar a pagina
    cy.visit('http://aprendendotestar.com.br/treinar-automacao.php')

    //preencher os campos
   
    cy.get(':nth-child(4) > td > input').type('senha')
    cy.get(':nth-child(6) > td > input').type('Jose')

    //clicar no botão enviar
    cy.get('td > .btn').click()

    // Verifique se o campo de entrada ainda está marcado como obrigatorio
    cy.get('input[name="form_usuario"]').should('have.attr', 'required');


  })
  it('Validar cadastro sem informar senha', () => {
    
    //acessar a pagina
    cy.visit('http://aprendendotestar.com.br/treinar-automacao.php')

    //preencher os cmapos
   
  
    cy.get(':nth-child(6) > td > input').type('Jose')

    //clicar no botão enviar
    cy.get('td > .btn').click()

    // Verifique se o campo de entrada ainda está marcado como obrigatorio
    cy.get('input[name="form_senha"]').should('have.attr', 'required');


  })

  it('Validar cadastro sem informar nome', () => {
    
    //acessar a pagina
    cy.visit('http://aprendendotestar.com.br/treinar-automacao.php')

    //preencher os campos
    cy.get(':nth-child(2) > td > input').type('usuario')
    cy.get(':nth-child(4) > td > input').type('senha')
    
    //clicar no botão enviar
    cy.get('td > .btn').click()

    // Verifique se o campo de entrada ainda está marcado como obrigatorio
    cy.get(':nth-child(7) > td').should('have.text', 'Existem campos em branco.'
    );


  })

})