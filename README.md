# E2E Automated Tests for Biorev

Automated tests for login functionality using Cypress with both approaches of with and without Page Object Model.

# Why Cypress
I have experience working with different test automation tools and the reason to choose Cypress is:
1. Easy to setup
2. Easy to build test script using reusable Custom Commands
3. We can use Custom Commands to move all the reusable user actions --> selecting from dropdown, steps --> Login, Logout, navigation, file uploads etc as resuable Commands
4. So Test Engineer can easliy translate the manual user steps of a test case into automated Cypress scripts leveraging Custom Commands
5. The above helps the test engineer to focus on user steps/ behaviour instead of what pages have been implemented (Page Object Model from Selenium)
6. Cypress helps build robust less flaky tests with features like network intercept, seeding data through API calls, data mocking etc
7. Cypress GUI based test interaction is best in the business for fast test creation and debugging
8. You can add custom test attributes in the front end code (if accessible) and use the same in the test script which makes the test script independent of developer introduced attributes like class, id. This helps in less maintanance when the UI changes

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

2. **Clone the repo**

3. **Install Project dependencies from the root of the project** 
   ```bash
   npm install 
   ```

## Running Tests
ENV FILE
Create .env file by copying .env.example
Add below config
CYPRESS_BASE_URL=https://the-internet.herokuapp.com

### Interactive Mode (Cypress Test Runner)
Run below command from project root folder

```bash
npm run test
```

Select `E2E Testing` on Welcome to Cypress page
Select one of the browsers Electron, Chrome etc

### Headless Mode
Run below command from project root folder

```bash
npm run test:headless
```
