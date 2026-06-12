import { expect, APIRequestContext } from "@playwright/test"
import dotenv from 'dotenv'
dotenv.config();

export class book {
    async getAllBooksAndVerify(request: APIRequestContext, endpoint: string) {
        const res = await request.get(`${process.env.BASE_URL}${endpoint}`);
        // console.log(res);
        const book = await res.json();
        // console.log(book);
        expect(book.books[0].title).toBe('Git Pocket Guide')
    }
}