const{test,expect} = require('@playwright/test')

test('handling checkboxes', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
   /*
    await page.locator('id=wednesday').check()
    await page.locator('id=monday').check()

    await expect(await page.locator('id=wednesday')).toBeChecked()
    await expect(await page.locator("//input[@id='monday' and @type='checkbox']").isChecked()).toBeTruthy()
    await page.waitForTimeout(3000)
*/
    //checking multiple checkboxes

    const checkboxlocs = [
        "//input[@id='monday' and @type='checkbox']",
        "//input[@id='tuesday' and @type='checkbox']",
        "//input[@id='wednesday' and @type='checkbox']",
        "//input[@id='sunday' and @type='checkbox']"
    ];

    for(const eachloc of checkboxlocs){
        await page.locator(eachloc).check()
    }
    await page.waitForTimeout(3000)
     for(const eachloc of checkboxlocs){
        if(await page.locator(eachloc).isChecked()){
            await page.locator(eachloc).uncheck()
        }
    }


    await page.waitForTimeout(3000)
})