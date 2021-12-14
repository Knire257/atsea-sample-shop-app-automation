import { browser, ExpectedConditions } from 'protractor';
import { MainPage, SignInFormModalPage, CheckoutPage, SuccessPage } from '../../src/ui/index';
import { expect } from 'chai';
var superagent = require('superagent');

describe('When buying an item', () => {
    const expectedConditions = ExpectedConditions;
    const mainPage = new MainPage();
    const signInFormModalPage = new SignInFormModalPage();
    const checkoutPage = new CheckoutPage();
    const successPage = new SuccessPage();

    describe('Before buying an item', ()=> {

        it("first, it should delete all users to avoid possible problems", (function (done) {
            superagent.del('http://ec2-3-144-243-225.us-east-2.compute.amazonaws.com:8080/')
                .set("User-Agent", "agent")
                .set("Content-Type", "application/json")
                .end(done)
        }));

        it("then, the API should create an user to be able to complete the purchase", (function (done) {
            superagent.post('http://ec2-3-144-243-225.us-east-2.compute.amazonaws.com:8080/')
                .set("User-Agent", "agent")
                .set("Content-Type", "application/json")
                .send({
                    customerId: 0,
                    name: "Paco",
                    address: "123 malibú, polo norte",
                    email: "paco@example.com",
                    phone: "123 456 7890",
                    username: "u",
                    password: "u",
                    enabled: "true",
                    role: "USER",
                })
                .end(done)
        }));

        it ('it should get the page', async () => {
            await browser.get('http://ec2-3-144-243-225.us-east-2.compute.amazonaws.com:8080/');
            expect(await browser.getTitle()).to.equal('Atsea Shop');
        });
        it('then it should log in an user', async () => {
            await browser.wait(expectedConditions.elementToBeClickable(mainPage.getBtnSignIn()));
            await mainPage.clickBtnSignIn()
            await browser.wait(expectedConditions.presenceOf(mainPage.getSigInForm()));
            await browser.wait(expectedConditions.elementToBeClickable(signInFormModalPage.getUsernameField()));
            await signInFormModalPage.fillUsernameField("u");
            await browser.wait(expectedConditions.elementToBeClickable(signInFormModalPage.getPasswordField()));
            await signInFormModalPage.fillPasswordField("u");
            await browser.wait(expectedConditions.elementToBeClickable(signInFormModalPage.getBtnSubmitUserData()), 3000)
            await signInFormModalPage.submitUserData();
            await browser.wait(expectedConditions.presenceOf(mainPage.getWelcomeMessage()));
            
            expect(mainPage.getWelcomeMessage().getText()).to.equal('Welcome!');
            
        })
        it('then it should add an item to the cart and proceed to checkout', async() => {
            await browser.wait(expectedConditions.elementToBeClickable(mainPage.getAddProductBtn()));
            await mainPage.ClickAddBtn();
            await browser.wait(expectedConditions.elementToBeClickable(mainPage.getCheckoutBtn()));
            await mainPage.clickCheckoutBtn();
            await browser.wait(expectedConditions.presenceOf(checkoutPage.getCheckouPageTitle()));
        })
        it('then it should finish the order', async ()=> {
            await browser.wait(expectedConditions.elementToBeClickable(checkoutPage.getBtnCompleteOrder()));
            await checkoutPage.clickBtnCompleteOrder();
            await browser.wait(expectedConditions.presenceOf(successPage.getSuccessMessage()));
            //expect(successPage.getSuccessMessage().innerText()).to.equal('You have successfully placed an order!');
        })
        it('after, it should go back to the main page', async()=>{
            await browser.wait(expectedConditions.elementToBeClickable(successPage.getContinueShoppingBtn()));
            await successPage.clickContinueShoppingBtn();
            await browser.wait(expectedConditions.presenceOf(mainPage.getPageTitle()));
        })
        it('it should log out', async () => {
            await browser.wait(expectedConditions.presenceOf(mainPage.getWelcomeMessage()));
            await browser.wait(expectedConditions.elementToBeClickable(mainPage.getBtnSignOut()));
            await mainPage.clickBtnSignOut();
            await browser.wait(expectedConditions.presenceOf(mainPage.getBtnCreateUser()));
        })
    });
});
