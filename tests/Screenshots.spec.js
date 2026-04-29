import {test,expect} from '@playwright/test'

test('Normal screenshot', async({page})=>{
    await page.goto('https://www.demoblaze.com/')
    await page.screenshot({path:'tests/Screenshots/Screenshot'+Date.now()+'.png'})
})

test('Fullpage screenshot', async({page})=>{
    await page.goto('https://www.demoblaze.com/')
    await page.screenshot({path:'tests/Screenshots/Screenshot'+Date.now()+'.png',fullPage:true})
})

test.only('Element screenshot', async({page})=>{
    await page.goto('https://www.demoblaze.com/')
    await page.locator("(//div[@class='card h-100'])[4]").screenshot({path:'tests/Screenshots/Screenshot'+Date.now()+'.png'})
})