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
        this.addToCartBtn = page.locator('.puis-card-container button')
        this.addBtn = page.locator('.a-modal-scroller button.a-button-text')
        this.menuCount = page.locator('#nav-cart-count')
        this.confirmModal = page.locator('.a-popover');
        this.navCart = page.locator('#nav-cart')
        this.cartItem = page.locator('.a-unordered-list .sc-delivery-messaging')
    }
}