function terminalLog(violations) {
  cy.task(
    "log",
    `${violations.length} accessibility violation${
      violations.length === 1 ? "" : "s"
    } ${violations.length === 1 ? "was" : "were"} detected`
  )
  // pluck specific keys to keep the table readable
  const violationData = violations.map(
    ({ id, impact, description, nodes }) => ({
      id,
      impact,
      description,
      nodes: nodes.length,
    })
  )

  cy.task("table", violationData)
}

describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
    cy.injectAxe()
  })

  context("hero section", () => {
    it("the h1 contans the correct text", () => {
      // cy.visit("http://localhost:3000")
      cy.get("[data-test='hero-heading']").contains(
        "Testing Next.js Applications with Cypress"
      )
      //apply axe accessibility tests with Web Content Accessibility Guidelines (WCAG) 2A and 2AA
      cy.checkA11y(
        null,
        {
          runOnly: {
            type: "tag",
            values: ["wcag2a", "wcag2aa"],
          },
        },
        terminalLog
      )
    })

    it("the features on the homepage are correct", () => {
      //cy.visit("http://localhost:3000")
      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")

      //apply axe accessibility tests with Web Content Accessibility Guideline (WCAG) 2A
      cy.checkA11y(
        null,
        {
          runOnly: {
            type: "tag",
            values: ["wcag2a"],
          },
        },
        terminalLog
      )
    })
  })

  context("courses section", () => {
    it("Course: Testing your First Next.js Application", () => {
      cy.getByData("course-0").find("a").eq(3).click()
      cy.location("pathname").should("eq", "/testing-your-first-application")
    })
    it("Course: Testing Foundations", () => {
      cy.getByData("course-1").find("a").eq(3).click()
      cy.location("pathname").should("eq", "/testing-foundations")
    })
  })
})
