import { test, expect } from '@playwright/test';

test("timeout", async ({ page }) => {
    await page.goto('http://uitestingplayground.com/ajax',
        { waitUntil: 'domcontentloaded' })

        await page.locator('#ajaxButton').click()
        await expect(page.locator('.bg-success')).toBeVisible({ timeout: 20000 });

})
