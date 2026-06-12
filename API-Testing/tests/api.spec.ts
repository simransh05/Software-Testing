import { test, expect } from '@playwright/test';
import dotenv from 'dotenv'
import { account } from '../pages/account';
import { book } from '../pages/books';
import endpoint from '../data/constantData';
dotenv.config();

test('Authorize User', async ({ request }) => {
  const userAccount = new account();
  await userAccount.postLoginAndVerify(request, endpoint.postLogin, 'sim', 'Aa@12345');
  await userAccount.generateTokenAndVerify(request, endpoint.generateToken, 'sim', 'Aa@12345');
  const userId = await userAccount.createNewUserAndVerify(request, endpoint.createUser, 'sim', 'Aa@12345')
  console.log(userId);
  await userAccount.getIndividualUserAccount(request, endpoint.getUser, userId)
})

test('Book Testing', async ({ request }) => {
  const bookStore = new book();
  await bookStore.getAllBooksAndVerify(request, endpoint.getBook)
})