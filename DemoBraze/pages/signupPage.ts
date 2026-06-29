import { expect, Page } from "playwright/test";
import { signupSelector } from "../selectors/signupSelector";
import { messages, userInfo } from "../Data/demoBrazeData";

export class signupPage {
    page: Page
    signupSelector: signupSelector
    constructor(page: Page) {
        this.page = page;
        this.signupSelector = new signupSelector(page);
    }

    async uniqueNewUserAndVerify() {
        this.page.on('dialog', async dialog => {
            const message = dialog.message();
            await dialog.accept();
            expect(message).toBe(messages.successSignup);
        })
        await this.signupSelector.signupModalOpen.click();
        expect(this.signupSelector.signupModal).toContainClass('show', { timeout: 15_000 });
        // console.log(userInfo.validSignupUser.username, userInfo.validSignupUser.password)
        // console.log(await this.signupSelector.username.getAttribute('type'))
        await this.signupSelector.username.fill(userInfo.validSignupUser.username);
        await this.signupSelector.password.fill(userInfo.validSignupUser.password);
        await this.signupSelector.signupBtn.nth(1).click();
    }


    async existingUserAndVerify() {
        await this.signupSelector.signupModalOpen.click();
        expect(this.signupSelector.signupModal).toContainClass('show', { timeout: 15_000 });
        console.log(userInfo.invalidSignupUser[0].type);
        const dialogPromise = this.page.waitForEvent('dialog');
        await this.signupSelector.username.fill(userInfo.invalidSignupUser[0].username);
        await this.signupSelector.password.fill(userInfo.invalidSignupUser[0].password);

        await this.signupSelector.signupBtn.nth(1).click();
        const dialog = await dialogPromise;
        console.log(dialog.message(), dialog.type());
        expect(dialog.message()).toBe(messages.existUserSignup);
        // expect(dialog.message()).toBe(messages.fillFields);
        await dialog.accept();
    }

    async userNameMissingAndVerify() {
        await this.signupSelector.signupModalOpen.click();
        expect(this.signupSelector.signupModal).toContainClass('show', { timeout: 15_000 });
        console.log(userInfo.invalidSignupUser[1].type);
        this.page.once('dialog', async dialog => {
            expect(dialog.message()).toBe(messages.fillFields);
            await dialog.accept();
        })
        await this.signupSelector.username.fill(userInfo.invalidSignupUser[1].username);
        await this.signupSelector.password.fill(userInfo.invalidSignupUser[1].password);
        await this.signupSelector.signupBtn.nth(1).click();
    }

    async passwordMissingAndVerify() {
        await this.signupSelector.signupModalOpen.click();
        expect(this.signupSelector.signupModal).toContainClass('show', { timeout: 15_000 });
        console.log(userInfo.invalidSignupUser[1].type);
        this.page.once('dialog', async dialog => {
            expect(dialog.message()).toBe(messages.fillFields);
            await dialog.accept();
        })
        await this.signupSelector.username.fill(userInfo.invalidSignupUser[2].username);
        await this.signupSelector.password.fill(userInfo.invalidSignupUser[2].password);
        await this.signupSelector.signupBtn.nth(1).click();
    }
}