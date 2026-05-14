import { expect } from '@playwright/test'
import { Page, Locator } from '@playwright/test'


export default class LoginPage {
    readonly usernameInput: string;
    readonly passwordInput: string;
    readonly loginButtonInput: string;
    readonly page: Page;



    constructor(page:Page) {
        this.page = page
        this.usernameInput = '#user-name'
        this.passwordInput = '#password'
        this.loginButtonInput =  '#login-button'
  
    }

    async navigate() {
        await this.page.goto('')
    }

    async login(username:string, password:string): Promise<void> {
        await this.page.fill(this.usernameInput, username)
        await this.page.fill( this.passwordInput, password)
        await this.page.click(this.loginButtonInput)
        
    }

}