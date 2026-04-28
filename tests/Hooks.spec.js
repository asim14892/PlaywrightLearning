import{test, expect} from '@playwright/test'

test('Verify homepage', async({page})=>{
    //Launch app and login
    const username= "asimanand14892"
    await page.goto('https://www.demoblaze.com/')
    await page.click('#login2')
    await page.fill('#loginusername','asimanand14892')
    await page.fill('#loginpassword','Molu@14892')
    await page.locator("//button[text()='Log in']").click()


    //verify homepage
    await page.waitForSelector('#nameofuser')
    await expect(page.locator('#nameofuser')).toHaveText("Welcome "+username)


    //Logout
    await page.click('#logout2')
    await page.waitForTimeout(3000)
})


test('Add to cart', async({page})=>{
    //Launch app and login
    const username= "asimanand14892"
    await page.goto('https://www.demoblaze.com/')
    await page.click('#login2')
    await page.fill('#loginusername',username)
    await page.fill('#loginpassword','Molu@14892')
    await page.locator("//button[text()='Log in']").click()


    //Add to cart
    await page.waitForTimeout(7000)
    await page.waitForSelector('.hrefch')
    const products = await page.$$('.hrefch')
    for(let prd of products){
        const prodname = await prd.textContent()
        if(prodname=='Nokia lumia 1520'){
            await page.waitForTimeout(2000)
            await prd.click()
            break;
        }
    }
    await page.waitForTimeout(5000)
    await page.locator("//a[text()='Add to cart']").click()
    await page.waitForTimeout(5000)
    //handling alerts
    page.on('dialog', async(dialog)=>{
        await expect(dialog.message()).toBe('Product added.')
        dialog.accept()
    })


    //Logout
    await page.waitForTimeout(2000)
    await page.click('#logout2')
    await page.waitForTimeout(3000)
})