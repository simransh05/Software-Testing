import { test, expect } from '@playwright/test';
import { PlaywrightBlocker } from '@cliqz/adblocker-playwright';
import fetch from 'cross-fetch';

// test('Navigate Book Store', async ({ page }) => {
//     await page.goto('https://demoqa.com/');
//     await page.getByText('Book Store Application').click();
//     await expect(page).toHaveURL(/books/)
// })

// test('Navigate Login', async ({ page }) => {
//     const ad = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
//     await ad.enableBlockingInPage(page)
//     await page.goto('https://demoqa.com/books');
//     await page.locator('#login').click();
//     await expect(page).toHaveURL(/login/);
// })

// test('Naviagte Register User', async ({ page }) => {
//     await page.goto('https://demoqa.com/register')
//     await page.waitForTimeout(2000);
//     await page.locator('#firstname').fill('Simran');
//     await page.locator('#lastname').fill('Sharma');
//     await page.locator('#userName').fill('Simran');
//     await page.locator('#password').fill('Aa@12345');
//     page.once('dialog', async dialog => {
//         const message = dialog.message();
//         await expect(message).toBe('User Registered Successfully.');
//         await dialog.accept();
//     })
//     await page.locator('#register').click();
// })

test.beforeEach('Testing Login Page', async ({ page }) => {
    await page.goto('https://demoqa.com/login');
    await page.locator('#userName').fill('Simran');
    await page.locator('#password').fill('Aa@12345');
    await page.locator('#login').click();
    await expect(page).toHaveURL(/profile/);
})

test('Testing Profile', async ({ page }) => {
    await expect(page.locator('#submit').first()).toBeVisible();
    await page.locator('#submit').first().click();
    await expect(page).toHaveURL(/login/)
})

test('Testing Book Store', async ({ page }) => {
    await page.goto('https://demoqa.com/books');
    await page.locator('#searchBox').fill('pro');
    await page.getByText('Programming JavaScript Applications').click();
    await expect(page.locator('#title-label')).toBeVisible();
    const newTab = page.waitForEvent('popup');
    const url = await page.locator('#userName-value').nth(8).textContent();
    console.log(url)
    await expect(page.locator('#addNewRecordButton').nth(1)).toBeVisible();
    await page.locator('#userName-value').nth(7).click();
    const newPage = await newTab;
    await newPage.waitForLoadState()
    // console.log('page', newPage)
    await expect(newPage).toHaveURL(`${url}`)
})