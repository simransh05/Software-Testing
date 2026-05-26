import { test, expect } from '@playwright/test'

// need to login first for any test
test('Enter Login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.locator('#login-button').click();
    await expect(page).toHaveURL(/inventory.html/)
})

test('Logout', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.locator('#login-button').click();
    await expect(page).toHaveURL(/inventory.html/)
    await page.locator('#react-burger-menu-btn').click();
    await page.locator('#logout_sidebar_link').click();
    await expect(page.url()).toBe('https://www.saucedemo.com/');
})