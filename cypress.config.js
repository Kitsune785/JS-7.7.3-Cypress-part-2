const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ix2vmz',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
