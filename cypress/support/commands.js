// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/**
 * Custom command to encapsulate getting elements by selector
 */
Cypress.Commands.add("getElementBySelector", (selector, timeout) => {
  return timeout
    ? cy.get(selector, {
        timeout,
      })
    : cy.get(selector);
});

Cypress.Commands.add("loginUser", ({ username, password }) => {
  cy.visit("/login");
  cy.getElementBySelector("#username").type(username);
  cy.getElementBySelector("#password").type(password);
  cy.getElementBySelector('button[type="submit"]').click();
});

// Custom command to verify login page elements
Cypress.Commands.add("verifyLoginPage", () => {
  cy.getElementBySelector("h2").should("contain.text", "Login Page");
  cy.getElementBySelector("#username").should("be.visible");
  cy.getElementBySelector("#password").should("be.visible");
  cy.getElementBySelector('button[type="submit"]').should("be.visible");
});

/**
 * Validate successful login
 */
Cypress.Commands.add("validateSuccessfulLogin", () => {
  cy.location("pathname").should("equal", "/secure");
  cy.getElementBySelector("#flash.success").should("be.visible");
  cy.getElementBySelector("#flash.success").should(
    "contain",
    "You logged into a secure area!"
  );
});

// Custom command to verify error messages
Cypress.Commands.add("validateErrorMessage", (expectedMessage) => {
  cy.getElementBySelector("#flash")
    .should("be.visible")
    .and("have.class", "error")
    .and("contain.text", expectedMessage);
  cy.url().should("include", "/login");
});

// Custom command to verify secure area access
Cypress.Commands.add("verifySecureArea", () => {
  cy.getElementBySelector("h2").should("contain.text", "Secure Area");
  cy.getElementBySelector('a[href="/logout"]').should("be.visible");
});

// Custom command to dismiss error message
Cypress.Commands.add("dismissErrorMessage", () => {
  cy.getElementBySelector("#flash a").click();
  cy.getElementBySelector("#flash").should("not.exist");
});
/**
 * Logout command to logout the user
 */
Cypress.Commands.add("logout", () => {
  cy.getElementBySelector('a[href="/logout"]').click();
  cy.url().should("include", "/login");
  cy.getElementBySelector("#flash").should(
    "contain.text",
    "You logged out of the secure area!"
  );
});
