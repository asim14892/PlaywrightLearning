import{test, expect} from '@playwright/test'

test('Handling static web tables', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    const booktbl = await page.locator("//table[@name='BookTable']")
    const cols = await booktbl.locator('tbody th')
    console.log('The number of cols: ', await cols.count())

    const rows = await booktbl.locator('tbody tr')
    console.log('The number of rows: ',await rows.count())

    //reading all the data
    /*
    for(let i=0; i< await rows.count(); i++){
        const currrow = rows.nth(i)
        const data = currrow.locator('td')

        for(let j=0;j<await data.count();j++){
            console.log(await data.nth(j).textContent())
        }
    }
        */

    //get the price of book Master in JAVA
    for(let i=0; i< await rows.count(); i++){
        const currrow = rows.nth(i)
        const data = currrow.locator('td')

        for(let j=0;j<await data.count();j++){
            let value = await data.nth(j).textContent()
            console.log(value)
            if(value=='Master In Java'){
                console.log('The price is: ',await data.nth(j+3).textContent())
            }
        }
    }

})
