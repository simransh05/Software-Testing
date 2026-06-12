import { test, expect } from '@playwright/test';
import { homePage } from '../pages/homePage';

test('Amazon Home', async ({ page }) => {
    const home = new homePage(page);
    await home.goToHome();
    await home.searchAndNavigateCheck('shoes')
    await home.addToCart();
    await home.cartCountMoreThan0();
    await home.gotoCartAndVerifyReach();
    await home.verifyCartItem();
});
