const{test,expect} = require('@playwright/test')

//import {test,expect} from '@playwright/test'

test('Learn locators', async({page})=>{
    await page.goto('https://www.demoblaze.com/');
    console.log('launching DemoBlaze application...')

    //Click on login link
    await page.waitForSelector("id=login2")
    //await page.locator('id=login2').click;
    await page.click('id=login2');
   console.log('clicked link login...')

   await page.locator('#loginusername').fill('asimanand14892')
   //await page.fill('#loginusername','abc')
   console.log('Username set...')

   await page.locator('#loginpassword').fill('Molu@14892')
   //await page.fill('#loginpassword','abc')
   console.log('Password set...')


   await page.click("//button[@onclick='logIn()']")
   console.log('Clicked button login...')

   //after login find logout link and logout

   await page.click('id=logout2')
   console.log('clicked link logout...')



})