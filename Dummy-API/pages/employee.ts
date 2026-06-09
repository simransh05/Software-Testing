import { APIRequestContext, expect } from '@playwright/test'
import dotenv from 'dotenv'
dotenv.config();

export class employee {
    async getAllEmployeeAndVerify(request: APIRequestContext, endpoint: string) {
        // console.log(`${process.env.BASE_URL}${endpoint}`)
        const res = await request.get(`${process.env.BASE_URL}${endpoint}`);
        const data = await res.json();
        console.log(data.data);
        expect(data.message).toBe('Successfully! All records has been fetched.')
    }

    async getIndividualDataAndVerify(request: APIRequestContext, endpoint: string, userId: string) {
        console.log(`${process.env.BASE_URL}${endpoint}`, typeof userId)
        const res = await request.get(`${process.env.BASE_URL}${endpoint}/${userId}`);
        console.log(res);
        const data = await res.json();
        console.log(data);
        expect(data.data.id).toBe(Number(userId));
        expect(data.status).toBe('success');
    }

    async createNewEmployeeAndVerify(request: APIRequestContext, endpoint: string, name: string, salary: string, age: string) {
        const res = await request.post(`${process.env.BASE_URL}${endpoint}`, { data: { employee_name: name, employee_salary: salary, employee_age: age } });
        console.log(res);
        const data = await res.json();
        console.log(data);
        expect(data.message).toBe('Successfully! Record has been added.');
        expect(data.status).toBe('success');
    }

    async updateTheNewEmployeeAndVerify(request: APIRequestContext, endpoint: string, userId: string, name: string, salary: string, age: string) {
        const res = await request.put(`${process.env.BASE_URL}${endpoint}/${userId}`, { data: { employee_name: name, employee_salary: salary, employee_age: age, id: Number(userId) } });
        console.log(res);
        const data = await res.json();
        console.log(data);
        expect(data.message).toBe('Successfully! Record has been updated.');
        expect(data.data.employee_age).toBe(age);
    }

    async deleteEmployeeAndVerify(request: APIRequestContext, endpoint: string, userId: string) {
        const res = await request.get(`${process.env.BASE_URL}${endpoint}/${userId}`);
        console.log(res);
        const data = await res.json();
        console.log(data);
        expect(data.status).toBe('success');
    }
} 