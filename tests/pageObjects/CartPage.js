const { expect } = require("@playwright/test")

exports.CartPage=class CartPage{
    constructor(page){
        this.page=page
        this.tbl = "//table[contains(@class,'table-bordered')]"
        this.cols = this.tbl + "//thead//th"
        this.rows = this.tbl + "//tbody//tr"
    }


    async verifyProductinTbl(prodname){
        await this.page.waitForTimeout(5000)
        const rowcount = await this.page.locator(this.rows).count()

        const colcount = await this.page.locator(this.cols).count()
        console.log("Column count is: "+colcount)

        for(let i=0;i<await rowcount; i++){
            //const currow = await this.page.locator(this.rows).nth(i)
            //const data = await currow.locator('td')
            const celltext = await this.page.locator(this.rows).nth(i).textContent()
            console.log("cell text is: ", celltext)
            if(celltext.includes(prodname)){
                await expect(prodname).toBeTruthy()
                console.log("product found")
                break;
            }
        }
    }
}