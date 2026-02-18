exports.config = {

  tests: './features/*.feature',

  output: './_output',

  helpers: {
    Playwright: {
      url: 'http://127.0.0.1:5500',
      show: false,
      browser: 'chromium'
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

  bootstrap: null,
  mocha: {},
  name: 'mini-site-js'
};
