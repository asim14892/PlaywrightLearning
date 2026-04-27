const{test, expect} = require('@playwright/test')
const { compose } = require('node:stream')

test('Handling web tables', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const table = await page.locator('#productTable')
    const rows = await table.locator('tbody tr')
    console.log('The number of rows: ', await rows.count())

    const cols = await table.locator('thead th')
    console.log('The number of cols: ', await cols.count())

    

    await expect(await rows.count()).toBe(5)
    await expect(await cols.count()).toBe(4)

    //click on product 4 checkbox
    /*
    await selectProduct(page, rows, 'Smartwatch')
    await selectProduct(page, rows, 'Laptop')
    await selectProduct(page, rows, 'Tablet')

    //print all product details
    
    for(let i=0; i< await rows.count();i++){
        const currrow = await rows.nth(i)
        const tddata = await currrow.locator('td')
        for(let j=0; j< await tddata.count()-1; j++){
            console.log(await tddata.nth(j).textContent())

        }
         await page.waitForTimeout(1000)

    }
         */


    //read all data from all pages
    const pages = await page.locator('#pagination li a')
    console.log('Total number of pages: ',await pages.count())

    for(let p=0; p<await pages.count();p++){

        if(p>0){
            await pages.nth(p).click()
        }
        for(let i=0; i< await rows.count();i++){
            const currrow = await rows.nth(i)
            const tddata = await currrow.locator('td')
            for(let j=0; j< await tddata.count()-1; j++){
                console.log(await tddata.nth(j).textContent())

            }
            await page.waitForTimeout(1000)

        }



    }

    await page.waitForTimeout(1000)
    
})


    async function selectProduct(page, rows, prodname){
        const matchingrow = rows.filter({
        has: page.locator('td'),
        hasText: prodname
    })
    await matchingrow.locator('input').check()

    }