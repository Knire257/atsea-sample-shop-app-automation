import { browser, ExpectedConditions, } from 'protractor';
import { CreateUserPage, MainPage } from '../../src/ui/index';
//var statusCodes = require('http-status-codes');
var superagent = require('superagent');
import { expect } from 'chai'

describe('before buying an item', () => {
    const expectedConditions = ExpectedConditions;
    const createUserPage = new CreateUserPage();
    const mainPage = new MainPage();

    it("first, it should delete all users to avoid possible problems", (function (done) {
        superagent.del('http://ec2-3-144-243-225.us-east-2.compute.amazonaws.com:8080')
            .set("User-Agent", "agent")
            .set("Content-Type", "application/json")
            .end(done)
    }));
    it('it should get the page', async () => {
        await browser.get('http://ec2-3-144-243-225.us-east-2.compute.amazonaws.com:8080');
        expect(await browser.getTitle()).to.equal('Atsea Shop');
    });

    it('it should create an user', async () => {
        await browser.wait(expectedConditions.elementToBeClickable(mainPage.getBtnCreateUser()));
        await mainPage.getBtnCreateUser().click();
        await browser.wait(expectedConditions.presenceOf(createUserPage.getCreateUserForm()));
        await browser.wait(expectedConditions.elementToBeClickable(createUserPage.getUsernameInput()));
        await createUserPage.getUsernameInput().sendKeys('a');
        await browser.wait(expectedConditions.elementToBeClickable(createUserPage.getPasswordInput()));
        await createUserPage.getPasswordInput().sendKeys('a');
        await browser.wait(expectedConditions.elementToBeClickable(createUserPage.getSubmitBtn()));
        await createUserPage.getSubmitBtn().click();
        //await browser.wait(expectedConditions.presenceOf(createUserPage.getSuccessMessage()));
        //expect(await createUserPage.getSuccessMessage().getText()).to.equal('Congratulations! Your account has been created!');
    });

    describe('after creating the user', () => {
        it('should go back to the main page', async () => {
            await browser.wait(expectedConditions.elementToBeClickable(createUserPage.getSuccessBtn()));
            await createUserPage.getSuccessBtn().click();
            await browser.wait(expectedConditions.presenceOf(mainPage.getWelcomeMessage()));

        });
        it('it should log out', async () => {
            await browser.wait(expectedConditions.presenceOf(mainPage.getWelcomeMessage()));
            await browser.wait(expectedConditions.elementToBeClickable(mainPage.getBtnSignOut()));
            await mainPage.getBtnSignOut().click();
            await browser.wait(expectedConditions.presenceOf(mainPage.getBtnCreateUser()));
        });
    });
});
