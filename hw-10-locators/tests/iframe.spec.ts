import { test, expect } from '@playwright/test';

test("checkbox", async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/iframe',
        { waitUntil: 'domcontentloaded' })
    await page.locator('#tinymce>p').fill("Hello from the inside!")
    await expect(page.locator("[#tinymce>p']")).toContainText("Hello from the inside!")

})

//Там на сайте плашка вылетает: "Tiny MCE is in read-only mode....add a valid payment...",
//текст вставить не получается
//Тест написал, как я его себе представляю.

// делается через frameLocator - как-то так  - const frame = page.frameLocator('#mce_0_ifr');
// await frame.locator('#tinymce > p').fill("Hello from the inside!");  