/// <reference types="cypress" />
import { validUser } from "../../support/testdata";

describe("User Authorization for biorev", () => {
  const { username, password } = validUser;
  context("Valid Login", () => {
    it(
      ["smoke"],
      "User should be able to successful login with valid credentials",
      () => {
        cy.loginUser(validUser);
        cy.validateSuccessfulLogin();
      }
    );
  });
  context("Invalid Login", () => {
    it(
      ["smoke"],
      "User should not be able to login with invalid username",
      () => {
        cy.loginUser({ username: "invalidUser", password });
        cy.validateErrorMessage("Your username is invalid!");
      }
    );

    it("User should not be able to login with invalid password", () => {
      cy.loginUser({ username, password: "incorrectPassword" });
      cy.validateErrorMessage("Your password is invalid!");
    });

    it(
      ["smoke"],
      "User should not be able to login with invalid username and password",
      () => {
        cy.loginUser({
          username: "invalidUser",
          password: "incorrectPassword",
        });
        cy.validateErrorMessage("Your username is invalid!");
      }
    );
  });
});
