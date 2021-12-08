
import { Config, browser } from 'protractor';

export const config: Config = {
    framework: 'mocha',
    specs: ['../test/ui/**/*.js'],      
    seleniumAddress: 'http://localhost:4444/wd/hub',
    SELENIUM_PROMISE_MANAGER: false,
    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        browser.manage().timeouts().implicitlyWait(0);
    },
    mochaOpts: {
        reporter: 'mochawesome-screenshots',
        timeout: 120000,
    },
    capabilities: {
        browserName: 'chrome',
    }
};
