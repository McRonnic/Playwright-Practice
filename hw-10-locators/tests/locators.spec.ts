import { test, expect } from '@playwright/test';

test("checkbox", async ({ page }) => {
        await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html',
                { waitUntil: 'domcontentloaded' })
        await page.locator('#dropdowm-menu-1').selectOption("Python")
        await page.locator("input[value='yellow']").check()
        await expect(page.locator("input[value='yellow']")).toBeChecked()
        await expect(page.locator("input[value='cabbage']")).toBeDisabled()

})
