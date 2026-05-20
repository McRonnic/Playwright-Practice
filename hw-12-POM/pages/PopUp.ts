import { test, expect } from '@playwright/test'
import { Page, Locator } from '@playwright/test'


export default class PopUp {    
    readonly page: Page;
    readonly modalLocator: Locator;
    readonly modalBody: Locator;



    constructor(page:Page) {
        this.page = page
        this.modalLocator = page.locator('.modal-title')
        this.modalBody = page.locator('.modal-body > p')

    }

    async openModal() {
    await this.page.goto('https://webdriveruniversity.com/Popup-Alerts/index.html')
    await this.page.click('#button2')
    }

    async getText() {
        return await this.modalBody.textContent()
    }

    async closeModal() {    
    await this.page.click('.modal-footer :nth-child(1)')
    }

}