const path = require('path');
exports.config = {

  tests: './features/*.feature',
  output: './_output',

  helpers: {
    Playwright: {
      url: `file://${path.resolve('./app')}/`,
      show: false,
      browser: 'chromium',
      waitForNavigation: 'load',
      trace: true
    }
  },

  plugins: {
    screenshotOnFail: {
      enabled: true
    }
  },

  include: {
    I: './steps_file.js',
    login_page: './pages/login_page.js'
  },

  gherkin: {
    features: './features/*.feature',
    steps: ['./steps/login.steps.js']
  },

  name: 'mini-site-js'
};
