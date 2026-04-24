const{test,expect}=require('@playwright/test')

test('Auto suggestdropdown',async({page})=>{
    await page.goto('https://www.redbus.in/')

    await page.locator("//input[@id='srcinput']").fill('Bhubaneswar')
    await page.waitForSelector("//div[@class='leftContent___881b6e']//div[@role='heading']")
    await page.waitForTimeout(3000)
    const fromcity = await page.$$("//div[@class='leftContent___881b6e']//div[@role='heading']")

    for(var eachoption of fromcity){
        const boardingpt =  await eachoption.innerText()
        console.log(boardingpt)

        if(boardingpt.includes('Bermunda Bus Stand, Bhubaneswar')){
            await eachoption.click()
            break
        }
            

    }
    await page.waitForTimeout(2000)
})