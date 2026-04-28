const{test,expect} = require('@playwright/test')

test('Mousehover', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    const pointme = await page.locator("//button[@class='dropbtn']")
    await pointme.hover()
    await page.click("//a[text()='Mobiles']")
    await page.waitForTimeout(3000)

})