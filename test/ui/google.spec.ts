import { expect } from 'chai'
import { browser } from 'protractor'

describe('Given a SDET learning protractor', () => {
  browser.manage().timeouts().implicitlyWait(0)
  describe('when open Google Page', () => {
    it('then should have a title', async () => {
      await browser.get('http://www.google.com')
      expect(await browser.getTitle()).to.equal('Google');
    })
  })
})