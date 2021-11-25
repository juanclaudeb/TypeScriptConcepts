import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const url = 'https://google.com'
Given('I am at the login page', () => {
  cy.visit(url)
})

Then('I should see the page', () => {
  console.log('test')
})
