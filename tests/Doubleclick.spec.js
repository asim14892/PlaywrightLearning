const { test, expect } = require("@playwright/test");

test('Doubleclick', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    const copytext = await page.locator("//button[@ondblclick='myFunction1()']")

    await copytext.dblclick()

    const field2 = await page.locator('#field2').textContent()
    
    await expect(field2).toHaveValue('Hello World!')
    await page.waitForTimeout(4000)
})