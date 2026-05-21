import { expect } from '@playwright/test'
import { Page, Locator } from '@playwright/test'
import Header from '../components/Header.ts'



export default class InventoryPage {    
    readonly page: Page;
    readonly header: Header;
    readonly purchase1: Locator;
    readonly purchase2: Locator;
    readonly purchase3: Locator;




    constructor(page:Page) {
        this.page = page
        this.header = new Header(page);
        this.purchase1 = page.locator('#add-to-cart-sauce-labs-backpack')
        this.purchase2 = page.locator('#add-to-cart-sauce-labs-bike-light')
        this.purchase3 = page.locator('#add-to-cart-sauce-labs-bolt-t-shirt')

    }

    async purchase() {
    await this.purchase1.click()
    await this.purchase2.click()
    await this.purchase3.click()
    }

}