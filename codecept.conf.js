exports.config = {

  tests: './features/*.feature',
  output: './_output',

  helpers: {
    Playwright: {
      url: 'http://localhost:3000',
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
    homePage: './pages/home.page.js'
  },

  gherkin: {
    features: './features/*.feature',
    steps: ['./steps/home.steps.js']
  },

  name: 'mini-site-js'
};
