const{test,expect} = require('@playwright/test')

test('Verify home page',async({page})=>{
    await page.goto('https://www.demoblaze.com/');
    const pgTitle = await page.title();
    console.log('The title of page is:'+pgTitle);
    await expect(page).toHaveTitle("STORE")

    const pgURL = await page.url();
    console.log('The url of page is: '+pgURL);
    await expect(page).toHaveURL("https://www.demoblaze.com/")

    await page.close;
})