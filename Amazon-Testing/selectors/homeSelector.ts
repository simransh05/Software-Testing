import { Page, Locator } from '@playwright/test'

export class homeSelector {
    page: Page
    searchBox: Locator
    searchItem: Locator
    TextContent: Locator
    addToCartBtn: Locator
    addBtn: Locator
    menuCount: Locator
    confirmModal: Locator
    navCart: Locator
    cartItem: Locator
    constructor(page: Page) {
        this.page = page
        this.searchBox = page.locator('#twotabsearchtextbox');
        this.searchItem = page.getByRole("row");
        this.TextContent = page.locator('.a-size-base.a-spacing-small.a-spacing-top-small.a-text-normal');
        this.addToCartBtn = page.locator('button#a-autoid-3-announce.a-button-text')
        this.addBtn = page.locator('.a-row.a-size-medium button')
        this.menuCount = page.locator('#nav-cart-count')
        this.confirmModal = page.locator('#a-popover-content-3');
        this.navCart = page.locator('#nav-cart')
        this.cartItem = page.locator('.a-unordered-list .sc-delivery-messaging')
    }
}