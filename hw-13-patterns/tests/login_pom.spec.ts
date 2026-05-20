import { test, expect } from '@playwright/test'
import LoginPage from '../pages/LoginPage.ts'
import InventoryPage from '../pages/InventoryPage.ts'






test('Login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce')
    await expect(page).toHaveURL(/.*inventory\.html/)
   
})

test('check cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce')
    await inventoryPage.purchase()
    const itemsCount = await inventoryPage.header.itemNum()
    await expect(itemsCount).toBe('3')
    
})

