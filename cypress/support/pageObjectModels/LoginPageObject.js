// cypress/support/pages/LoginPage.js
class LoginPage {
  // Selectors
  get usernameInput() {
    return cy.get("#username");
  }

  get passwordInput() {
    return cy.get("#password");
  }

  get loginButton() {
    return cy.get('button[type="submit"]');
  }

  get errorMessage() {
    return cy.get("#flash");
  }

  get successMessage() {
    return cy.get("#flash.success");
  }

  get logoutButton() {
    return cy.get('a[href="/logout"]');
  }

  get pageTitle() {
    return cy.get("h2");
  }

  // Actions
  visit() {
    cy.visit(Cypress.config(`${baseUrl}`));
  }

  enterUsername(username) {
    this.usernameInput.clear().type(username);
  }

  enterPassword(password) {
    this.passwordInput.clear().type(password);
  }

  clickLogin() {
    this.loginButton.click();
  }

  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
  }

  // Verifications
  verifyLoginPageLoaded() {
    this.pageTitle.should("contain.text", "Login Page");
    this.usernameInput.should("be.visible");
    this.passwordInput.should("be.visible");
    this.loginButton.should("be.visible");
  }

  verifySuccessfulLogin() {
    cy.url().should("include", "/secure");
    this.successMessage
      .should("be.visible")
      .and("contain.text", "You logged into a secure area!");
    this.logoutButton.should("be.visible");
  }

  verifyErrorMessage(expectedMessage) {
    this.errorMessage.should("be.visible").and("contain.text", expectedMessage);
  }

  verifyInvalidUsernameError() {
    this.verifyErrorMessage("Your username is invalid!");
  }

  verifyInvalidPasswordError() {
    this.verifyErrorMessage("Your password is invalid!");
  }
}

export default LoginPage;
