import { expect } from 'chai'
import { browser, ExpectedConditions } from 'protractor'
import { MainPage } from '../../src/ui/index'

describe('Given a SDET learning protractor', () => {
  const mainPage = new MainPage();
  const expectedConditions = ExpectedConditions;
  browser.manage().timeouts().implicitlyWait(0)
  describe('when open Google Page', () => {
    it('then should have a title', async () => {
      await browser.get('http://host.docker.internal:8080')
      await browser.wait(expectedConditions.presenceOf(mainPage.getPageTitle()))
      expect(await browser.getTitle()).to.equal('Atsea Shop')
    })
  })
})