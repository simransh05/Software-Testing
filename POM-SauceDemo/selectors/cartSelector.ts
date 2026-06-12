import { Page, Locator } from '@playwright/test'
export class cartSelector {
    page: Page
    cartLink: Locator
    totalCartItem: Locator
    checkout: Locator
    firstName: Locator
    lastName: Locator
    postalCode: Locator
    continue: Locator
    finishBtn: Locator
    textVerify: Locator
    backHome: Locator
    constructor(page: Page) {
        this.page = page
        this.cartLink = page.locator('.shopping_cart_link');
        this.totalCartItem = page.locator('.cart_item');
        this.checkout = page.locator('#checkout');
        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.postalCode = page.locator('#postal-code')
        this.continue = page.locator('#continue');
        this.finishBtn = page.locator('#finish');
        this.textVerify = page.locator('.complete-header');
        this.backHome = page.locator('//*[text()="Back Home"]');
    }
}