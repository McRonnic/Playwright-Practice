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

//Некоторая недосказанность в задаче, поэтому сделал проверку корзины
//Можно бы было еще собрать LoginPage и InventoryPage в pageManager,
//a navigate и login собрать в Actions и импортировать оттуда,
//чтобы не дублировать код, но решил аж так не усложнять :)
test('check cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce')
    await inventoryPage.purchase()
    const itemsCount = await inventoryPage.header.itemNum()
    await expect(itemsCount).toBe('3')
    
})

