"use strict";
exports.__esModule = true;
var application_form_pom_1 = require("./application_form_pom");
var steps_1 = require("cypress-cucumber-preprocessor/steps");
require("cypress-file-upload");
var url = 'https://demoqa.com/automation-practice-form';
steps_1.Given('I am at the test page', function () {
    cy.visit(url);
});
steps_1.And('I insert the firstname value', function () {
    application_form_pom_1.ApplicationPageObjectModel.insertFirstName('James');
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
});
steps_1.Then('I close the summary form', function () {
    cy.get('#closeLargeModal')
        .click();
});
