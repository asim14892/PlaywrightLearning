const{test, expect} = require('@playwright/test')

test('Handling datepickers3', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const fromYear = "2023"
    const fromMonth = "October"
    const fromdate = "6"

    const toYear = "2028"
    const toMonth = "October"
    const todate = "6"

    await page.click('#start-date')
})