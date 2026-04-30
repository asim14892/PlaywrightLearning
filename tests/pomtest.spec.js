import { test } from '@playwright/test'
import { LoginPage } from "./pageObjects/LoginPage";
import { HomePage } from './pageObjects/HomePage';
import { CartPage } from './pageObjects/CartPage';
test('Verify Login', async({page})=>{
    const lp = new LoginPage(page)
    await lp.launchApplication()
    await lp.performLogin('asimanand14892','Molu@14892')

    const hp = new HomePage(page)
    await hp.verifySuccessfulLogin('Welcome asimanand14892')
    await hp.addTocart('Samsung galaxy s6')
    await hp.clickLinkcart()

    const cp = new CartPage(page)
    await cp.verifyProductinTbl('Samsung galaxy s6')
    await page.waitForTimeout(5000)
})