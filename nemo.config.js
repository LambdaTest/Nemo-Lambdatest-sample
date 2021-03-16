const path = require('path');

module.exports = {
  plugins: {
    view: {
      module: 'nemo-view'
    }
  },
  output: {
    reports: path.resolve('test/functional', 'report')
  },
  profiles: {
    base: {
      tests: path.resolve('test/functional', '*test.js'),
      "driver": {
        "builders": {
          "usingServer": [ "http://hub.lambdatest.com/wd/hub" ],
          "withCapabilities": [{
            "build": "LT Nemo Sample Tests",
            "name": "LT Nemo sample test",
            "platform" : "Windows 10",
            "browserName" : "Chrome",
            "version" : "89.0",
            "user": "env:LT_USERNAME",
            "accessKey": "env:LT_ACCESS_KEY"

          }]
        }
      },
      data: {
        baseUrl: 'https://www.google.com'
      },
      mocha: {
        timeout: 180000,
        reporter: 'mochawesome',
        reporterOptions: {
          quiet: true
        }
      }
    },
    chrome: {
      driver: {
        "builders": {
          "usingServer": [ "http://hub.lambdatest.com/wd/hub" ],
          "withCapabilities": [{
            "build": "LT Nemo Sample Tests",
            "name": "LT Nemo sample test",
            "platform" : "Windows 10",
            "browserName" : "Chrome",
            "version" : "latest",
            "user": "env:LT_USERNAME",
            "accessKey": "env:LT_ACCESS_KEY"

          }]
        }
      },
      mocha: {
        timeout: 180000,
        reporter: 'mochawesome',
        reporterOptions: {
          quiet: true
        }
      }
    },
    chrome_2: {
      driver: {
        "builders": {
          "usingServer": [ "http://hub.lambdatest.com/wd/hub" ],
          "withCapabilities": [{
            "build": "LT Nemo Sample Tests",
            "name": "LT Nemo sample test",
            "platform" : "Windows 7",
            "browserName" : "Chrome",
            "version" : "83.0",
            "user": "env:LT_USERNAME",
            "accessKey": "env:LT_ACCESS_KEY"

          }]
        }
      },
      mocha: {
        timeout: 180000,
        reporter: 'mochawesome',
        reporterOptions: {
          quiet: true
        }
      }
    },
    firefox: {
      driver: {
        "builders": {
          "usingServer": [ "http://hub.lambdatest.com/wd/hub" ],
          "withCapabilities": [{
            "build": "LT Nemo Sample Tests",
            "name": "LT Nemo sample test",
            "platform" : "Windows 10",
            "browserName" : "Firefox",
            "version" : "latest",
            "user": "env:LT_USERNAME",
            "accessKey": "env:LT_ACCESS_KEY"

          }]
        }
      },
      mocha: {
        timeout: 180000,
        reporter: 'mochawesome',
        reporterOptions: {
          quiet: true
        }
      }
    }
  }
}
