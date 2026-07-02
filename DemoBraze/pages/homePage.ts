import { expect, Page } from "playwright/test";
import { homeSelector } from "../selectors/homeSelector";
import { messages } from "../Data/demoBrazeData";

// home page -> goto and item click add to cart -> alert accept 
export class homePage {
    page: Page
    homeSelector: homeSelector
    constructor(page: Page) {
        this.page = page;
        this.homeSelector = new homeSelector(page);
    }
    async addToCardAndVerify() {
        this.homeSelector.card.first().click();
        await expect(this.page).toHaveURL(/idp/)
        this.page.once('dialog', async dialog => {
            expect(dialog.message()).toBe(messages.addToCart);
            await dialog.accept();
        })
        await this.homeSelector.addBtn.click();
    }

    async logoutAndVerify() {
        await this.homeSelector.logoutBtn.click();
        await expect(this.homeSelector.logoutBtn).toBeHidden();
    }

    async productClickDBL() {
        this.homeSelector.card.first().click();
        await expect(this.page).toHaveURL(/idp/)
        this.page.on('dialog', async dialog => {
            expect(dialog.message()).toBe(messages.addToCart);
            await dialog.accept();
        })
        await this.homeSelector.addBtn.dblclick();
    }
}