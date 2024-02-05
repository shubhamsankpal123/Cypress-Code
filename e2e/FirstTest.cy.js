describe('FirstTest', () => {
  it('test 1', () => {
    cy.visit("https://insights.mavenberg.com")
    cy.url().should('include','mavenberg')
   cy.get('.w-auto').should('be.visible')
  cy.xpath("//input[@type='email']").type("shubham.sankpal@mavenberg.com")
  cy.xpath("//input[@placeholder='Organization Name']").type("MavenDX")
  cy.xpath("//input[@type='password']").type("Mavenberg@123")
  cy.xpath("//button[@type='submit']").click()
  //cy.get('.mx-2').click()
  
  })
})

