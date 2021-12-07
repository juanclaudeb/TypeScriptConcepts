"use strict";
exports.__esModule = true;
exports.ApplicationPageObjectModel = void 0;
var ApplicationPageObjectModel = /** @class */ (function () {
    function ApplicationPageObjectModel() {
    }
    // page actons
    ApplicationPageObjectModel.insertFirstName = function (firstname) {
        cy.get(ApplicationPageObjectModel.firstNameTxt)
            .type(firstname);
    };
    ApplicationPageObjectModel.insertLastName = function (lastname) {
        cy.get(ApplicationPageObjectModel.lastNameTxt)
            .type(lastname);
    };
    ApplicationPageObjectModel.insertEmail = function (email) {
        cy.get(ApplicationPageObjectModel.emailTxt)
            .type(email);
    };
    ApplicationPageObjectModel.tickMaleRadioButton = function () {
        cy.get(ApplicationPageObjectModel.maleRb)
            .click();
    };
    ApplicationPageObjectModel.insertMobileNumber = function (mobileNumber) {
        cy.get(ApplicationPageObjectModel.userNumberTxt)
            .type(mobileNumber);
    };
    ApplicationPageObjectModel.insertDateOfBirth = function (dateOfBirth) {
        cy.get(ApplicationPageObjectModel.dateOfBirthDp)
            .type('{selectall}')
            .type(dateOfBirth)
            .type('{enter}');
    };
    ApplicationPageObjectModel.insertSubjects = function (subjects) {
        cy.get(ApplicationPageObjectModel.subjectsTxt)
            .type(subjects + '{enter}');
    };
    ApplicationPageObjectModel.tickMusicCheckbox = function () {
        cy.get(ApplicationPageObjectModel.musicChkB)
            .click();
    };
    ApplicationPageObjectModel.uploadStudentPicture = function (picture) {
        cy.get(ApplicationPageObjectModel.uploadPictureBtn)
            .attachFile(picture);
    };
    ApplicationPageObjectModel.insertAddress = function (address) {
        cy.get(ApplicationPageObjectModel.addressTxt)
            .type(address);
    };
    ApplicationPageObjectModel.insertState = function (state) {
        cy.get(ApplicationPageObjectModel.stateDrpD)
            .type(state + '{enter}');
    };
    ApplicationPageObjectModel.insertCity = function (city) {
        cy.get(ApplicationPageObjectModel.ctyDrpD)
            .type(city + '{enter}');
    };
    ApplicationPageObjectModel.clickSubmitBtn = function () {
        cy.get(ApplicationPageObjectModel.submitBtn)
            .click();
    };
    // page elements
    ApplicationPageObjectModel.firstNameTxt = '#firstName';
    ApplicationPageObjectModel.lastNameTxt = '#lastName';
    ApplicationPageObjectModel.emailTxt = '#userEmail';
    ApplicationPageObjectModel.maleRb = '#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label';
    ApplicationPageObjectModel.userNumberTxt = '#userNumber';
    ApplicationPageObjectModel.dateOfBirthDp = '#dateOfBirthInput';
    ApplicationPageObjectModel.subjectsTxt = '.subjects-auto-complete__value-container';
    ApplicationPageObjectModel.musicChkB = '#hobbiesWrapper > .col-md-9 > :nth-child(3) > .custom-control-label';
    ApplicationPageObjectModel.uploadPictureBtn = '[id="uploadPicture"]';
    ApplicationPageObjectModel.addressTxt = '#currentAddress';
    ApplicationPageObjectModel.stateDrpD = '#state > .css-yk16xz-control > .css-1hwfws3';
    ApplicationPageObjectModel.ctyDrpD = '#city > .css-yk16xz-control > .css-1hwfws3';
    ApplicationPageObjectModel.submitBtn = '#submit';
    return ApplicationPageObjectModel;
}());
exports.ApplicationPageObjectModel = ApplicationPageObjectModel;
