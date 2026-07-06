import { Page } from "playwright/test";
import { adminSelectors } from "../../selectors/adminSelectors";

export class adminPage {
    page: Page
    admin: adminSelectors
    constructor(page: Page) {
        this.page = page;
        this.admin = new adminSelectors(page);
    }
}