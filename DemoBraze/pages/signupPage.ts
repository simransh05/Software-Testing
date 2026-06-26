import { Page } from "playwright/test";
import { signupSelector } from "../selectors/signupSelector";

export class signupPage {
    page: Page
    signupSelector: signupSelector
    constructor(page: Page) {
        this.page = page;
        this.signupSelector = new signupSelector(page);
    }

    async uniqueNewUserAndVerify() {
        // #logInModal -> modal open -> show class 
    }


    async invalidUserAndVerify() { }
}