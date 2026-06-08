import { test, expect } from '@playwright/test';
import dotenv from 'dotenv'
import { account } from '../pages/account';
import { book } from '../pages/books';
dotenv.config();

// test('Authorize User', async ({ request }) => {
//   const userAccount = new account();
//   await userAccount.authorizedPostAndVerify(request, '/Account/v1/Authorized', 'sim', 'Aa@12345');
//   await userAccount.generateTokenAndVerify(request, '/Account/v1/GenerateToken', 'sim', 'Aa@12345');
//   const userId = await userAccount.userAccountAndVerify(request, '/Account/v1/User', 'sim', 'Aa@12345')
//   console.log(userId);
//   await userAccount.getUserAccountAndVerify(request, '/Account/v1/User/', userId)
// })

test('Book Testing', async ({ request }) => {
  const bookStore = new book();
  await bookStore.getBooksAndVerify(request, '/BookStore/v1/Books')
})