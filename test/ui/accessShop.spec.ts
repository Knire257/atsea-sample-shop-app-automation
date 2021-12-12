import { expect } from 'chai'
import { browser, ExpectedConditions } from 'protractor'
import { MainPage } from '../../src/ui/index'

describe('First test', () => {
  const mainPage = new MainPage();
  const expectedConditions = ExpectedConditions;
  browser.manage().timeouts().implicitlyWait(0)
  describe('When opening th store page', () => {
    it('then should have a title', async () => {
      await browser.get('http://host.docker.internal:8080');
      await browser.wait(expectedConditions.presenceOf(mainPage.getPageTitle()), 5000);
      expect(await browser.getTitle()).to.equal('Atsea Shop')
    })
  })
})