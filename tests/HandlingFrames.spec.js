const{test,expect} = require('@playwright/test')

test('Handling frames', async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/')
    console.log("Number of frames="+await page.frames().length)

    //getting fframe1
    //const fr1 = await page.frame(<name of frame>)
    const fr1 = await page.frameLocator("//frame[@src='frame_1.html']").locator('[name="mytext1"]')
    await fr1.fill('ASIM ANAND')
    //const fr1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    //await fr1.locator('[name="mytext1"]').fill("ASIM ANAND")
    await page.waitForTimeout(3000)


})