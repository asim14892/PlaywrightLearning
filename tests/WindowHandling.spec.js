import{test, expect, chromium} from '@playwright/test'

test('Handling pages', async()=>{
    const browser = await chromium.launch()
    const context = await browser.newContext()

    const page1 = await context.newPage()
    const page2 = await context.newPage()

    await page1.goto('https://www.google.co.in')
    await page2.goto('https://testautomationpractice.blogspot.com/')
    await page1.waitForTimeout(3000)
    await page2.waitForTimeout(3000)

    await browser.close()
})

test.only('Handling multiple pages', async()=>{
    const browser = await chromium.launch()
    const context = await browser.newContext()

    const page1 = await context.newPage()

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle('OrangeHRM')
    
    await page1.locator("//a[text()='OrangeHRM, Inc']").click()
    const promise = await context.waitForEvent('page')

    const page2 = await promise
    await expect(page2).toHaveTitle('OrangeHRM: All in One HR Software for Businesses ')
    
    await page1.waitForTimeout(3000)
    await page2.waitForTimeout(3000)

    await browser.close()
})