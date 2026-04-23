const{test,expect} = require('@playwright/test')

test('validate Assertions', async({page})=>{
    await page.goto('https://tutorialsninja.com/demo/index.php?route=account/register')

    //1- toHaveURL
    await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=account/register')

    //2- toHaveTitle
    await expect(page).toHaveTitle('Register Account')

    //3- toBeVisible
    const logo = await page.locator('#logo h1')
    await expect(logo).toBeVisible()

    //4- toBeEditable//toBeDisbaled
    const searchbox = await page.locator("input[name='search']")
    await expect(searchbox).toBeEditable()

    //5- toBeChecked
    const newsletterradio = await page.locator("input[name='newsletter'][value='0']")
    await expect(newsletterradio).toBeChecked()

    const privacypolicy = await page.locator("input[name='agree']")
    await privacypolicy.click()
    await expect(privacypolicy).toBeChecked()

    //6- toHaveAttribute
    const contBtn = await page.locator("input[value='Continue']")
    await expect(contBtn).toHaveAttribute('type','submit')


    //7- tohaveText
    const hdr = await page.locator('#content h1')
    await expect(hdr).toHaveText('Register Account')

    //toHaveCount
})