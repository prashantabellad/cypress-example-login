/// <reference types="cypress" />
import { validUser } from "../../support/testdata";
import LoginPage from "../../support/pageObjectModels/LoginPageObject";

describe("POM: User Authorization for biorev's herokuapp", () => {
  let loginPage;
  const { username, password } = validUser;

  beforeEach(() => {
    loginPage = new LoginPage(); // Creates new instance for each test
    cy.visit("/login");
  });

  context("Valid Login", () => {
    it("User should be able to successful login with valid credentials", () => {
      loginPage.login(username, password);

      loginPage.verifySuccessfulLogin();
    });
  });
  context("Invalid Login", () => {
    it("User should not be able to login with invalid username", () => {
      loginPage.login("invalidUser", password);
      loginPage.verifyInvalidUsernameError();

      // Verify user remains on login page
      cy.url().should("include", "/login");

      // Verify login form is still visible
      loginPage.usernameInput.should("be.visible");
      loginPage.passwordInput.should("be.visible");
    });

    it("User should not be able to login with invalid password", () => {
      // Attempt login with valid username and invalid password
      loginPage.login(username, "password");

      // Verify error message appears
      loginPage.verifyInvalidPasswordError();

      // Verify user remains on login page
      cy.url().should("include", "/login");

      // Verify login form is still visible
      loginPage.usernameInput.should("be.visible");
      loginPage.passwordInput.should("be.visible");
    });

    it("User should not be able to login with invalid username and password", () => {
      loginPage.login("invalidUser", "invalidPassword");

      // Verify error message appears (should show username error first)
      loginPage.verifyInvalidUsernameError();

      // Verify user remains on login page
      cy.url().should("include", "/login");
    });
  });
});
