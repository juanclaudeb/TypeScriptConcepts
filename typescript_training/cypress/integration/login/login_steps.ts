import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
//import { binding, given, then, when} from 'cucumber-tsflow';

const url = 'https://google.com'
Given('I am at the login page', () => {
  cy.visit(url)
})

Then('I should see the page', () => {
  console.log('test')
})
