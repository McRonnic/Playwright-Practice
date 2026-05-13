import { test, expect } from '@playwright/test';

test("timeout", async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_controls',
        { waitUntil: 'domcontentloaded' })

        await page.locator('#checkbox-example > button').click()
        await expect(page.locator('#loading')).toBeHidden()
        //Дожидается без установки таймаута
        await expect(page.locator('#message')).toBeVisible()
})
