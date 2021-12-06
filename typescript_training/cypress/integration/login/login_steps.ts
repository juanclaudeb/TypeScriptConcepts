import { And, Given } from "cypress-cucumber-preprocessor/steps";
import 'cypress-file-upload';

const url = 'https://demoqa.com/automation-practice-form'
Given('I am at the test page', () => {
  cy.visit(url)
})

And('I insert the firstname value', () => {
  cy.get('input[id="firstName"]')
    .type('James');
})

And('I insert the lastname value', () => {
  cy.get('input[id="lastName"]')
    .type('Bond');
})

And('I insert the email value', () => {
  cy.get('input[id="userEmail"]')
    .type('jamesbond@test.com');
})

And('I tick the Male radio button', () => {
  cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label')
    .click();
})

And('I insert the mobile number value', () => {
  cy.get('input[id="userNumber"]')
    .type('0713107536');
})

And('I insert the date of birth value', () => {
  console.log('test')
  cy.get('#dateOfBirthInput')
  .type('{selectall}')
  .type('18 Dec 1989')
  .type('{enter}');
})

And('I insert the subjects value', () => {
  cy.get('.subjects-auto-complete__value-container')
    .type('This is a test subject');
})

And('I tick the music checkbox', () => {
  cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3) > .custom-control-label')
    .click();
})

And('upload image file', () => {
  const filepath = 'forrest-gump.jpg';

  cy.get('[id="uploadPicture"]').attachFile(filepath);
})

And('I insert the current address value', () => {
  cy.get('#currentAddress')
    .type('34 froopy land, bunnyville');
})

And('I select the state value', () => {
  cy.get('#state > .css-yk16xz-control > .css-1hwfws3')
    .type('NCR{enter}');
})

And('I select the city value', () => {
  cy.get('#city > .css-yk16xz-control > .css-1hwfws3')
    .type('Delhi{enter}');
})

And('I click the submit button', () => {
  cy.get('#submit')
    .click();
})