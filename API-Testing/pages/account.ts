import { expect, APIRequestContext } from "@playwright/test"
import dotenv from 'dotenv'
dotenv.config();
export class account {

    async authorizedPostAndVerify(request: APIRequestContext, endpoint: string, name: string, password: string) {
        let res = await request.post(`${process.env.BASE_URL}${endpoint}`, {
            data: {
                userName: name,
                password: password
            }
        })
        expect(res.status()).toBe(200);
        expect(res.ok()).toBeTruthy();
    }

    async generateTokenAndVerify(request: APIRequestContext, endpoint: string, name: string, password: string) {
        const res = await request.post(`${process.env.BASE_URL}${endpoint}`, {
            data: {
                userName: name,
                password: password
            }
        })
        const body = await res.json();
        // console.log(body);
        expect(body.status).toBe('Success')
        expect(res.status()).toBe(200);
    }

    async userAccountAndVerify(request: APIRequestContext, endpoint: string, name: string, password: string): Promise<string> {
        const res = await request.post(`${process.env.BASE_URL}${endpoint}`, {
            data: {
                userName: name,
                password: password
            }
        })
        expect(res.status()).toBe(201);
        // console.log(res);
        const body = await res.json();
        // console.log(body);
        expect(body.username).toBe(name);
        return body.userID;
    }

    async getUserAccountAndVerify(request: APIRequestContext, endpoint: string, userId: string) {
        const res = await request.get(`${process.env.BASE_URL}${endpoint}${userId}`);
        console.log(res);
    }
}