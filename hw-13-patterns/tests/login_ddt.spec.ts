import { test, expect } from '@playwright/test'
import LoginPage from '../pages/LoginPage.ts'
import { createRandomUser } from "../factories/userFactory.ts"

const credentials = [
    { username: 'locked_out_user', password: 'secret_sauce', expectedError: 'Epic sadface: Sorry, this user has been locked out.' },
    { username: 'standard_user', password: 'wrong_password', expectedError: 'Epic sadface: Username and password do not match any user in this service' },
    { username: '', password: 'secret_sauce', expectedError: 'Epic sadface: Username is required' }
];

for (const attempt of credentials) {

    test(`Тест логина для пользователя: ${attempt.username}`, async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.login(attempt.username, attempt.password)
        await expect(loginPage.errorButton).toContainText(attempt.expectedError);
    })
}

test("factory test", async () => {
    const newUser = createRandomUser()
    console.log(newUser)
    await expect(newUser).toHaveProperty('email');
} )
