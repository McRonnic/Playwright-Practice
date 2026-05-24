import { test, expect } from '@playwright/test'
import LoginPage from '../pages/LoginPage.ts'
import InventoryPage from '../pages/InventoryPage.ts'
import { Page, Locator } from '@playwright/test'

export class ShopFacade {
    private readonly loginPage: LoginPage;
    private readonly inventoryPage: InventoryPage;

    constructor(public readonly page: Page) {
        this.loginPage = new LoginPage(page);
        this.inventoryPage = new InventoryPage(page);

    }
    async loginAndAddItemToCart(username: string, password: string) {
        await this.loginPage.navigate()
        await this.loginPage.login(username, password)
        await this.inventoryPage.purchase()
    }

}
