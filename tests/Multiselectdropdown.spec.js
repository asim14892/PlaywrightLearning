const{test, expect}=require('@playwright/test')

test('MultiSelectDropdown', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('#colors').selectOption(['Red','Blue','Green'])
    await page.waitForTimeout(3000)

    //Assertions
    //1) number of options

    //const alloptions = await page.locator('#colors option')
    //await expect(alloptions).toHaveCount(7)


    //2) using array
    //const alloptions = await page.$$('#colors option')
    //console.log(alloptions.length)
    //await expect(alloptions.length).toBe(7)

    //3) check presence of value

    const alloptions = await page.locator('#colors').textContent()
    await expect.soft(alloptions.includes('Green')).toBeTruthy()
    await expect(alloptions.includes('Black')).toBeFalsy()
})