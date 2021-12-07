export class ApplicationPageObjectModel {

  // page elements

  public static firstNameTxt = '#firstName';
  public static lastNameTxt = '#lastName';
  public static emailTxt = '#userEmail';
  public static maleRb = '#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label';
  public static userNumberTxt ='#userNumber';
  public static dateOfBirthDp = '#dateOfBirthInput';
  public static subjectsTxt = '.subjects-auto-complete__value-container';
  public static musicChkB = '#hobbiesWrapper > .col-md-9 > :nth-child(3) > .custom-control-label';
  public static uploadPictureBtn = '[id="uploadPicture"]';
  public static addressTxt = '#currentAddress';
  public static stateDrpD = '#state > .css-yk16xz-control > .css-1hwfws3';
  public static ctyDrpD = '#city > .css-yk16xz-control > .css-1hwfws3';
  public static submitBtn = '#submit';

  // page actons

  public static insertFirstName(firstname: string){
    cy.get(ApplicationPageObjectModel.firstNameTxt)
      .type(firstname);
  }

  public static insertLastName(lastname: string){
  cy.get(ApplicationPageObjectModel.lastNameTxt)
    .type(lastname);
  }

  public static insertEmail(email: string){
  cy.get(ApplicationPageObjectModel.emailTxt)
    .type(email);
  }

  public static tickMaleRadioButton(){
  cy.get(ApplicationPageObjectModel.maleRb)
    .click();
  }

  public static insertMobileNumber(mobileNumber: string){
  cy.get(ApplicationPageObjectModel.userNumberTxt)
    .type(mobileNumber);
  }

  public static insertDateOfBirth(dateOfBirth: string){
  cy.get(ApplicationPageObjectModel.dateOfBirthDp)
    .type('{selectall}')
    .type(dateOfBirth)
    .type('{enter}');
  }

  public static insertSubjects(subjects: string){
  cy.get(ApplicationPageObjectModel.subjectsTxt)
    .type(subjects + '{enter}');
  }

  public static tickMusicCheckbox(){
  cy.get(ApplicationPageObjectModel.musicChkB)
    .click();
  }

  public static uploadStudentPicture(picture: string){
  cy.get(ApplicationPageObjectModel.uploadPictureBtn)
    .attachFile(picture);
  }

  public static insertAddress(address: string){
  cy.get(ApplicationPageObjectModel.addressTxt)
    .type(address);
  }

  public static insertState(state: string){
  cy.get(ApplicationPageObjectModel.stateDrpD)
    .type(state + '{enter}');
  }

  public static insertCity(city: string){
  cy.get(ApplicationPageObjectModel.ctyDrpD)
    .type(city + '{enter}');
  }

  public static clickSubmitBtn(){
  cy.get(ApplicationPageObjectModel.submitBtn)
    .click();
  }
}