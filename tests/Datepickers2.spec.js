const{test, expect} = require('@playwright/test')

test('handling date pickers', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.click('#txtDate')

    const expYear = "2023"
    const expMonth = "October"
    const expdate = "6"

    await page.locator('.ui-datepicker-year').selectOption("2023")
    await page.locator('.ui-datepicker-month').selectOption("Oct")

    await page.locator(`//a[@class='ui-state-default'][text()='${expdate}']`).click()

    await page.waitForTimeout(5000)


})