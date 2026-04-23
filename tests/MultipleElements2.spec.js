const{test,expect} = require('@playwright/test')

test('handling multiple elements',async({page})=>{
    await page.goto('https://www.demoblaze.com/')

    
    await page.waitForSelector("//a")
    const allLinks = await page.$$("//a")
    

    for(const eachLink of allLinks){
        const linkname = await eachLink.textContent()
        console.log('The name of link is: '+linkname)
        //console.log('total links='+allLinks.length)
    }
})