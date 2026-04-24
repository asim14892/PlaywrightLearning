const{test,expect} = require('@playwright/test')

test.skip('Handling simple alerts', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //registering a dialog handler
    page.on('dialog',async(dialog)=>{
        await expect(dialog.type()).toContain('alert')
        await expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept()
    })

    await page.locator("//button[@id='alertBtn']").click()
    await page.waitForTimeout(2000)
})

test.skip('Handling confirmation alerts', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //registering a dialog handler
    page.on('dialog',async(dialog)=>{
        await expect(dialog.type()).toContain('confirm')
        await expect(dialog.message()).toContain('Press a button!')
        await dialog.accept()
    })

    await page.locator("//button[@id='confirmBtn']").click()
    const alertmsg = await page.locator('#demo')
    await expect(alertmsg).toHaveText('You pressed OK!')
    await page.waitForTimeout(2000)
})


test('Handling prompt alerts', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //registering a dialog handler
    page.on('dialog',async(dialog)=>{
        await expect(dialog.type()).toContain('prompt')
        await expect(dialog.message()).toContain('Please enter your name:')
        await expect(dialog.defaultValue()).toBe('Harry Potter')
        await dialog.accept("Asim Anand")
    })

    await page.locator("//button[@id='promptBtn']").click()
    const alertmsg = await page.locator('#demo')
    await expect(alertmsg).toHaveText('Hello Asim Anand! How are you today?')
    await page.waitForTimeout(2000)
})
