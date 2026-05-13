import { test, expect } from '@playwright/test'
const username = 'standard_user';
const password = 'secret_sauce';

test.describe("saucedemo", () => {
        test.beforeEach(async ({ page }) => {
                await page.goto('https://www.saucedemo.com', { waitUntil: 'domcontentloaded' })
        })

        test("navigation", async ({ page }) => {
                await expect(page).toHaveTitle('Swag Labs')
        })

        test("login", async ({ page }) => {
                await page.fill('#user-name', username)
                await page.fill('#password', password)
                await page.click('input[type="submit"]')
                await expect(page.url()).toHaveURL(/.*inventory\.html/)
        })

        test("wronglogin", async ({ page }) => {
                await page.fill('#user-name', username)
                await page.fill('#password', "12345")
                await page.click('input[type="submit"]')
                await expect(page.locator('h3')).toContainText('do not match')
        })

})

test.describe("demoqa", () => {

        test("checkbox", async({ page }) => {
                await page.goto('https://demoqa.com/checkbox', { waitUntil: 'domcontentloaded' })
                await page.click('.rc-tree-switcher')
                await page.check('[aria-label="Select Desktop"]')
                await expect(page.locator('#result')).toContainText('desktop')
                await expect(page.locator('#result')).toContainText('notes')
                await expect(page.locator('#result')).toContainText('commands')
        })
})