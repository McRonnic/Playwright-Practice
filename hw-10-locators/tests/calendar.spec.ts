import { test, expect } from '@playwright/test';

test("clendar", async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/Datepicker/index.html',
        { waitUntil: 'domcontentloaded' })
    await page.locator('.form-control').click()
    await page.getByRole('columnheader', { name: '»' }).click()
    await page.getByRole('cell', { name: '15' }).click()
    await expect(page.locator('#datepicker > input')).toHaveValue(/15/);


})


