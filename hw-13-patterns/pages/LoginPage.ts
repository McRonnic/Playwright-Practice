import { expect } from '@playwright/test'
import { Page, Locator } from '@playwright/test'


export default class LoginPage {
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButtonInput: Locator;
    readonly page: Page;
    readonly errorButton: Locator;



    constructor(page:Page) {
        this.page = page
        this.usernameInput = page.locator('#user-name')
        this.passwordInput = page.locator('#password')
        this.loginButtonInput = page.locator( '#login-button')
        this.errorButton = page.locator('.error-message-container')
  
    }

    async navigate() {
        await this.page.goto('')
    }

    async login(username:string, password:string): Promise<void> {
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginButtonInput.click()
        
    }

}