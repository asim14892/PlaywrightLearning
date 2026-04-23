const{test,expect} = require('@playwright/test')

test('handling input boxes and radio buttons', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('id=name').fill("John")
    await page.locator('id=email').fill("abc@gmail.com")

    await expect(page.locator('id=name')).toBeVisible()
    await expect(page.locator('id=name')).toBeEnabled()
    await expect(page.locator('id=name')).toBeEditable()
    
    

    //radiobuttons

    await page.locator('id=male').click()
    await expect(page.locator('id=male')).toBeChecked()
    await expect(page.locator('id=male')).toBeVisible()

    await page.waitForTimeout(5000)
})