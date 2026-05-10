import { test, expect } from '@playwright/test';

test("tables", async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/tables',
        { waitUntil: 'domcontentloaded' })
    const doe = await page.locator('table#table1 tbody tr').filter({ hasText: 'Doe' })
    await expect(doe.getByRole('cell', { name: 'Jason' })).toContainText('Jason')
    await expect(doe.getByRole('cell', { name: '$100.00' })).toContainText('$100.00')
    //смысл ведь был в том, чтобы провести поиск внутри строки, а не сверяться со столбцами?
    //Я все правильно понял?


})
