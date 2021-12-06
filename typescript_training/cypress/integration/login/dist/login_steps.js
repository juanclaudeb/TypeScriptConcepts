"use strict";
exports.__esModule = true;
var steps_1 = require("cypress-cucumber-preprocessor/steps");
require("cypress-file-upload");
var url = 'https://demoqa.com/automation-practice-form';
steps_1.Given('I am at the test page', function () {
    cy.visit(url);
});
steps_1.And('I insert the firstname value', function () {
    cy.get('input[id="firstName"]')
        .type('James');
});
steps_1.And('I insert the lastname value', function () {
    cy.get('input[id="lastName"]')
        .type('Bond');
});
steps_1.And('I insert the email value', function () {
    cy.get('input[id="userEmail"]')
        .type('jamesbond@test.com');
});
steps_1.And('I tick the Male radio button', function () {
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label')
        .click();
});
steps_1.And('I insert the mobile number value', function () {
    cy.get('input[id="userNumber"]')
        .type('0713107536');
});
steps_1.And('I insert the date of birth value', function () {
    console.log('test');
    cy.get('#dateOfBirthInput')
        .type('{selectall}')
        .type('18 Dec 1989')
        .type('{enter}');
});
steps_1.And('I insert the subjects value', function () {
    cy.get('.subjects-auto-complete__value-container')
        .type('This is a test subject');
});
steps_1.And('I tick the music checkbox', function () {
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3) > .custom-control-label')
        .click();
});
steps_1.And('upload image file', function () {
    var filepath = 'forrest-gump.jpg';
    cy.get('[id="uploadPicture"]').attachFile(filepath);
});
steps_1.And('I insert the current address value', function () {
    cy.get('#currentAddress')
        .type('34 froopy land, bunnyville');
});
steps_1.And('I select the state value', function () {
    cy.get('#state > .css-yk16xz-control > .css-1hwfws3')
        .type('NCR{enter}');
});
steps_1.And('I select the city value', function () {
    cy.get('#city > .css-yk16xz-control > .css-1hwfws3')
        .type('Delhi{enter}');
});
steps_1.And('I click the submit button', function () {
    cy.get('#submit')
        .click();
});
