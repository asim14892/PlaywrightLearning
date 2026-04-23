const{test,expect} = require('@playwright/test')

test('Handling built in locators', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    
    const logo = await page.getByAltText('company-branding')
    await expect(logo).toBeVisible()

    //await page.waitForSelector('name=username')
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole('button',{type:'submit'}).click()

    const name = await page.locator("//p[@class='oxd-userdropdown-name']").textContent()
    const username = await page.locator("//p[@class='oxd-userdropdown-name']")
    console.log('The name is: '+name)
    //const name = await page.getByText('Niken userRK')
    await expect(await page.getByText(name)).toBeVisible()
    await expect(username).toBeVisible()
})