import { Page, Locator, expect } from "@playwright/test";

export class inventoryPage {
    page: Page
    filterSelect: Locator
    price: Locator
    productName: Locator
    addProductBtn: Locator
    constructor(page: Page) {
        this.page = page;
        this.filterSelect = page.locator('.product_sort_container');
        this.price = page.locator('.inventory_item_price')
        this.productName = page.locator('.inventory_item_name ');
        this.addProductBtn = page.locator('#add-to-cart-sauce-labs-backpack')
    }

    async addProduct() {
        // idea is to take first element then click the btn add product then check the count
        await this.addProductBtn.first().click();
    }
    // check the after filter the first value and second value compare 
    async filterAndVerifyFilter() {
        await this.filterSelect.selectOption('lohi');
        const firstValue = await this.price.first().textContent();
        const secondValue = await this.price.nth(1).textContent();
        // console.log('values', firstValue, secondValue)
        await expect(Number(firstValue?.match(/\d+/))).toBeLessThan(Number(secondValue?.match(/\d+/)))
    }

    async verifyIndividualProduct() {
        // idea is to goto first elemnt then click name then check the navigate to id ?
        await this.productName.first().click();
        await expect(this.page).toHaveURL(/id/)
    }
}