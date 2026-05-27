import { test, expect } from '@playwright/test';
import { PlaywrightBlocker } from '@cliqz/adblocker-playwright';
import fetch from 'cross-fetch';
// test('Navigate Form', async ({ page }) => {
//     await page.goto('https://demoqa.com/');
//     await page.locator('//*[text()="Forms"]').click();
//     await expect(page).toHaveURL(/forms/);
// })

// test('Navigate Practice Form', async ({ page }) => {
//     const ad = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
//     await ad.enableBlockingInPage(page);
//     await page.goto('https://demoqa.com/forms');
//     await page.locator('//*[@class="text" and text()="Practice Form"]').click();
//     await expect(page).toHaveURL(/automation-practice-form/);
// })

test('Fill Form', async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form');
    await page.fill('#firstName', 'Simran');
    await page.fill('#lastName', 'Sharma');
    await page.fill('#userEmail', 'simran@gmail.com');
    await page.locator('#gender-radio-2').click();
    await expect(page.locator('#gender-radio-2')).toBeChecked();
    await page.fill('#userNumber', '1234567890');
    await page.fill('#dateOfBirthInput', '23 May 2003');
    await page.fill('#subjectsInput', 'Math');
    await page.getByText('Maths').click();
    await page.locator("#hobbies-checkbox-1").click();
    await expect(page.locator("#hobbies-checkbox-1")).toBeChecked();
    await page.locator("#hobbies-checkbox-2").click();
    await expect(page.locator("#hobbies-checkbox-2")).toBeChecked()
    await page.locator("#hobbies-checkbox-3").click();
    await expect(page.locator("#hobbies-checkbox-3")).toBeChecked()
    await page.locator('#uploadPicture').setInputFiles('C:/Users/vinay/OneDrive/Pictures/Chat.jpg');
    await page.fill('#currentAddress', 'Delhi');
    await expect(page.locator('.css-16xfy0z-control')).toHaveAttribute('aria-disabled', 'true');
    await page.fill('#react-select-3-input', 'haryana');
    await page.getByText('Haryana').nth(1).click();
    await expect(page.locator('.css-1dimb5e-singleValue').first()).toHaveText('Haryana');
    await page.fill('#react-select-4-input', 'karnal');
    await page.getByText('Karnal').nth(1).click();
    await expect(page.locator('.css-1dimb5e-singleValue').nth(1)).toHaveText('Karnal');
    await page.locator('#submit').click();
    await expect(page.locator('//*[@role="dialog"][.//text()="Thanks for submitting the form"]')).toBeVisible();
})