import { Page } from "playwright/test";
import { loginPage } from "../login/loginPage";
import { navbarPage } from "../navbar/navbarPage";
import { userManagementPage } from "../admin/userManagementPage";
import { navAdminPage } from "../admin/navAdminPage";
import { jobPage } from "../admin/jobPage";
import { mainPage } from "../main/mainPage";
import { organizationPage } from "../admin/organizationPage";
import { employeePage } from "../PIM/employeePage";
import { leavePage } from "../Leave/leavePage";
import { attendancePage } from "../Time/attendancePage";

export class basePage {
    login: loginPage
    navbar: navbarPage
    userMgt: userManagementPage
    navAdmin: navAdminPage
    jobs: jobPage
    main: mainPage
    org: organizationPage
    emp: employeePage
    leave: leavePage
    attend: attendancePage
    constructor(page: Page) {
        this.login = new loginPage(page);
        this.navbar = new navbarPage(page);
        this.userMgt = new userManagementPage(page);
        this.navAdmin = new navAdminPage(page);
        this.jobs = new jobPage(page);
        this.main = new mainPage(page);
        this.org = new organizationPage(page);
        this.emp = new employeePage(page);
        this.leave = new leavePage(page);
        this.attend = new attendancePage(page);
    }
}