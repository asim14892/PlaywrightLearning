const{test, expect} = require('@playwright/test')

test('handle select dropdown', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //await page.locator('#country').selectOption({label:'France'})
    //await page.locator('#country').selectOption('India')
    //await page.locator('#country').selectOption({value:'uk'})
    //await page.locator('#country').selectOption({index:9})

    //Assertions -1
    //const options = await page.locator('#country option')
    //await expect(options).toHaveCount(10)

    //Assertion -2
    //const options = await page.$$('#country option')
    //console.log('Total number of options: '+options.length)
    //await expect(options.length).toBe(10)

    //Find a particular value
    //const options = await page.locator('#country').textContent()
    //await expect(options.includes('India')).toBeTruthy()
    //console.log(options)

    //Find a value using loop
    const options = await page.$$('#country option')
    var status=false
    for(const eachopt of options){
        const currvalue = await eachopt.textContent()
        console.log(currvalue)
        if(currvalue.includes('Canada')){
            await page.locator('#country').selectOption('Canada')
            await expect(currvalue).toBeTruthy()
        }
    }






    

    await page.waitForTimeout(3000)
})