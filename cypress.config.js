const { defineConfig } = require("cypress");
const dotenv = require("dotenv");
const cypressDotenv = require("cypress-dotenv");
const { tagify } = require("cypress-tags");

const envFile = "./cypress/.env";
dotenv.config({ path: envFile });

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL,
    setupNodeEvents(on, config) {
      on("file:preprocessor", tagify(config));
      // Load environment variables
      config = cypressDotenv(config, {
        path: envFile,
        // Configure any other dotenv options here
      });
      return config;
    },
  },
});
