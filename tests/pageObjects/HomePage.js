const { expect } = require("@playwright/test")

exports.HomePage = class HomePage{
    constructor(page){
        this.page = page
        this.nameofuser = '#nameofuser'
        this.productList = "//div[@class='card-block']//a"
        this.btnAddtocart = "//a[text()='Add to cart']"
        this.cartlink = '#cartur'
    }


    async verifySuccessfulLogin(welcomemsg){
        await this.page.waitForSelector(this.nameofuser)
        const usermsg = await this.page.locator(this.nameofuser).textContent()
        await expect(usermsg).toBe(welcomemsg)
    }

    async addTocart(productname){
        const listofproducts = await this.page.$$(this.productList)
        for(const prd of listofproducts){
            const prdnm = await prd.textContent()
            if(prdnm==productname){
                prd.click()
                break;
            }
        }

        await this.page.on('dialog', async(dialog)=>{
            await expect(dialog.message()).toBe('Product added.')
            await dialog.accept()
        })
        await this.page.waitForTimeout(5000)
        await this.page.locator(this.btnAddtocart).click()
    }

    async clickLinkcart(){
        await this.page.waitForTimeout(5000)
        await this.page.locator(this.cartlink).click()
    }
}