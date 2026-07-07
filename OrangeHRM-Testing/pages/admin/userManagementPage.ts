import { Page } from "playwright/test";
import { userManagementSelectors } from "../../selectors/admin/userManagementSelectors";
import { logger } from "../../logs/logger";

export class userManagementPage {
    page: Page
    userMgt: userManagementSelectors
    constructor(page: Page) {
        this.page = page;
        this.userMgt = new userManagementSelectors(page);
    }

    async filterSystemUserAndVerify(username: string, empName: string) {
        // check for username , role select , employee name , status 
        // reset everytime
     }

    async resetFilterAndVerify() { }
}