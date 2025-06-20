const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://parabank.parasoft.com",
    cred: "100,101,109,111",
    experimentalRunAllSpecs: true,
  },
});
