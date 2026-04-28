const{test,expect} = require("@playwright/test")

test('Right click', async({page})=>{
    await page.goto('https://www.softwaretestingmentor.com/automation-practice-page-right-click-demo/')

    const menuitem = await page.locator("//h2[text()='Right Click Demo']")
    await menuitem.click({button:'right'})
    await page.waitForTimeout(5000)
    
})

