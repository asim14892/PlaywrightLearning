const{test,expect} = require('@playwright/test')

test('handling multiple elements',async({page})=>{
    await page.goto('https://www.demoblaze.com/')

    ////div[@id='tbodyid']//h4//a
    await page.waitForSelector("//div[@id='tbodyid']//h4//a")
    const allProducts = await page.$$("//div[@id='tbodyid']//h4//a")

    for(const eachProduct of allProducts){
        const prodname = await eachProduct.textContent()
        console.log('The name of product is: '+prodname)
    }
})