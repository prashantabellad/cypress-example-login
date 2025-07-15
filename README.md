# E2E Automated Tests for Biorev

Automated tests for login functionality using Cypress with and without Page Object Model.

Please refer to my blogpost on why I prefer not build test suites in Cypress with Page Object Model
https://medium.com/@prashantabellad/thinking-beyond-page-object-model-in-cypress-test-automation-310e32840473

## Test Site

- **URL**: https://the-internet.herokuapp.com/login

## Project Structure

```
cypress-login-tests/
├── cypress/
│   ├── e2e/biorev/
│   │   ├── user-authorization-pom.cy.js                 # Tests with Page Object Model
│   │   ├── user-authorization.cy.js                     # Tests with no Page Object Model. Replaced it with Custom Commands
│   └── support/
│       ├── pageObjectModels/
│       │   └── LoginPageObject.js      # Page Object Model class
│       └── commands.js                 # Custom Cypress commands
│       └── testdata.js                 # Custom Cypress commands
├── cypress.config.js                   # Cypress configuration
└── package.json                        # Project dependencies
```

## Test Files Overview

### 1. `user-authorization-pom.cy.js` - Page Object Model Approach

- Uses Page Object Model pattern

### 2. `user-authorization.cy.js` - Using Cypress Custom Command Approach

- Uses Custom Commands
- Forces the testers to think from user (steps) perspective rather than page based implementation perspective

## Setup Instructions

1. **Environment Dependencies**
   node version 20 and above

1. **Install Dependencies**

   ```bash
   npm install
   ```

1. **Install Cypress** (if not already installed)
   ```bash
   npm install cypress --save-dev
   ```

## Running Tests

### Interactive Mode (Cypress Test Runner)

```bash
npm run test
```

Select `E2E Testing` on Welcome to Cypress page
Select one of the browsers Electron, Chrome etc

### Headless Mode

```bash
npm run test:headless
```
