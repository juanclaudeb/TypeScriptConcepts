"use strict";
exports.__esModule = true;
var application_form_pom_1 = require("./application_form_pom");
var steps_1 = require("cypress-cucumber-preprocessor/steps");
require("cypress-file-upload");
var url = 'https://demoqa.com/automation-practice-form';
var firstnameApiResponse = '';
steps_1.Given('I get address details from api', function () {
    // testing API request
    cy.request({
        method: 'GET',
        url: 'https://dog.ceo/api/breeds/list/all',
        headers: {
            'content-type': 'application/json'
        }
    }).then(function (response) {
        expect(response.body.status).to.equal('success');
        firstnameApiResponse = response.body.message.australian[0];
    });
});
steps_1.Given('I am at the test page', function () {
    cy.visit(url);
});
steps_1.And('I insert the firstname value', function () {
    application_form_pom_1.ApplicationPageObjectModel.insertFirstName(firstnameApiResponse);
});
steps_1.And('I insert the lastname value', function () {
    application_form_pom_1.ApplicationPageObjectModel.insertLastName('Bond');
});
steps_1.And('I insert the email value', function () {
    application_form_pom_1.ApplicationPageObjectModel.insertEmail('jamesbond@test.com');
});
steps_1.And('I tick the Male radio button', function () {
    application_form_pom_1.ApplicationPageObjectModel.tickMaleRadioButton();
});
steps_1.And('I insert the mobile number value', function () {
    application_form_pom_1.ApplicationPageObjectModel.insertMobileNumber('0713107536');
});
steps_1.And('I insert the date of birth value', function () {
    application_form_pom_1.ApplicationPageObjectModel.insertDateOfBirth('18 Dec 1989');
});
steps_1.And('I insert the subjects value', function () {
    application_form_pom_1.ApplicationPageObjectModel.insertSubjects('Computer Science');
});
steps_1.And('I tick the music checkbox', function () {
    application_form_pom_1.ApplicationPageObjectModel.tickMusicCheckbox();
});
steps_1.And('I upload the image file', function () {
    var filepath = 'forrest-gump.jpg';
    application_form_pom_1.ApplicationPageObjectModel.uploadStudentPicture(filepath);
});
steps_1.And('I insert the current address value', function () {
    application_form_pom_1.ApplicationPageObjectModel.insertAddress('34 froopy land, bunnyville');
});
steps_1.And('I select the state value', function () {
    application_form_pom_1.ApplicationPageObjectModel.insertState('NCR');
});
steps_1.And('I select the city value', function () {
    application_form_pom_1.ApplicationPageObjectModel.insertCity('Delhi');
});
steps_1.And('I click the submit button', function () {
    application_form_pom_1.ApplicationPageObjectModel.clickSubmitBtn();
    // Assert
    cy.get(application_form_pom_1.ApplicationPageObjectModel.submitFullNameTxt)
        .should('contain', firstnameApiResponse + ' Bond');
    cy.get(application_form_pom_1.ApplicationPageObjectModel.submitEmailTxt)
        .should('contain', 'jamesbond@test.com');
    cy.get(application_form_pom_1.ApplicationPageObjectModel.submitMaleTxt)
        .should('contain', 'Male');
    cy.get(application_form_pom_1.ApplicationPageObjectModel.submitCellNumberTxt)
        .should('contain', '0713107536');
    cy.get(application_form_pom_1.ApplicationPageObjectModel.submitDateOfBirthTxt)
        .should('contain', '18 December,1989');
    cy.get(application_form_pom_1.ApplicationPageObjectModel.submitSubjectsTxt)
        .should('contain', 'Computer Science');
    cy.get(application_form_pom_1.ApplicationPageObjectModel.submitMusicHobbyTxt)
        .should('contain', 'Music');
    cy.get(application_form_pom_1.ApplicationPageObjectModel.submitImgDropD)
        .click();
    cy.get(application_form_pom_1.ApplicationPageObjectModel.submitPictureTxt)
        .should('contain', 'forrest-gump.jpg');
    cy.get(application_form_pom_1.ApplicationPageObjectModel.submitAddressTxt)
        .should('contain', '34 froopy land, bunnyville');
    cy.get(application_form_pom_1.ApplicationPageObjectModel.submitStateCityTxt)
        .should('contain', 'NCR Delhi');
});
steps_1.Then('I close the summary form', function () {
    application_form_pom_1.ApplicationPageObjectModel.clickSubmitCloseBtn();
});
