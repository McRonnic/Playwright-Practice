//import { test, expect } from '@playwright/test'
import { test, expect } from '../pages/fixtures';
import { Page, Locator } from '@playwright/test'
//import LoginPage from '../pages/LoginPage.ts'
import InventoryPage from '../pages/InventoryPage.ts'
import PopUp from '../pages/PopUp.ts'

test('Login with valid credentials', async ({ loginPage }) => {
    const inventoryPage = new InventoryPage(loginPage.page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce')
    await expect(loginPage.page).toHaveURL(/.*inventory\.html/)

})

//Некоторая недосказанность в задаче, поэтому сделал проверку корзины.
//Можно бы было еще собрать LoginPage и InventoryPage в pageManager,
//a navigate и login собрать в Actions и импортировать оттуда,
//чтобы не дублировать код, но решил аж так не усложнять :)

// UPD: фикстуры вроде то же самое делают, но подход с pageManager 
// кажется чище и понятнее.
// https://github.com/McRonnic/Course_complete/blob/master/Pages/PageManager.js

test('check cart', async ({ loginPage }) => {
    const inventoryPage = new InventoryPage(loginPage.page);
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce')
    await inventoryPage.purchase()
    const itemsCount = await inventoryPage.header.itemNum()
    await expect(itemsCount).toBe('3')

})

test('modal test', async ({ page }) => {
    const popUp = new PopUp(page);
    await popUp.openModal();
    await expect(popUp.modalLocator).toBeVisible()
    await console.log(await popUp.getText())
    await popUp.closeModal();
    await expect(popUp.modalLocator).toBeHidden()
})