import { Page } from "playwright/test";
import { jobSelectors } from "../../selectors/admin/jobSelectors";

export class jobPage {
    page:Page
    jobs:jobSelectors
    constructor(page:Page){
        this.page = page;
        this.jobs = new jobSelectors(page);
    }
}