import { browser, ExpectedConditions } from 'protractor';
import { CreateUserPage, MainPage } from '../../src/ui/index';

describe('before buying an item', () => {
    const expectedConditions = ExpectedConditions;
    const createUserPage = new CreateUserPage();
    const mainPage = new MainPage();
    it('it should get the page', async (done) => {
        await browser.get('http://host.docker.internal:8080');
        expect(await browser.getTitle()).toEqual('Atsea Shop');
        done();
    });
    describe('then it should create an user', () => {
        it('should create an user', async (done) => {
            await browser.wait(expectedConditions.elementToBeClickable(mainPage.getBtnCreateUser()));
            await mainPage.getBtnCreateUser().click();
            await browser.wait(expectedConditions.presenceOf(createUserPage.getCreateUserForm()));
            await browser.wait(expectedConditions.elementToBeClickable(createUserPage.getUsernameInput()));
            await createUserPage.getUsernameInput().sendKeys('user');
            await browser.wait(expectedConditions.elementToBeClickable(createUserPage.getPasswordInput()));
            await createUserPage.getPasswordInput().sendKeys('pas');
            await browser.wait(expectedConditions.elementToBeClickable(createUserPage.getSubmitBtn()));
            await createUserPage.getSubmitBtn().click();
            await browser.wait(expectedConditions.presenceOf(createUserPage.getSuccessMessage()));
            expect(createUserPage.getSuccessMessage()).toEqual('Congratulations! Your account has been created!');
            done();
        });
    });
    describe('after creating the user', () => {
        it('should go back to the main page', async (done) => {
            await browser.wait(expectedConditions.elementToBeClickable(createUserPage.getSuccessBtn()));
            await createUserPage.getSuccessBtn().click();
            await browser.wait(expectedConditions.presenceOf(mainPage.getWelcomeMessage()));
            expect(mainPage.getWelcomeMessage()).toEqual('Welcome!');
            done();
        });
        it('it should log out', async (done) => {
            await browser.wait(expectedConditions.presenceOf(mainPage.getWelcomeMessage()));
            await browser.wait(expectedConditions.elementToBeClickable(mainPage.getBtnSignOut()));
            await mainPage.getBtnSignOut().click();
            await browser.wait(expectedConditions.presenceOf(mainPage.getBtnCreateUser()));
            expect(mainPage.getBtnCreateUser().innerText).toEqual('Create User');
            done();
        });
    });

});
