import { expect } from '@playwright/test'
import { Page, Locator } from '@playwright/test'


export default class Header{
    readonly page: Page;
    readonly cartLocator: Locator;

    constructor(page:Page) {
        this.page = page
        this.cartLocator = page.locator(".shopping_cart_link")
    }

    async itemNum() {
        return await this.cartLocator.textContent()
    }
}

