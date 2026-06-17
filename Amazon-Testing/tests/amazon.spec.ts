import { test, expect } from '@playwright/test';
import { homePage } from '../pages/homePage';
import database from '../data/data';

test('Amazon Home', async ({ page , request}) => {
    const home = new homePage(page);
    await home.goToHomeAndLoad();
    await home.searchAndNavigateCheck(database.inputSearch)
    await home.addToCart();
    await home.cartCountMoreThan0();
    await home.gotoCartAndVerifyReach();
    await home.verifyCartItem();
});
