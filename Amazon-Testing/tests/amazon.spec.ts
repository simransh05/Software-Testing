import { test } from '../fixtures/fixture'
import database from '../data/data';

test('Amazon Home', async ({ homePage }) => {
    await homePage.goToHomeAndLoad();
    await homePage.searchAndNavigateCheck(database.inputSearch)
    await homePage.addToCart();
    await homePage.cartCountMoreThan0();
    await homePage.gotoCartAndVerifyReach();
    await homePage.verifyCartItem();
});

