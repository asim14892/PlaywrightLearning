import{test, expect} from '@playwright/test'

test('Handling datepickers', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.click('#datepicker')

    const expYear = "2028"
    const expMonth = "October"
    const expdate = "6"

    while(true){
        const currMonth = await page.locator('.ui-datepicker-month').textContent()
        const currYear = await page.locator('.ui-datepicker-year').textContent()
        if(currYear==expYear && currMonth==expMonth){
            break;
        }
        await page.locator('[title="Next"]').click()
    }
    /*
    const alldates = await page.$$("//a[@class='ui-state-default']")
    for(const dt of alldates){
        if(await dt.textContent()==expdate){
            await dt.click()
            break;
        }
    }
        */

    await page.locator(`//a[@class='ui-state-default'][text()='${expdate}']`).click()
    await page.waitForTimeout(5000)
})