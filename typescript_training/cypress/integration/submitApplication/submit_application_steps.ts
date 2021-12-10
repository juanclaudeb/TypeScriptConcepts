import { ApplicationPageObjectModel } from "./application_form_pom";
import { And, Given, Then } from "cypress-cucumber-preprocessor/steps";
import 'cypress-file-upload';

const url = 'https://demoqa.com/automation-practice-form';
let firstnameApiResponse = '';

Given('I get address details from api', () => {
  // testing API request
  cy.request(
    {
      method: 'GET',
      url: 'https://dog.ceo/api/breeds/list/all',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => {
        expect(response.body.status).to.equal('success');
        firstnameApiResponse = response.body.status
    });
})

Given('I am at the test page', () => {
  cy.visit(url);
})

And('I insert the firstname value', () => {


  ApplicationPageObjectModel.insertFirstName(firstnameApiResponse);
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
  cy.get(ApplicationPageObjectModel.submitFullNameTxt)
    .should('contain', firstnameApiResponse + ' Bond');

  cy.get(ApplicationPageObjectModel.submitEmailTxt)
    .should('contain', 'jamesbond@test.com');

  cy.get(ApplicationPageObjectModel.submitMaleTxt)
    .should('contain', 'Male');

  cy.get(ApplicationPageObjectModel.submitCellNumberTxt)
    .should('contain', '0713107536');

  cy.get(ApplicationPageObjectModel.submitDateOfBirthTxt)
    .should('contain', '18 December,1989');

  cy.get(ApplicationPageObjectModel.submitSubjectsTxt)
    .should('contain', 'Computer Science');

  cy.get(ApplicationPageObjectModel.submitMusicHobbyTxt)
    .should('contain', 'Music');

  cy.get(ApplicationPageObjectModel.submitImgDropD)
    .click();

  cy.get(ApplicationPageObjectModel.submitPictureTxt)
    .should('contain', 'forrest-gump.jpg');

  cy.get(ApplicationPageObjectModel.submitAddressTxt)
    .should('contain', '34 froopy land, bunnyville');

  cy.get(ApplicationPageObjectModel.submitStateCityTxt)
    .should('contain', 'NCR Delhi');
})

Then('I close the summary form', () => {
  ApplicationPageObjectModel.clickSubmitCloseBtn();
})