import { test, expect } from '@playwright/test';

test("shadow", async ({ page }) => {

    await page.goto('http://uitestingplayground.com/shadowdom',
        { waitUntil: 'domcontentloaded' })

    await page.locator('#buttonGenerate').click()
    await page.locator('#buttonCopy').click()

    const text = await page.locator('#editField').inputValue()
    await expect(text.length).toBeGreaterThan(0)
})


