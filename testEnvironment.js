if (process.env.DD_ENV === 'ci') {
  require('dd-trace/ci/jest/env')
}

// jest-environment-jsdom is an option too
module.exports = require('jest-environment-jsdom')