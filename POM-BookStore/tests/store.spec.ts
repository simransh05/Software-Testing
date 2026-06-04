import { test } from '@playwright/test';
import { loginPage } from '../pages/loginPage';

test('Testing Login', async ({ page }) => {
    const loginUser = new loginPage(page);
    await loginUser.login('Simran', 'Aa@12345')
})

// after delete account modal not closed issue (bug)