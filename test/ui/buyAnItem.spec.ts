import { expect } from "chai";
import { browser } from "protractor"

describe('a', () => {
    
    it('b', async () => {
        await browser.get('host.docker.internal:8080/index.html#/?_k=mh4z4e');
        expect(browser.getCurrentUrl()).to.equal('localhost:8080');
        expect(browser.getTitle()).to.equal('Atsea Shop');  //{}
    })
})



/*import { browser, ExpectedConditions } from 'protractor';
import * as chai from 'chai';
import { SignInBtnMainStore, SignInFormModalPage, AddItemAndGoToCart, CheckoutPage, SuccessPage } from '../../src/ui/index'

describe('When buying an item', async () => {
    
    const expectedConditions = ExpectedConditions;

    it('then should get the page', async function () {
        await browser.get('http://localhost:8080/', 2500);
        await chai.expect(browser.getTitle()).to.equal('Atsea Shop');
    });
    it('then should access to the sign in menu', async function () {
        const signInBtnMainStore: SignInBtnMainStore = new SignInBtnMainStore();
        await browser.wait(expectedConditions.elementToBeClickable(signInBtnMainStore.getBtnSignIn))
        browser.sleep(3000);
        await signInBtnMainStore.getBtnSignIn.click();
    });
    it('should fill the sign in form', async()=>{
        const signInFormModalPage: SignInFormModalPage = new SignInFormModalPage();
        await browser.wait(expectedConditions.elementToBeClickable(signInFormModalPage.getUsernameField), 3000)
        await signInFormModalPage.fillUsernameField("a");
        await browser.wait(expectedConditions.elementToBeClickable(signInFormModalPage.getPasswordField), 3000)
        await signInFormModalPage.fillPasswordField("a");
        await browser.wait(expectedConditions.elementToBeClickable(signInFormModalPage.getBtnSubmitUserData), 3000)
        await signInFormModalPage.submitUserData();
    });
    it('then should add an item and go to checkout', async () => {
        
        const addItemAndGoToCart: AddItemAndGoToCart = new AddItemAndGoToCart();
        
        await browser.wait(expectedConditions.elementToBeClickable(addItemAndGoToCart.getAddProductBtn), 3000)
        await addItemAndGoToCart.ClickAddBtn();
        await browser.wait(expectedConditions.elementToBeClickable(addItemAndGoToCart.getCheckoutBtn), 3000)
        await addItemAndGoToCart.ClickCheckoutBtn();
    });
    it('then should click button to complete order', async () => {
        
        const checkoutPage: CheckoutPage = new CheckoutPage();
        await browser.wait(expectedConditions.elementToBeClickable(checkoutPage.getBtnCompleteOrder), 3000)
        await checkoutPage.clickBtnCompleteOrder();
    });
    it('then should go back to the main page after success', async () => {
        
        const succesPage: SuccessPage = new SuccessPage();
        await browser.wait(expectedConditions.elementToBeClickable(succesPage.getContinueShoppingBtn), 3000)
        await succesPage.clickContinueShoppingBtn();
    });

});
*/