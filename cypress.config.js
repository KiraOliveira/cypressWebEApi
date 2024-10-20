const { defineConfig } = require("cypress");

module.exports = defineConfig({
  experimentalMemoryManagement: true,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 60000,
  responseTimeout: 30000,
  viewportWidth: 1280,
  viewportHeight: 720,  
  video : true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: { hideXhr: true },
    baseUrl: 'https://www.saucedemo.com',
    chromeWebSecurity:false
  },
});
