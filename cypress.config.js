const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      overrideConfig = {}
      if(config.userAgent === 'mobile'){
        overrideConfig.viewportWidth= 375,
        overrideConfig.viewportHeight = 667, 
        overrideConfig.userAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X)AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75Mobile/14E5239e Safari/602.1"
     
      }else if(config.userAgent === 'desktop'){
        overrideConfig.viewportWidth = 1920,
        overrideConfig.viewportHeight = 1080,
        overrideConfig.userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36"
      }
      return {...config, ...overrideConfig}
    },
    baseUrl: 'https://www.saucedemo.com',
    pageLoadTimeout: 60000,

  },
  chromeWebSecurity: false,
});
