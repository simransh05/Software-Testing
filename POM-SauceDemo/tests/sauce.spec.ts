import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginPage';
import { inventoryPage } from '../pages/inventoryPage';
import { navbarPage } from '../pages/navbarPage';
import { cartPage } from '../pages/cartPage';

// complete register login profile check then add anything then profile count check then logout then 
// login and delete account
test.beforeEach('Login', async ({ page }) => {
    const loginUser = new loginPage(page);
    await loginUser.loginUser('standard_user', 'secret_sauce');
    await loginUser.loginVerify();
})

// testing 
test('Inventory', async ({ page }) => {
    const inventory = new inventoryPage(page);
    const navbar = new navbarPage(page);
    await inventory.filterAndVerifyFilter();
    await navbar.checkCartCountToBe0()
    await inventory.verifyIndividualProduct();
    await page.goBack()
    await inventory.addProduct();
    await navbar.checkCartCountMoreThan0();
    const cart = new cartPage(page);
    await cart.gotoCartAndVerifyReach();
    await cart.doCheckoutAndVerifyPage();
    await cart.fillCheckoutInfoAndVerifyReach('s', 's', 1);
    await cart.finishTheProcessAndVerify();
    await cart.goBackHome();
    await navbar.checkCartCountToBe0();
})