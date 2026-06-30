import { Locator, Page } from "playwright/test";

export class cartSelector {
    page: Page
    cartNav: Locator
    orderPlaced: Locator
    cartItem: Locator
    deleteItem: Locator
    confirmBtn: Locator
    placeOrderBtn: Locator
    orderModal: Locator
    name: Locator
    country: Locator
    city: Locator
    creditCard: Locator
    month: Locator
    year: Locator
    purchaseBtn: Locator
    constructor(page: Page) {
        this.page = page
        this.cartNav = page.locator('#cartur')
        this.cartItem = page.locator('#tbodyid .success')
        this.deleteItem = page.locator('#tbodyid .success a')
        this.orderPlaced = page.locator('.sweet-alert')
        this.confirmBtn = page.locator('.confirm')
        this.placeOrderBtn = page.locator('//button[@data-target="#orderModal"]')
        this.orderModal = page.locator('#orderModal')
        this.name = page.locator('#name')
        this.country = page.locator('#country');
        this.city = page.locator('#city');
        this.creditCard = page.locator('#card');
        this.month = page.locator('#month');
        this.year = page.locator('#year');
        this.purchaseBtn = page.locator('#orderModal .btn.btn-primary')

    }

}