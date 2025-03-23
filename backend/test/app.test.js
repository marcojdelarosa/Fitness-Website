import { describe, assert, expect, test } from 'vitest';
import { request } from './setupTest.js';
describe('Test auth api', async () => {
    test('returns from test endpoint', async () => {
        const res = await request.get('/api/auth/something');
        expect(res).toBeDefined;
    });
    test('creates test user', async() => {
        const res1 = await request.get('/api/auth/something');
        const responseJSON = await JSON.parse(res1.text);
        console.log(responseJSON);
        const testUser = { email: "testuser@spottr.com", password: "test", 
            firstName: "first", lastName: "last"};
        if (!(responseJSON).some((user) => user.email == testUser.email)) {
            const res2 = await request.post('/api/auth/testRegister').send(testUser);
            expect(await res.rowsAffected, 'test user created!').toBe(1);    
        }
        else
        {
            assert(true, 'test user already exists!');
        }
    });
})