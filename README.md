# Real World Testing with Cypress - Course App

This application is for the [Testing your first application course](https://learn.cypress.io/testing-your-first-application) on [learn.cypress.io](https://learn.cypress.io/).

The `start` branch is the main branch for this repo and is the starting point for the course. The [final](https://github.com/cypress-io/cypress-realworld-testing-course-app/tree/final) branch contains the completed tests.


This project also has cypress-axe for Accessibility testing installed. 
I apply the tests with two levels of Web Content Accessibility Guidelines (WCAG) : WCAG 2.0 Level A (WCAG2A) and WCAG 2.0 Level AA (WCAG2AA)
See how axe was installed in the commits. 
Documentation used to install: 
Cypress-axe NPM documentation: https://www.npmjs.com/package/cypress-axe

Other documentation and tutorials used to understand how it works: 
Cypress-axe Github Documentation: https://github.com/component-driven/cypress-axe

Axe API documentation: https://www.deque.com/axe/core-documentation/api-documentation/#section-1-introduction

Great Cypress-axe configuration tutorial I found: https://portal.gitnation.org/contents/configuring-axe-accessibility-tests

Cypress-axe tutorial on how to use and read the tests: Combining Cypress and Axe for Automated Accessibility Tests https://www.youtube.com/watch?v=7TDg3Cq0JnA


This is a React project, so to start on your local machine:
! Make sure your npm version matches the npm version in the nvmrc file !

`npm install`

'npm run dev' 

or

`npm start`

To install cypress in a project- from the project directory:

`npm install cypress --save -dev`

To open Cypress:

`npx cypress open`
