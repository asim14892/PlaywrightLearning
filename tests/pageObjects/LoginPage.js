exports.LoginPage = class LoginPage{
    constructor(page){
        this.page = page
        this.loginlink = '#login2'
        this.username = '#loginusername'
        this.password = '#loginpassword'
        this.btnlogin = "//button[text()='Log in']"
    }

    async launchApplication(){
       await this.page.goto('https://www.demoblaze.com/')
    }

    async performLogin(uname, pwd){
        await this.page.locator(this.loginlink).click()
        await this.page.locator(this.username).fill(uname)
        await this.page.locator(this.password).fill(pwd)
        await this.page.locator(this.btnlogin).click()
    }
}