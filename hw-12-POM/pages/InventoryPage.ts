import { expect } from '@playwright/test'
import { Page, Locator } from '@playwright/test'
import Header from '../components/Header.ts'



export default class InventoryPage {    
    readonly page: Page;
    readonly header: Header;




    constructor(page:Page) {
        this.page = page
        this.header = new Header(page);

    }

    async purchase() {
    await this.page.click('#add-to-cart-sauce-labs-backpack')
    await this.page.click('#add-to-cart-sauce-labs-bike-light')
    await this.page.click('#add-to-cart-sauce-labs-bolt-t-shirt')
    }

}