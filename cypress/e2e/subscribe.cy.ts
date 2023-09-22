describe("Newsletter Subscribe Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("allows users to subscribe to email list", () => {
    cy.getByData("email-input").type("gogo@abv.bg")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("exist").contains("gogo@abv.bg")
  })

  it("does NOT allow an invalid email address", () => {
    cy.getByData("email-input").type("gogo")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("not.exist")
  })

  it("does NOT allow an existing email address to be subscribed", () => {
    cy.getByData("email-input").type("john@example.com")
    cy.getByData("submit-button").click()
    cy.getByData("server-error-message")
      .should("exist")
      .contains("Please use a different email address.")
  })
})
