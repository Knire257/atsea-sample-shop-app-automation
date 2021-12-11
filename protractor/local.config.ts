
import { Config, browser } from 'protractor';

const firefoxConfig = {
    browserName: 'firefox',
    name: 'firefox-tests',
    shardTestFiles: true,
    maxInstances: 1,
   // 'moz:firefoxOptions': {
    //    args: ['--headless', '--window-size=1920,1080']
  //  }
};

const chromeConfig = {
    browserName: 'chrome',
    name: 'chrome-tests',
    shardTestFiles: true,
    maxInstances: 1,
   // 'chromeOptions': {
   //     args: ['--headless', '--window-size=1920,1080']
   // }
};

export const config: Config = {
    framework: 'mocha',
    specs: ['../test/ui/**/*.js'],
    seleniumAddress: 'http://0.0.0.0:4444/wd/hub',
    SELENIUM_PROMISE_MANAGER: false,
    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        browser.manage().timeouts().implicitlyWait(0);
    },
    mochaOpts: {
        reporter: 'mochawesome-screenshots',
        timeout: 60000,
    },
    multiCapabilities: [chromeConfig, firefoxConfig]
};
