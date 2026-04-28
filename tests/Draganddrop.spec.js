const{test, expect} = require('@playwright/test')

test('DragAndDrop', async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/dragdrop/')

    const tgtelement = await page.locator("//div[@id='bin']")
    const srcelement1 = await page.locator('#one')
    const srcelement2 = await page.locator('#two')
    const srcelement3 = await page.locator('#three')
    const srcelement4 = await page.locator('#four')
    const srcelement5 = await page.locator('#five')


    //Approach1
    await srcelement1.hover()
    await page.mouse.down()

    await tgtelement.hover()
    await page.mouse.up()
    await page.waitForTimeout(4000)

    //Approach2
    await srcelement2.dragTo(tgtelement)
    await page.waitForTimeout(2000)

    await srcelement3.dragTo(tgtelement)
    await page.waitForTimeout(2000)

    await srcelement4.dragTo(tgtelement)
    await page.waitForTimeout(2000)

    await srcelement5.dragTo(tgtelement)
    await page.waitForTimeout(2000)

})