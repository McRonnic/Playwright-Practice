import { expect } from '@playwright/test'
import { Page, Locator } from '@playwright/test'


export default class Header{
    readonly page: Page;
    readonly cartLocator: string;

    constructor(page:Page) {
        this.page = page
        this.cartLocator = ".shopping_cart_link"
    }

    async itemNum() {
        return await this.page.textContent('.shopping_cart_badge')
    }
}

