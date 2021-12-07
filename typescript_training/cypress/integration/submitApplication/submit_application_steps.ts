import { ApplicationPageObjectModel } from "./application_form_pom";
import { And, Given, Then } from "cypress-cucumber-preprocessor/steps";
import 'cypress-file-upload';

const url = 'https://demoqa.com/automation-practice-form';
Given('I am at the test page', () => {
  cy.visit(url);
})

And('I insert the firstname value', () => {
  ApplicationPageObjectModel.insertFirstName('James');
})

And('I insert the lastname value', () => {
  ApplicationPageObjectModel.insertLastName('Bond');
})

And('I insert the email value', () => {
  ApplicationPageObjectModel.insertEmail('jamesbond@test.com');
})

And('I tick the Male radio button', () => {
  ApplicationPageObjectModel.tickMaleRadioButton();
})

And('I insert the mobile number value', () => {
  ApplicationPageObjectModel.insertMobileNumber('0713107536');
})

And('I insert the date of birth value', () => {
  ApplicationPageObjectModel.insertDateOfBirth('18 Dec 1989');
})

And('I insert the subjects value', () => {
  ApplicationPageObjectModel.insertSubjects('Computer Science');
})

And('I tick the music checkbox', () => {
  ApplicationPageObjectModel.tickMusicCheckbox();
})

And('I upload the image file', () => {
  const filepath = 'forrest-gump.jpg';

  ApplicationPageObjectModel.uploadStudentPicture(filepath);
})

And('I insert the current address value', () => {
  ApplicationPageObjectModel.insertAddress('34 froopy land, bunnyville');
})

And('I select the state value', () => {
  ApplicationPageObjectModel.insertState('NCR');
})

And('I select the city value', () => {
  ApplicationPageObjectModel.insertCity('Delhi');
})

And('I click the submit button', () => {
  ApplicationPageObjectModel.clickSubmitBtn();

  // Assert
  cy.get('tbody > :nth-child(1) > :nth-child(2)')
    .should('contain', 'James Bond');

  cy.get('tbody > :nth-child(2) > :nth-child(2)')
    .should('contain', 'jamesbond@test.com');

  cy.get('tbody > :nth-child(3) > :nth-child(2)')
    .should('contain', 'Male');

  cy.get('tbody > :nth-child(4) > :nth-child(2)')
    .should('contain', '0713107536');

  cy.get('tbody > :nth-child(5) > :nth-child(2)')
    .should('contain', '18 December,1989');

  cy.get('tbody > :nth-child(6) > :nth-child(2)')
    .should('contain', 'Computer Science');

  cy.get('tbody > :nth-child(7) > :nth-child(2)')
    .should('contain', 'Music');

  cy.get('#close-fixedban > img')
    .click();

  cy.get('tbody > :nth-child(8) > :nth-child(2)')
    .should('contain', 'forrest-gump.jpg');

  cy.get('tbody > :nth-child(9) > :nth-child(2)')
    .should('contain', '34 froopy land, bunnyville');

  cy.get('tbody > :nth-child(10) > :nth-child(2)')
    .should('contain', 'NCR Delhi');
})

Then('I close the summary form', () => {
  cy.get('#closeLargeModal')
    .click();
})