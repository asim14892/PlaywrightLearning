const{test, expect} = require('@playwright/test')

test('Handling inner frames', async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')

    const parentframe = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    const txtbox = await parentframe.locator("[name='mytext3']")
    await txtbox.fill('ASIM ANAND')
    await page.waitForTimeout(3000)


    const childframe = await parentframe.childFrames()
    await childframe[0].locator("//div[@id='i6' and @role='radio']").check()
    await page.waitForTimeout(3000)


})