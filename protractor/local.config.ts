
import { Config, browser } from 'protractor';

const firefoxConfig = {
    browserName: 'firefox',
    name: 'firefox-tests',
    shardTestFiles: true,
    maxInstances: 1,
    'moz:firefoxOptions': {
        args: [
            '--window-size=1076,720'
        ]
    }
};

const chromeConfig = {
    browserName: 'chrome',
    name: 'chrome-tests',
    shardTestFiles: true,
    maxInstances: 1,
    'chromeOptions': {
        args: [
            '--window-size=1076,720'
        ]
    }
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
        browser.manage().window().maximize();
    },
    mochaOpts: {
        reporter: 'mochawesome-screenshots',
        timeout: 60000,    //Antes era 60000, toca probar a ver si da
    },
    multiCapabilities: [chromeConfig, firefoxConfig]
};
