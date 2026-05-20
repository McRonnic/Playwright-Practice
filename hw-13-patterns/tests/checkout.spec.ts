import { test, expect } from '@playwright/test'

import LoginPage from '../pages/LoginPage.ts'
import InventoryPage from '../pages/InventoryPage.ts'
import { Page, Locator } from '@playwright/test'
import {ShopFacade} from '../facades/ShopFacade.ts'


test("facade test", async ({page}) => {
    const shopFacade = new ShopFacade(page);
    await shopFacade.loginAndAddItemToCart('standard_user', 'secret_sauce');
} )

