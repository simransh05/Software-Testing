import { expect, Page } from "playwright/test";
import { cartSelector } from "../selectors/cartSelector";
import { messages, orderInfo } from "../Data/demoBrazeData";

type purchaseDetails = {
    name: string,
    country: string,
    city: string,
    creditCard: string,
    month: string,
    year: string
}

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

    async fillDetails(data: purchaseDetails) {
        await this.cartSelector.name.fill(data.name);
        await this.cartSelector.country.fill(data.country)
        await this.cartSelector.city.fill(data.city);
        await this.cartSelector.creditCard.fill(data.creditCard);
        await this.cartSelector.month.fill(data.month);
        await this.cartSelector.year.fill(data.year);
    }

    async placeOrderAndConfirm() {
        await this.page.waitForLoadState('load', { timeout: 15_000 })
        // await this.page.waitForTimeout(5_000)
        await this.cartSelector.placeOrderBtn.click();
        await expect(this.cartSelector.orderModal).toContainClass('show');
        await this.fillDetails(orderInfo.validInfo)
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
            await this.fillDetails(pur);
            this.page.once('dialog', async dialog => {
                expect(dialog.message()).toBe(messages.requiredFields)
                await dialog.accept();
            })
            await this.cartSelector.purchaseBtn.click();
        }
    }
}