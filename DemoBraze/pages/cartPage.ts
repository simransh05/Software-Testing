import { expect, Page } from "playwright/test";
import { cartSelector } from "../selectors/cartSelector";
import { messages, orderInfo } from "../Data/demoBrazeData";

export class cartPage {
    page: Page
    cartSelector: cartSelector
    constructor(page: Page) {
        this.page = page;
        this.cartSelector = new cartSelector(page);
    }

    async gotocartAndVerify() {
        await this.cartSelector.cartNav.click();
        await expect(this.page).toHaveURL(/cart/)
    }

    async verifyCartItems(total: number) {
        await expect(this.cartSelector.cartItem.first()).toBeVisible();
        const count = await this.cartSelector.cartItem.count();
        expect(count).toBe(total);
    }

    async placeOrderAndConfirm() {
        await this.page.waitForLoadState('load', { timeout: 15_000 })
        // await this.page.waitForTimeout(5_000)
        await this.cartSelector.placeOrderBtn.click();
        await expect(this.cartSelector.orderModal).toContainClass('show');
        await this.cartSelector.name.fill(orderInfo.validInfo.name);
        await this.cartSelector.country.fill(orderInfo.validInfo.country)
        await this.cartSelector.city.fill(orderInfo.validInfo.city);
        await this.cartSelector.creditCard.fill(orderInfo.validInfo.creditCard);
        await this.cartSelector.month.fill(orderInfo.validInfo.month);
        await this.cartSelector.year.fill(orderInfo.validInfo.year);
        await this.cartSelector.purchaseBtn.waitFor({ state: 'visible', timeout: 15_000 })
        await expect(this.cartSelector.purchaseBtn).toBeVisible()
        await this.cartSelector.purchaseBtn.scrollIntoViewIfNeeded()
        // await this.page.pause()
        await this.cartSelector.purchaseBtn.click();
        await this.page.waitForTimeout(500);
        await expect(this.cartSelector.confirmBtn).toBeVisible({ timeout: 15_000 });
        await this.cartSelector.confirmBtn.click();
        await expect(this.page).toHaveURL(/index/, { timeout: 15_000 })
    }

    async missingFieldWhilePurchase() {
        await this.page.waitForLoadState('load', { timeout: 15_000 })
        // await this.page.waitForTimeout(5_000)
        await this.cartSelector.placeOrderBtn.click();
        await expect(this.cartSelector.orderModal).toContainClass('show');
        for (let pur of orderInfo.invalidInfo) {
            await this.cartSelector.name.fill(pur.name);
            await this.cartSelector.country.fill(pur.country)
            await this.cartSelector.city.fill(pur.city);
            await this.cartSelector.creditCard.fill(pur.creditCard);
            await this.cartSelector.month.fill(pur.month);
            await this.cartSelector.year.fill(pur.year);
            this.page.once('dialog', async dialog => {
                expect(dialog.message()).toBe(messages.requiredFields)
                await dialog.accept();
            })
            await this.cartSelector.purchaseBtn.click();
        }
    }
}