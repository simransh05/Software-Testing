import { expect, Page } from "@playwright/test"

export class navbarPage {
    page:Page
    constructor(page:Page){
        this.page = page
    }
}