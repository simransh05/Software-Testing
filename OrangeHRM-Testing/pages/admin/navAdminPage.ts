import { expect, Page } from "playwright/test";
import { navAdminSelectors } from "../../selectors/admin/navAdminSelectors";

export class navAdminPage {
    page: Page
    navAdmin: navAdminSelectors
    constructor(page: Page) {
        this.page = page;
        this.navAdmin = new navAdminSelectors(page);
    }

    async openAndNavAndVerify(menu: string, submenu: string, url: string) {
        await this.navAdmin.openMenu(menu).click();
        await this.navAdmin.menuItem(submenu).click();
        await expect(this.page).toHaveURL(new RegExp(url));
    }
}