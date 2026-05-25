import { expect, test } from '@playwright/test'
import { PlaywrightBlocker } from '@cliqz/adblocker-playwright';
import fetch from 'cross-fetch';
// test('Navigate Element', async ({ page }) => {
//     await page.goto('https://demoqa.com/');
//     await page.locator('//a[@href="/elements"]').click();
//     await expect(page).toHaveURL(/elements/)
// })

// // idea is go to elements check if the menu is open if not then open menu and click text box
// test('Naviagte TextBox', async ({ page }) => {
//     const blocker = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
//     await blocker.enableBlockingInPage(page);
//     await page.goto('https://demoqa.com/elements')
//     const isVisible = await page.locator('//*[@class="text" and text()="Text Box"]').isVisible();
//     console.log('here', isVisible);
//     if (!isVisible) {
//         await page.locator('//*[text()="Elements"]').click();
//     }
//     // await expect(page.locator('//*[@class="text" and text()="Text Box"]'));
//     await page.locator('//*[@class="text" and text()="Text Box"]').click();
//     await expect(page).toHaveURL(/text-box/)
// })

// // test for goto fill name email address permanent add submit btn
// test('Fill TextBox', async ({ page }) => {
//     await page.goto('https://demoqa.com/text-box');
//     await page.fill('#userName', 'Simran');
//     await page.fill('#userEmail', 'simran@gmail.com');
//     await page.fill('#currentAddress', 'Delhi');
//     await page.fill('#permanentAddress', 'Delhi');
//     await page.locator('#submit').click();
//     await expect(page.locator('#email')).toBeVisible();
// })

// // go to checkbox from element
// test('Navigate CheckBox', async ({ page }) => {
//     // find checkbox click naviagte check
//     const block = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
//     await block.enableBlockingInPage(page);
//     await page.goto('https://demoqa.com/elements');
//     await page.locator('//*[@class="text" and text()="Check Box"]').click();
//     await expect(page).toHaveURL(/checkbox/)
// })

// // checkbox click commands (in progress)
// test('Checkbox Home', async ({ page }) => {
//     const block = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
//     await block.enableBlockingInPage(page);
//     await page.goto('https://demoqa.com/checkbox');
//     const check = await page.locator('//*[@role="checkbox" and @aria-label="Select Home"]').getAttribute('aria-checked'); if (check === 'false') {
//         await page.locator('//*[@role="checkbox" and @aria-label="Select Home"]').click();
//     }
//     await expect(page.locator('//*[@role="checkbox" and @aria-label="Select Home"]')).toHaveAttribute('aria-checked', 'true');
// });

// test('CheckBox Command', async ({ page }) => {
//     // role is treeitem , aria-expended get attribute
//     // if !open then open then same for next
//     // checkbox click then expect(that box).ischecked()
// })

// test('Navigate Radio-Button', async ({ page }) => {
//     let ads = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
//     await ads.enableBlockingInPage(page);
//     await page.goto('https://demoqa.com/elements');
//     await page.locator('//*[@class="text" and text()="Radio Button"]').click();
//     await expect(page).toHaveURL(/radio-button/)
// })

// idea naviagte to page then click on yes check if yes is clicked then click another check if yes is still
// test('Click Radio-Button', async ({ page }) => {
//     await page.goto('https://demoqa.com/radio-button');
//     await page.locator('//*[@id ="yesRadio"]').click();
//     await expect(page.locator('//*[@id ="yesRadio"]')).toBeChecked();
//     await page.locator('//*[@id="impressiveRadio"]').click();
//     await expect(page.locator('//*[@id ="yesRadio"]')).not.toBeChecked();
// })

// test('Navigate Web-Tables', async ({ page }) => {
//     let ads = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
//     await ads.enableBlockingInPage(page);
//     await page.goto('https://demoqa.com/elements');
//     await page.locator('//*[@class="text" and text()="Web Tables"]').click();
//     await expect(page).toHaveURL(/webtables/)
// })


// add btn click form fill submit if added check next edit click change submit then check delete check present  
// test('Add TableItem', async ({ page }) => {
//     await page.goto('https://demoqa.com/webtables');
//     const prevCount = await page.locator('.table tr').count();
//     console.log('count', prevCount);
//     await page.locator('//*[@id="addNewRecordButton"]').click();
//     await expect(page.locator('//*[@role="dialog"]')).toBeVisible();
//     await page.fill('#firstName', 'Simran');
//     await page.fill('#lastName', 'Sharma');
//     await page.fill('#userEmail', 'simran@gmail.com');
//     await page.fill('#age', '23');
//     await page.fill('#salary', '40000');
//     await page.fill('#department', 'Development')
//     await page.locator('//*[@id="submit"]').click();
//     const newCount = await page.locator('.table tr').count();
//     console.log('all', prevCount, newCount);
//     await expect(newCount).toBe(prevCount + 1);
//     await page.locator(`//*[@id="edit-record-${newCount - 1}"]`).click();
//     await expect(page.locator('//*[@role="dialog"]')).toBeVisible();
//     await page.fill('#salary', '50000');
//     await page.locator('//*[@id="submit"]').click();
//     await page.locator(`//*[@id="delete-record-${newCount - 1}"]`).click();
//     const afterDelete = await page.locator('.table tr').count();
//     await expect(afterDelete).toBe(newCount - 1);
// })

// button
// test('Navigate Button', async ({ page }) => {
//     let ads = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
//     await ads.enableBlockingInPage(page);
//     await page.goto('https://demoqa.com/elements');
//     await page.locator('//*[@class="text" and text()="Buttons"]').click();
//     await expect(page).toHaveURL(/buttons/)
// })

// test('Click Buttons', async ({ page }) => {
//     await page.goto('https://demoqa.com/buttons');
//     await page.locator('#doubleClickBtn').dblclick();
//     await expect(page.locator('#doubleClickMessage')).toBeVisible();
//     await page.locator('#rightClickBtn').click({ button: 'right' })
//     await expect(page.locator('#rightClickMessage')).toBeVisible();
//     await page.locator('//*[text()="Click Me"]').click();
//     await expect(page.locator('#dynamicClickMessage')).toBeVisible();
// })

// test('Navigate Links', async ({ page }) => {
//     let ads = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
//     await ads.enableBlockingInPage(page);
//     await page.goto('https://demoqa.com/elements');
//     await page.locator('//*[@class="text" and text()="Links"]').click();
//     await expect(page).toHaveURL(/links/)
// })

test('Click Links', async ({ page }) => {
    await page.goto('https://demoqa.com/links');
    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('#simpleLink').click()
    ]);
    await page.locator('#simpleLink').click();
    // console.log('here', newPage.url());
    await expect(newPage).toHaveURL('https://demoqa.com');
})