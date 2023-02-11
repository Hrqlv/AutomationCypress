const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    chromeWebSecurity: false,
    baseURL: 'https://www.saucedemo.com'
  }
})